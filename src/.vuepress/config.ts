import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  dest: './public',

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
