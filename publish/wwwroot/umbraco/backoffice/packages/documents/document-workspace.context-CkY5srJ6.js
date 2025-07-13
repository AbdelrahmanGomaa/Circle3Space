import { UmbDocumentTypeDetailRepository as y } from "./document-type-detail.repository-CMq7glm7.js";
import { UmbContentPropertyDatasetContext as O, UmbContentDetailWorkspaceContextBase as w } from "@umbraco-cms/backoffice/content";
import { E as S, F as P, G as v, H as b, d as D, i as M, I as m, J as c, u as l, K as N, L as f, e as A, M as R } from "./manifests-BUr6Ff2j.js";
import "@umbraco-cms/backoffice/id";
import { DocumentService as d } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as T } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as g } from "@umbraco-cms/backoffice/repository";
import { U as I } from "./document-preview.repository-Boowp7BD.js";
import { UmbDocumentPublishingRepository as q } from "./document-publishing.repository-ypBwqj-c.js";
import { UmbVariantId as U, UMB_INVARIANT_CULTURE as _ } from "@umbraco-cms/backoffice/variant";
import { UmbWorkspaceIsNewRedirectController as E, UmbWorkspaceIsNewRedirectControllerAlias as B } from "@umbraco-cms/backoffice/workspace";
import { UmbDocumentBlueprintDetailRepository as W } from "@umbraco-cms/backoffice/document-blueprint";
import { UmbIsTrashedEntityContext as x } from "@umbraco-cms/backoffice/recycle-bin";
import { UMB_APP_CONTEXT as L } from "@umbraco-cms/backoffice/app";
import { ensurePathEndsWithSlash as V, UmbDeprecation as o } from "@umbraco-cms/backoffice/utils";
import { createExtensionApiByAlias as C } from "@umbraco-cms/backoffice/extension-registry";
class K extends O {
}
class H {
  //#host: UmbControllerHost;
  // TODO: [v15]: ignoring unused var here here to prevent a breaking change
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(t) {
  }
  /**
   * Validate a new Document on the server
   * @param {UmbDocumentDetailModel} model - Document Model
   * @param parentUnique - Parent Unique
   * @returns {*}
   */
  async validateCreate(t, e = null) {
    if (!t) throw new Error("Document is missing");
    if (!t.unique) throw new Error("Document unique is missing");
    if (e === void 0) throw new Error("Parent unique is missing");
    const s = {
      id: t.unique,
      parent: e ? { id: e } : null,
      documentType: { id: t.documentType.unique },
      template: t.template ? { id: t.template.unique } : null,
      values: t.values,
      variants: t.variants
    };
    return T(
      //this.#host,
      d.postDocumentValidate({
        requestBody: s
      })
    );
  }
  /**
   * Validate a existing Document
   * @param {UmbDocumentDetailModel} model - Document Model
   * @param {Array<UmbVariantId>} variantIds - Variant Ids
   * @returns {*}
   */
  async validateUpdate(t, e) {
    if (!t.unique) throw new Error("Unique is missing");
    const s = e.map((n) => n.culture).filter((n) => n !== null), i = {
      template: t.template ? { id: t.template.unique } : null,
      values: t.values,
      variants: t.variants,
      cultures: s
    };
    return T(
      //this.#host,
      d.putUmbracoManagementApiV11DocumentByIdValidate11({
        id: t.unique,
        requestBody: i
      })
    );
  }
}
class X extends g {
  #e;
  constructor(t) {
    super(t), this.#e = new H(this);
  }
  /**
   * Returns a promise with an observable of the detail for the given unique
   * @param {DetailModelType} model
   * @param {string | null} [parentUnique]
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async validateCreate(t, e) {
    if (!t) throw new Error("Data is missing");
    return this.#e.validateCreate(t, e);
  }
  /**
   * Saves the given data
   * @param {DetailModelType} model
   * @param variantIds
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async validateSave(t, e) {
    if (!t) throw new Error("Data is missing");
    if (!t.unique) throw new Error("Unique is missing");
    return this.#e.validateUpdate(t, e);
  }
}
class rt extends w {
  constructor(t) {
    super(t, {
      entityType: D,
      workspaceAlias: b,
      detailRepositoryAlias: v,
      contentTypeDetailRepository: y,
      contentValidationRepository: X,
      skipValidationOnSubmit: !1,
      ignoreValidationResultOnSubmit: !0,
      contentVariantScaffold: P,
      contentTypePropertyName: "documentType",
      saveModalToken: S
    }), this.publishingRepository = new q(this), this.isTrashed = this._data.createObservablePartOfCurrent((e) => e?.isTrashed), this.contentTypeUnique = this._data.createObservablePartOfCurrent((e) => e?.documentType.unique), this.contentTypeHasCollection = this._data.createObservablePartOfCurrent(
      (e) => !!e?.documentType.collection
    ), this.urls = this._data.createObservablePartOfCurrent((e) => e?.urls || []), this.templateId = this._data.createObservablePartOfCurrent((e) => e?.template?.unique || null), this.#e = new x(this), this.#s = !1, this.#n = !1, this.observe(this.contentTypeUnique, (e) => this.structure.loadType(e), null), this.consumeContext(M, (e) => {
      this.#t = e;
    }), C(this, m, [
      {
        config: {
          allOf: [c]
        },
        onChange: (e) => {
          e !== this.#s && (this.#s = e, this.#i(
            c,
            this.#s,
            "You do not have permission to create documents."
          ));
        }
      }
    ]), C(this, m, [
      {
        config: {
          allOf: [l]
        },
        onChange: (e) => {
          e !== this.#n && (this.#n = e, this.#i(
            l,
            this.#n,
            "You do not have permission to update documents."
          ));
        }
      }
    ]), this.observe(this.variants, () => {
      this.#i(
        c,
        this.#s,
        "You do not have permission to create documents."
      ), this.#i(
        l,
        this.#n,
        "You do not have permission to update documents."
      );
    }), this.routes.setRoutes([
      {
        path: N.toString(),
        component: () => import("./document-workspace-editor.element-00kaGyfN.js"),
        setup: async (e, s) => {
          const i = s.match.params.parentEntityType, n = s.match.params.parentUnique === "null" ? null : s.match.params.parentUnique, r = s.match.params.documentTypeUnique, u = s.match.params.blueprintUnique;
          await this.create(
            { entityType: i, unique: n },
            r,
            u
          ), new E(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: f.toString(),
        component: () => import("./document-workspace-editor.element-00kaGyfN.js"),
        setup: async (e, s) => {
          const i = s.match.params.parentEntityType, n = s.match.params.parentUnique === "null" ? null : s.match.params.parentUnique, r = s.match.params.documentTypeUnique;
          await this.create({ entityType: i, unique: n }, r), new E(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: A.toString(),
        component: () => import("./document-workspace-editor.element-00kaGyfN.js"),
        setup: async (e, s) => {
          this.removeUmbControllerByAlias(B);
          const i = s.match.params.unique;
          await this.load(i);
        }
      }
    ]);
  }
  #e;
  #t;
  #s;
  #n;
  resetState() {
    super.resetState(), this.#e.setIsTrashed(!1);
  }
  async load(t) {
    const e = await super.load(t);
    return e?.data && this.#e.setIsTrashed(e.data.isTrashed), e;
  }
  async create(t, e, s) {
    if (s) {
      const i = new W(this), { data: n } = await i.scaffoldByUnique(s);
      if (!n) throw new Error("Blueprint data is missing");
      return this.createScaffold({
        parent: t,
        preset: {
          documentType: n.documentType,
          values: n.values,
          variants: n.variants
        }
      });
    }
    return this.createScaffold({
      parent: t,
      preset: {
        documentType: {
          unique: e,
          collection: null
        }
      }
    });
  }
  getCollectionAlias() {
    return R;
  }
  /**
   * Gets the unique identifier of the content type.
   * @deprecated Use `getContentTypeUnique` instead.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbDocumentWorkspaceContext
   */
  getContentTypeId() {
    return this.getContentTypeUnique();
  }
  /**
   * Gets the unique identifier of the content type.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbDocumentWorkspaceContext
   */
  getContentTypeUnique() {
    return this.getData()?.documentType.unique;
  }
  /**
   * Set the template
   * @param {string} templateUnique The unique identifier of the template.
   * @memberof UmbDocumentWorkspaceContext
   */
  setTemplate(t) {
    this._data.updateCurrent({ template: { unique: t } });
  }
  /**
   * Request a submit of the workspace, in the case of Document Workspaces the validation does not need to be valid for this to be submitted.
   * @returns {Promise<void>} a promise which resolves once it has been completed.
   */
  requestSubmit() {
    const t = this.getHostElement().style;
    return t.setProperty("--uui-color-invalid", "var(--uui-color-warning)"), t.setProperty("--uui-color-invalid-emphasis", "var(--uui-color-warning-emphasis)"), t.setProperty("--uui-color-invalid-standalone", "var(--uui-color-warning-standalone)"), t.setProperty("--uui-color-invalid-contrast", "var(--uui-color-warning-contrast)"), this._handleSubmit();
  }
  async saveAndPreview() {
    return this.#a();
  }
  async #a() {
    const t = this.getUnique();
    if (!t) throw new Error("Unique is missing");
    let e = _;
    const { selected: s } = await this._determineVariantOptions();
    if (s.length > 0) {
      e = s[0];
      const a = [U.FromString(e)], p = await this._data.constructData(a);
      await this.runMandatoryValidationForSaveData(p), await this.performCreateOrUpdate(a, p);
    }
    await new I(this).enter();
    const i = await this.getContext(L), n = i.getBackofficePath(), r = new URL(V(n) + "preview", i.getServerUrl());
    r.searchParams.set("id", t), e && e !== _ && r.searchParams.set("culture", e), window.open(r.toString(), `umbpreview-${t}`)?.focus();
  }
  async publish() {
    if (new o({
      deprecated: "The Publish method on the UMB_DOCUMENT_WORKSPACE_CONTEXT is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the Publish method on the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead."
    }).warn(), !this.#t) throw new Error("Publishing context is missing");
    this.#t.publish();
  }
  /**
   * Save the document and publish it.
   * @deprecated Will be removed in v17. Use the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead.
   */
  async saveAndPublish() {
    if (new o({
      deprecated: "The SaveAndPublish method on the UMB_DOCUMENT_WORKSPACE_CONTEXT is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the SaveAndPublish method on the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead."
    }).warn(), !this.#t) throw new Error("Publishing context is missing");
    this.#t.saveAndPublish();
  }
  /**
   * Schedule the document to be published at a later date.
   * @deprecated Will be removed in v17. Use the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead.
   */
  async schedule() {
    if (new o({
      deprecated: "The Schedule method on the UMB_DOCUMENT_WORKSPACE_CONTEXT is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the Schedule method on the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead."
    }).warn(), !this.#t) throw new Error("Publishing context is missing");
    this.#t.schedule();
  }
  /**
   * Unpublish the document.
   * @deprecated Will be removed in v17. Use the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead.
   */
  async unpublish() {
    if (new o({
      deprecated: "The Unpublish method on the UMB_DOCUMENT_WORKSPACE_CONTEXT is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the Unpublish method on the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead."
    }).warn(), !this.#t) throw new Error("Publishing context is missing");
    this.#t.unpublish();
  }
  /**
   * Publish the document and all its descendants.
   * @deprecated Will be removed in v17. Use the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead.
   */
  async publishWithDescendants() {
    if (new o({
      deprecated: "The PublishWithDescendants method on the UMB_DOCUMENT_WORKSPACE_CONTEXT is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the PublishWithDescendants method on the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead."
    }).warn(), !this.#t) throw new Error("Publishing context is missing");
    this.#t.publishWithDescendants();
  }
  createPropertyDatasetContext(t, e) {
    return new K(t, this, e);
  }
  async #i(t, e, s) {
    const i = this.getVariants(), n = i?.map((a) => t + a.culture) || [];
    if (e) {
      this.readOnlyState?.removeStates(n);
      return;
    }
    const u = (i?.map((a) => new U(a.culture, a.segment)) || []).map((a) => ({
      unique: t + a.culture,
      variantId: a,
      message: s
    }));
    this.readOnlyState?.removeStates(n), this.readOnlyState?.addStates(u);
  }
}
export {
  rt as UmbDocumentWorkspaceContext,
  rt as default
};
//# sourceMappingURL=document-workspace.context-CkY5srJ6.js.map
