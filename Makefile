# The following flag is used when compiling a file.
CXXFLAGS=-c
# To turn on debugging with gdb a flag -g can easily be added
# into above variable.

# The following flag is used when link all object files together.
LDFLAGS=

# Defailt target to build and pack
# Note: there is no command since the Make will run
# the dependencis if it is no up-to-date
all: build doc pack

# This is a target that will compile every component of the
# project, in this case there is only one: main
build: main

# This is the target that link together object files
# to craete the executable named main.
# It is called main (the same name as the target) so
# if the file is already exist and there is no changes
# in its dependecy, the command will not run.
#
# This target depends on main.o since it uses this
# object file to create an executable.
main: main.o fib.o fib_cache.o
# LDFLAGS is used because this command only link object file to an executable file.
# $@ is referring to main (the name of the target).
# $< refers to main.o (the first entry in the dependency list of this target).
# $^ refers to the entire list of dependency.
	$(CXX) $(LDFLAGS) -o $@ $^

main.o: main.cc fib.h
# $@ is referring to main (the name of the target).
# $< refers to main.o (the first entry in the dependency list of this target).
	$(CXX) $(CXXFLAGS) -o $@ $<

fib.o: fib.cc fib.h
	$(CXX) $(CXXFLAGS) -o $@ $<

fib_cache.o: fib_cache.cc fib_cache.h
	$(CXX) $(CXXFLAGS) -o $@ $<

# This target is to create an archive file containing the source code.
pack: main.cc fib.h Makefile
# $^ refers to all entries in the dependency list of this target.
	tar czf fib-dist.tar.gz $^

doc:
	doxygen Doxyfile

# To mainly remove any generated file.
clean:
# '-' is used to ignore error if any occur.
# '-rf' with rm is dangerous.
	-rm -f main
	-rm -f *.o