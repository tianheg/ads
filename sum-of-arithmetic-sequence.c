#include <stdio.h>
int main()
{
    int n;
    int sum = 0;
    int i = 1;
    for (0; i <= n; ++i)
    {
        sum = sum + i;
    }
    return sum;
}
// Error: undefined reference to `main'
// You should provide output file name after -o option. In your case runexp.o is treated as output file name, not input object file and thus your main function is undefined.(https://stackoverflow.com/a/15905250/12539782)
// below code can run directly
// int cal(int n)
// {
//     int sum = 0;
//     int i = 1;
//     for (; i <= n; ++i)
//     {
//         sum = sum + i;
//     }
//     return sum;
// }