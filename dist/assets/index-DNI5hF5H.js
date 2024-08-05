import { j as jsxRuntimeExports } from "./react-B6YrmEGE.js";
import { M as MarkdownIt } from "./markdown-it-C_1hIe1U.js";
import { H as HighlightJS } from "./highlight-C81xf76z.js";
import "./vendor-DvO_wtw5.js";
let markdown;
function createMarkdown() {
  if (markdown) {
    return markdown;
  }
  markdown = MarkdownIt({
    highlight: function(str, lang) {
      if (lang && HighlightJS.getLanguage(lang)) {
        try {
          return HighlightJS.highlight(str, { language: lang, ignoreIllegals: true }).value;
        } catch (err) {
          console.log(err);
        }
      }
      return markdown.utils.escapeHtml(str);
    }
  });
  return markdown;
}
function ImgParserPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "ImgParser" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { dangerouslySetInnerHTML: { __html: createMarkdown } })
  ] });
}
export {
  ImgParserPage as default
};
//# sourceMappingURL=index-DNI5hF5H.js.map
