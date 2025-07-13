import { p, b as c, q as u, e as m, c as T, f as d, g as h } from "./constants-CrVNO8d3.js";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
import { html as w, css as y, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbContentTypeWorkspaceContextBase as C } from "@umbraco-cms/backoffice/content-type";
import { UmbWorkspaceIsNewRedirectController as A, UmbWorkspaceIsNewRedirectControllerAlias as O } from "@umbraco-cms/backoffice/workspace";
import { UmbTemplateDetailRepository as f } from "@umbraco-cms/backoffice/template";
var P = Object.getOwnPropertyDescriptor, U = (l, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? P(e, t) : e, a = l.length - 1, o; a >= 0; a--)
    (o = l[a]) && (r = o(r) || r);
  return r;
};
let n = class extends E {
  render() {
    return w`
			<umb-entity-detail-workspace-editor>
				<umb-content-type-workspace-editor-header slot="header"></umb-content-type-workspace-editor-header>
			</umb-entity-detail-workspace-editor>
		`;
  }
};
n.styles = [
  y`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
n = U([
  _("umb-document-type-workspace-editor")
], n);
class N extends C {
  constructor(e) {
    super(e, {
      workspaceAlias: u,
      entityType: c,
      detailRepositoryAlias: p
    }), this.createTemplateMode = !1, this.#e = new f(this), this.allowedTemplateIds = this.structure.ownerContentTypeObservablePart((t) => t?.allowedTemplates), this.defaultTemplate = this.structure.ownerContentTypeObservablePart((t) => t?.defaultTemplate), this.cleanup = this.structure.ownerContentTypeObservablePart((t) => t?.cleanup), this.routes.setRoutes([
      {
        path: m.toString(),
        component: n,
        setup: async (t, s) => {
          const r = s.match.params, a = r.parentEntityType, o = r.parentUnique === "null" ? null : r.parentUnique, i = r.presetAlias === "null" ? null : r.presetAlias ?? null;
          if (o === void 0)
            throw new Error("ParentUnique url parameter is required to create a document type");
          await this.#t({ entityType: a, unique: o }, i), new A(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: T.toString(),
        component: n,
        setup: (t, s) => {
          this.removeUmbControllerByAlias(O);
          const r = s.match.params.unique;
          this.load(r);
        }
      }
    ]);
  }
  #e;
  setAllowedAtRoot(e) {
    this.structure.updateOwnerContentType({ allowedAtRoot: e });
  }
  setVariesByCulture(e) {
    this.structure.updateOwnerContentType({ variesByCulture: e });
  }
  setVariesBySegment(e) {
    this.structure.updateOwnerContentType({ variesBySegment: e });
  }
  setIsElement(e) {
    this.structure.updateOwnerContentType({ isElement: e });
  }
  setAllowedContentTypes(e) {
    this.structure.updateOwnerContentType({ allowedContentTypes: e });
  }
  setCleanup(e) {
    this.structure.updateOwnerContentType({ cleanup: e });
  }
  setCollection(e) {
    this.structure.updateOwnerContentType({ collection: e });
  }
  // Document type specific:
  getAllowedTemplateIds() {
    return this.structure.getOwnerContentType()?.allowedTemplates;
  }
  setAllowedTemplateIds(e) {
    this.structure.updateOwnerContentType({ allowedTemplates: e });
  }
  setDefaultTemplate(e) {
    this.structure.updateOwnerContentType({ defaultTemplate: e });
  }
  async #t(e, t) {
    let s;
    switch (t) {
      case d: {
        s = {
          icon: "icon-document-html"
        }, this.createTemplateMode = !0;
        break;
      }
      case h: {
        s = {
          icon: "icon-plugin",
          isElement: !0
        };
        break;
      }
    }
    this.createScaffold({ parent: e, preset: s });
  }
  async _create(e, t) {
    this.createTemplateMode && await this.#s();
    try {
      super._create(e, t), this.createTemplateMode = !1;
    } catch (s) {
      console.log(s);
    }
  }
  // TODO: move this responsibility to the template package
  async #s() {
    const { data: e } = await this.#e.createScaffold({
      name: this.getName(),
      alias: this.getName()
      // NOTE: Uses "name" over alias, as the server handle the template filename. [LK]
    });
    if (!e) throw new Error("Could not create template scaffold");
    const { data: t } = await this.#e.create(e, null);
    if (!t) throw new Error("Could not create template");
    const s = { id: t.unique }, r = this.getAllowedTemplateIds() ?? [];
    this.setAllowedTemplateIds([s, ...r]), this.setDefaultTemplate(s);
  }
  /**
   * @deprecated Use the createScaffold method instead. Will be removed in 17.
   * @param presetAlias
   * @param {UmbEntityModel} parent
   * @memberof UmbMediaTypeWorkspaceContext
   */
  async create(e, t) {
    this.#t(e, t);
  }
}
export {
  N as UmbDocumentTypeWorkspaceContext,
  N as api
};
//# sourceMappingURL=document-type-workspace.context-BC-uvjrG.js.map
