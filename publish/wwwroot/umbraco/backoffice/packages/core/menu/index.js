import { U as R, a as I, b as N } from "../menu-item-layout.element-CcqT69Nn.js";
import { createExtensionApiByAlias as l } from "@umbraco-cms/backoffice/extension-registry";
import { UmbContextBase as b } from "@umbraco-cms/backoffice/class-api";
import { UMB_WORKSPACE_CONTEXT as v, UMB_VARIANT_WORKSPACE_CONTEXT as f } from "@umbraco-cms/backoffice/workspace";
import { UmbArrayState as q, UmbObjectState as T } from "@umbraco-cms/backoffice/observable-api";
import { UmbAncestorsEntityContext as E } from "@umbraco-cms/backoffice/entity";
class O extends b {
  constructor(e, i) {
    super(e, "UmbMenuStructureWorkspaceContext"), this.#e = new q([], (t) => t.unique), this.structure = this.#e.asObservable(), this.#s = new T(void 0), this.parent = this.#s.asObservable(), this.#i = i, this.consumeContext(v, (t) => {
      this.#t = t, this.#t.observe(this.#t.unique, (s) => {
        s && this.#n();
      });
    });
  }
  #t;
  #i;
  #e;
  #s;
  async #n() {
    let e = [];
    const i = await l(
      this,
      this.#i.treeRepositoryAlias
    ), { data: t } = await i.requestTreeRoot();
    t && (e = [
      {
        unique: t.unique,
        entityType: t.entityType,
        name: t.name,
        isFolder: t.isFolder
      }
    ]);
    const s = this.#t?.getIsNew(), c = s ? this.#t?.parentEntityType : this.#t?.entityType, n = await this.observe(c, () => {
    })?.asPromise();
    if (!n) throw new Error("Entity type is not available");
    if (n !== t?.entityType) {
      const r = s ? this.#t?.parentUnique : this.#t?.unique, a = await this.observe(r, () => {
      })?.asPromise();
      if (!a) throw new Error("Unique is not available");
      const { data: p } = await i.requestTreeItemAncestors({ treeItem: { unique: a, entityType: n } });
      if (p) {
        const y = p.map((o) => ({
          unique: o.unique,
          entityType: o.entityType,
          name: o.name,
          isFolder: o.isFolder
        }));
        e.push(...y);
      }
    }
    const h = e[e.length - 2];
    this.#s.setValue(h), this.#e.setValue(e);
  }
}
class S extends b {
  constructor(e, i) {
    super(e, "UmbMenuStructureWorkspaceContext"), this.#e = new q([], (t) => t.unique), this.structure = this.#e.asObservable(), this.#s = new T(void 0), this.parent = this.#s.asObservable(), this.#n = new E(this), this.#i = i, this.consumeContext(f, (t) => {
      this.#t = t, this.#t.observe(this.#t.unique, (s) => {
        s && this.#r();
      });
    });
  }
  // TODO: add correct interface
  #t;
  #i;
  #e;
  #s;
  #n;
  async #r() {
    const e = this.#t?.getIsNew(), i = e ? this.#t?.parentUnique : this.#t?.unique, t = e ? this.#t?.parentEntityType : this.#t?.entityType;
    let s = [];
    const c = await this.observe(i, () => {
    })?.asPromise();
    if (c === void 0) throw new Error("Unique is not available");
    const n = await this.observe(t, () => {
    })?.asPromise();
    if (!n) throw new Error("Entity type is not available");
    const h = await l(
      this,
      this.#i.treeRepositoryAlias
    ), { data: r } = await h.requestTreeRoot();
    r && (s = [
      {
        unique: r.unique,
        entityType: r.entityType,
        variants: [{ name: r.name, culture: null, segment: null }]
      }
    ]);
    const { data: a } = await h.requestTreeItemAncestors({ treeItem: { unique: c, entityType: n } });
    if (a) {
      const p = a.map((u) => ({
        unique: u.unique,
        entityType: u.entityType,
        variants: u.variants.map((m) => ({
          name: m.name,
          culture: m.culture,
          segment: m.segment
        }))
      })), y = a.map((u) => ({
        unique: u.unique,
        entityType: u.entityType
      }));
      this.#n.setAncestors(y), s.push(...p);
      const o = s[s.length - 2];
      this.#s.setValue(o), this.#e.setValue(s);
    }
  }
}
export {
  R as UmbMenuElement,
  I as UmbMenuItemDefaultElement,
  N as UmbMenuItemLayoutElement,
  O as UmbMenuTreeStructureWorkspaceContextBase,
  S as UmbMenuVariantTreeStructureWorkspaceContextBase
};
//# sourceMappingURL=index.js.map
