module.exports = (ctx) => ({
  title: "ADS",
  description: "解决问题",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
  ],
  theme: "book",
  themeConfig: {
    logo: "/logo.png",
    repo: "tianheg/algorithm",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    docsDir: "docs",
    docsBranch: "main",
    nav: require("./nav/nav"),
    searchPlaceholder: "搜索……",
    // sidebarDepth: 2,
    // sidebar: { "/basis/": getBasisSidebar() },
    lastUpdated: "上次更新",
    smoothScroll: true,
  },
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          "/": {
            message: "发现新内容可用",
            buttonText: "刷新",
          },
        },
      },
    ],
    ["@vuepress/medium-zoom"],
    [
      "vuepress-plugin-container",
      {
        type: "callout",
        before: (info) => `<div class="callout"><p class="title">${info}</p>`,
        after: "</div>",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "tree",
        before: `<pre class="tree"><code>`,
        after: `</code></pre>`,
      },
    ],
    ["@vuepress/back-to-top"],
    ["fulltext-search"],
    ["vuepress-plugin-mathjax"],
  ],
  extraWatchFiles: [".vuepress/nav/nav.js"],
  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-footnote")),
        md.use(require("markdown-it-task-lists"));
    },
    lineNumbers: true,
  },
});

// function getBasisSidebar() {
//   return [
//     '',
//   ]
// }