const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "丁友会 × ut.code(); プログラミング講習会 2021",
  url: "https://programming-workshop-with-tuk.utcode.net",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onDuplicateRoutes: "throw",
  favicon: "img/favicon.ico",
  organizationName: "ut-code",
  projectName: "programming-workshop-with-tuk",
  i18n: {
    locales: ["ja"],
    defaultLocale: "ja",
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: [require.resolve("./src/custom.css")],
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "丁友会 × ut.code(); プログラミング講習会 2021",
        logo: {
          alt: "ut.code();",
          src: "img/logo.svg",
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      footer: {
        style: "dark",
        logo: { alt: "ut.code();", src: "img/logo-white.svg" },
        links: [
          {
            title: "東京大学工学部丁友会",
            items: [
              { label: "ウェブサイト", href: "https://tuk.t.u-tokyo.ac.jp/" },
              { label: "Twitter", href: "https://twitter.com/ut_tuk" },
            ],
          },
          {
            title: "ut.code();",
            items: [
              { label: "ウェブサイト", href: "https://utcode.net/" },
              { label: "Twitter", href: "https://twitter.com/utokyo_code" },
            ],
          },
          {
            title: "この企画について",
            items: [
              {
                label: "告知",
                href: "https://tuk.t.u-tokyo.ac.jp/others/2021-programming/",
              },
              {
                label: "GitHub",
                href: "https://github.com/ut-code/programming-workshop-with-tuk",
              },
            ],
          },
        ],
      },
    }),
};
