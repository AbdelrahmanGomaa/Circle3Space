import { UmbControllerBase as o } from "@umbraco-cms/backoffice/class-api";
import { UMB_CURRENT_USER_CONTEXT as c } from "@umbraco-cms/backoffice/current-user";
const u = "umb:clipboard";
class y extends o {
  #t;
  #e;
  constructor(t) {
    if (super(t), !window.isSecureContext && window.crypto)
      throw new Error("Clipboard local storage manager can only be used in a secure context");
  }
  // Gets all entries from local storage
  async getEntries() {
    const t = await this.#r(), e = localStorage.getItem(t), r = e ? JSON.parse(e) : [], n = r.length;
    return { entries: r, total: n };
  }
  // Gets a single entry from local storage
  async getEntry(t) {
    const { entries: e } = await this.getEntries();
    return e.find((r) => r.unique === t);
  }
  // Sets all entries in local storage
  async setEntries(t) {
    if (!await this.#n())
      throw new Error("Could not get current user unique");
    const r = await this.#r();
    localStorage.setItem(r, JSON.stringify(t));
  }
  // gets a filtered list of entries
  async filter(t) {
    const { entries: e } = await this.getEntries(), r = this.#s(e, t), n = r.length, s = t.skip || 0, i = t.take || n;
    return { entries: r.slice(s, s + i), total: n };
  }
  #s(t, e) {
    return t.filter((r) => {
      if (e.types?.length) {
        const n = r.values.map((s) => s.type);
        return e.types.some((s) => n.includes(s));
      }
      return !0;
    });
  }
  async #r() {
    if (this.#e)
      return this.#e;
    const t = await this.#n(), e = await this.#i(`${u}:${t}`);
    return this.#e = e, this.#e;
  }
  async #n() {
    if (this.#t)
      return this.#t;
    const t = await this.getContext(c);
    return this.#t = t.getUnique(), this.#t;
  }
  async #i(t) {
    const r = new TextEncoder().encode(t), n = await window.crypto.subtle.digest("SHA-256", r);
    return Array.from(new Uint8Array(n)).map((a) => a.toString(16).padStart(2, "0")).join("");
  }
}
export {
  y as U
};
//# sourceMappingURL=clipboard-local-storage.manager-mReNzazn.js.map
