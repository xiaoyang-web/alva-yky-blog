import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "ALVA-YKY",
      description: "a simple blog website",
    },
  },

  theme,

  shouldPrefetch: false,
});
