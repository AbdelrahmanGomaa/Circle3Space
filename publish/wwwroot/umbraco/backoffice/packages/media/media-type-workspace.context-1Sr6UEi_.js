import { o as i, b as c, p as m } from "./constants-CHY0fXo5.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { html as u, css as l, customElement as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import { UmbWorkspaceIsNewRedirectController as h } from "@umbraco-cms/backoffice/workspace";
import { UmbContentTypeWorkspaceContextBase as T } from "@umbraco-cms/backoffice/content-type";
var w = Object.getOwnPropertyDescriptor, E = (a, t, p, e) => {
  for (var r = e > 1 ? void 0 : e ? w(t, p) : t, s = a.length - 1, n; s >= 0; s--)
    (n = a[s]) && (r = n(r) || r);
  return r;
};
let o = class extends y {
  render() {
    return u`
			<umb-entity-detail-workspace-editor>
				<umb-content-type-workspace-editor-header slot="header"></umb-content-type-workspace-editor-header>
			</umb-entity-detail-workspace-editor>
		`;
  }
};
o.styles = [
  l`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
o = E([
  d("umb-media-type-workspace-editor")
], o);
class M extends T {
  constructor(t) {
    super(t, {
      workspaceAlias: m,
      entityType: c,
      detailRepositoryAlias: i
    }), this.routes.setRoutes([
      {
        path: "create/parent/:parentEntityType/:parentUnique",
        component: o,
        setup: async (p, e) => {
          const r = e.match.params.parentEntityType, s = e.match.params.parentUnique === "null" ? null : e.match.params.parentUnique, n = { entityType: r, unique: s };
          await this.createScaffold({ parent: n }), new h(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:id",
        component: o,
        setup: (p, e) => {
          const r = e.match.params.id;
          this.load(r);
        }
      }
    ]);
  }
  setAllowedAtRoot(t) {
    this.structure.updateOwnerContentType({ allowedAtRoot: t });
  }
  setVariesByCulture(t) {
    this.structure.updateOwnerContentType({ variesByCulture: t });
  }
  setVariesBySegment(t) {
    this.structure.updateOwnerContentType({ variesBySegment: t });
  }
  setIsElement(t) {
    this.structure.updateOwnerContentType({ isElement: t });
  }
  setAllowedContentTypes(t) {
    this.structure.updateOwnerContentType({ allowedContentTypes: t });
  }
  setCollection(t) {
    this.structure.updateOwnerContentType({ collection: t });
  }
  /**
   * @deprecated Use the createScaffold method instead. Will be removed in 17.
   * @param {UmbEntityModel} parent
   * @memberof UmbMediaTypeWorkspaceContext
   */
  async create(t) {
    this.createScaffold({ parent: t });
  }
}
export {
  M as UmbMediaTypeWorkspaceContext,
  M as api
};
//# sourceMappingURL=media-type-workspace.context-1Sr6UEi_.js.map
