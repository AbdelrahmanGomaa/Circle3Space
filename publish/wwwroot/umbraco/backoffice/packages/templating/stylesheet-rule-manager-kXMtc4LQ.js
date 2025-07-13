class a {
  #e = /\/\*\*\s*umb_name:\s*(?<name>[^*\r\n]*?)\s*\*\/\s*(?<selector>[^,{]*?)\s*{\s*(?<styles>.*?)\s*}/gis;
  /**
   * Extracts umbraco rules from a stylesheet content
   * @param {string} stylesheetContent
   * @returns {*}
   * @memberof UmbStylesheetRuleManager
   */
  extractRules(e) {
    const n = this.#e;
    if (!e) throw Error("No Stylesheet content");
    return [...e.matchAll(n)].map((s) => ({
      name: s.groups?.name || "",
      selector: s.groups?.selector || "",
      styles: s.groups?.styles || ""
    }));
  }
  /**
   * Inserts umbraco rules into stylesheet content
   * @param {string} stylesheetContent
   * @param {UmbStylesheetRule[]} rules
   * @returns {*}
   * @memberof UmbStylesheetRuleManager
   */
  insertRules(e, n) {
    const s = this.#e;
    return !e && !n ? "" : `
      ${(e?.replaceAll(s, "")).replace(/[\r\n]+$/, "")}
      ${n?.map(
      (t) => `
/**umb_name:${t.name}*/
${t.selector} {
	${t.styles ?? ""}
}
`
    ).join("")}`.trim();
  }
}
export {
  a as U
};
//# sourceMappingURL=stylesheet-rule-manager-kXMtc4LQ.js.map
