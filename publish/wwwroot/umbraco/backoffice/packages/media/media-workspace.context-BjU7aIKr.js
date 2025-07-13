import { UmbMediaTypeDetailRepository as p } from "./media-type-detail.repository-3lOqmWA1.js";
import { UmbContentPropertyDatasetContext as l, UmbContentDetailWorkspaceContextBase as m } from "@umbraco-cms/backoffice/content";
import { U as c } from "./media-item.store.context-token-9YLCPlu1.js";
import { x as u, o as T, w as y, U as d } from "./dropzone.element-B5oraMUj.js";
import { u as h, v as _ } from "./input-upload-field.element-B7PCDmnx.js";
import "./media-url.repository-DUerHiJb.js";
import { UmbMediaValidationRepository as A } from "./media-validation.repository-3oFTDjyn.js";
import { UmbWorkspaceIsNewRedirectController as U, UmbWorkspaceIsNewRedirectControllerAlias as s } from "@umbraco-cms/backoffice/workspace";
import { UmbIsTrashedEntityContext as C } from "@umbraco-cms/backoffice/recycle-bin";
class E extends l {
}
class O extends m {
  constructor(a) {
    super(a, {
      entityType: c,
      workspaceAlias: y,
      detailRepositoryAlias: T,
      contentTypeDetailRepository: p,
      contentValidationRepository: A,
      contentVariantScaffold: u,
      contentTypePropertyName: "mediaType"
    }), this.contentTypeUnique = this._data.createObservablePartOfCurrent((t) => t?.mediaType.unique), this.contentTypeHasCollection = this._data.createObservablePartOfCurrent((t) => !!t?.mediaType.collection), this.urls = this._data.createObservablePartOfCurrent((t) => t?.urls || []), this.#t = new C(this), this.observe(this.contentTypeUnique, (t) => this.structure.loadType(t), null), this.routes.setRoutes([
      {
        path: h.toString(),
        component: () => import("./media-workspace-editor.element-Dk_lXO9X.js"),
        setup: async (t, e) => {
          const r = e.match.params.parentEntityType, n = e.match.params.parentUnique === "null" ? null : e.match.params.parentUnique, i = e.match.params.mediaTypeUnique;
          await this.createScaffold({
            parent: { entityType: r, unique: n },
            preset: { mediaType: { unique: i, collection: null } }
          }), new U(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: _.toString(),
        component: () => import("./media-workspace-editor.element-Dk_lXO9X.js"),
        setup: (t, e) => {
          this.removeUmbControllerByAlias(s);
          const r = e.match.params.unique;
          this.load(r);
        }
      }
    ]);
  }
  #t;
  resetState() {
    super.resetState(), this.#t.setIsTrashed(!1), this.removeUmbControllerByAlias(s);
  }
  async load(a) {
    const t = await super.load(a);
    return t?.data && this.#t.setIsTrashed(t.data.isTrashed), t;
  }
  /*
   * @deprecated Use `createScaffold` instead.
   */
  async create(a, t) {
    const e = {
      parent: a,
      preset: { mediaType: { unique: t, collection: null } }
    };
    return this.createScaffold(e);
  }
  getCollectionAlias() {
    return d;
  }
  /**
   * Gets the unique identifier of the content type.
   * @deprecated Use `getContentTypeUnique` instead.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbMediaWorkspaceContext
   */
  getContentTypeId() {
    return this.getContentTypeUnique();
  }
  /**
   * Gets the unique identifier of the content type.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbMediaWorkspaceContext
   */
  getContentTypeUnique() {
    return this.getData()?.mediaType.unique;
  }
  createPropertyDatasetContext(a, t) {
    return new E(a, this, t);
  }
}
export {
  O as UmbMediaWorkspaceContext,
  O as api
};
//# sourceMappingURL=media-workspace.context-BjU7aIKr.js.map
