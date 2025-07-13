import { UmbContentPropertyDatasetContext as P, UmbContentDetailWorkspaceContextBase as U } from "@umbraco-cms/backoffice/content";
import { u as d, q as R, v as A, f as D, g as x } from "./manifests-BeI4zfAH.js";
import { a as k } from "./paths-DUrSKoiK.js";
import { UmbTextStyles as v } from "@umbraco-cms/backoffice/style";
import { nothing as V, repeat as q, html as l, css as b, state as f, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as g } from "@umbraco-cms/backoffice/lit-element";
import { U as S } from "./constants-dRhazHYb.js";
import { UmbMemberTypeDetailRepository as W } from "@umbraco-cms/backoffice/member-type";
import { UmbWorkspaceIsNewRedirectController as B, UmbWorkspaceIsNewRedirectControllerAlias as I } from "@umbraco-cms/backoffice/workspace";
class L extends P {
}
var N = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, E = (t, e, r, a) => {
  for (var s = a > 1 ? void 0 : a ? $(e, r) : e, i = t.length - 1, n; i >= 0; i--)
    (n = t[i]) && (s = (a ? n(e, r, s) : n(s)) || s);
  return a && s && N(e, r, s), s;
};
let h = class extends g {
  constructor() {
    super(), this.consumeContext(d, (t) => {
      this._workspaceContext = t, this._observeActiveVariantInfo();
    });
  }
  _observeActiveVariantInfo() {
    this._workspaceContext && this.observe(
      this._workspaceContext.splitView.activeVariantsInfo,
      (t) => {
        this._variants = t;
      },
      "_observeActiveVariantsInfo"
    );
  }
  render() {
    return this._variants ? l`<div id="splitViews">
						${q(
      this._variants,
      (t) => t.index + "_" + (t.culture ?? "") + "_" + (t.segment ?? "") + "_" + this._variants.length,
      (t) => l`
								<umb-workspace-split-view
									back-path=${k}
									.splitViewIndex=${t.index}
									.displayNavigation=${t.index === this._variants.length - 1}>
								</umb-workspace-split-view>
							`
    )}
					</div>

					<umb-workspace-footer alias="Umb.Workspace.Member"></umb-workspace-footer>` : V;
  }
};
h.styles = [
  v,
  b`
			:host {
				width: 100%;
				height: 100%;

				display: flex;
				flex: 1;
				flex-direction: column;
			}

			#splitViews {
				display: flex;
				width: 100%;
				height: calc(100% - var(--umb-footer-layout-height));
			}

			#breadcrumbs {
				margin: 0 var(--uui-size-layout-1);
			}
		`
];
E([
  f()
], h.prototype, "_variants", 2);
h = E([
  w("umb-member-workspace-split-view")
], h);
var F = Object.defineProperty, Y = Object.getOwnPropertyDescriptor, y = (t) => {
  throw TypeError(t);
}, C = (t, e, r, a) => {
  for (var s = a > 1 ? void 0 : a ? Y(e, r) : e, i = t.length - 1, n; i >= 0; i--)
    (n = t[i]) && (s = (a ? n(e, r, s) : n(s)) || s);
  return a && s && F(e, r, s), s;
}, m = (t, e, r) => e.has(t) || y("Cannot " + r), u = (t, e, r) => (m(t, e, "read from private field"), e.get(t)), _ = (t, e, r) => e.has(t) ? y("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), K = (t, e, r, a) => (m(t, e, "write to private field"), e.set(t, r), r), G = (t, e, r) => (m(t, e, "access private method"), r), o, c, T;
let p = class extends g {
  constructor() {
    super(), _(this, c), this.splitViewElement = new h(), _(this, o), this._gotWorkspaceRoute = (t) => {
      u(this, o)?.splitView.setWorkspaceRoute(t.target.absoluteRouterPath);
    }, this.consumeContext(d, (t) => {
      K(this, o, t), G(this, c, T).call(this);
    });
  }
  _handleVariantFolderPart(t, e) {
    const r = e.split("_"), a = r[0], s = r[1];
    u(this, o)?.splitView.setActiveVariant(t, a, s);
  }
  async _generateRoutes(t) {
    if (!t || t.length === 0) return;
    const e = [];
    t.forEach((r) => {
      t.forEach((a) => {
        e.push({
          // TODO: When implementing Segments, be aware if using the unique is URL Safe... [NL]
          path: r.unique + "_&_" + a.unique,
          component: this.splitViewElement,
          setup: (s, i) => {
            i.match.fragments.consumed.split("_&_").forEach((O, M) => {
              this._handleVariantFolderPart(M, O);
            });
          }
        });
      });
    }), t.forEach((r) => {
      e.push({
        // TODO: When implementing Segments, be aware if using the unique is URL Safe... [NL]
        path: r.unique,
        component: this.splitViewElement,
        setup: (a, s) => {
          u(this, o)?.splitView.removeActiveVariant(1), this._handleVariantFolderPart(0, s.match.fragments.consumed);
        }
      });
    }), e.length !== 0 && e.push({
      path: "",
      redirectTo: e[t.length * t.length]?.path
    }), e.push({
      path: "**",
      component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
    }), this._routes = e;
  }
  render() {
    return this._routes && this._routes.length > 0 ? l`<umb-router-slot .routes=${this._routes} @init=${this._gotWorkspaceRoute}></umb-router-slot>` : "";
  }
};
o = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
T = function() {
  u(this, o) && this.observe(u(this, o).variantOptions, (t) => this._generateRoutes(t), "_observeVariants");
};
p.styles = [
  v,
  b`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
C([
  f()
], p.prototype, "_routes", 2);
p = C([
  w("umb-member-workspace-editor")
], p);
class rt extends U {
  constructor(e) {
    super(e, {
      entityType: D,
      workspaceAlias: A,
      detailRepositoryAlias: R,
      contentTypeDetailRepository: W,
      // TODO: Enable Validation Repository when we have UI for showing validation issues on other tabs. [NL]
      //contentValidationRepository: UmbMemberValidationRepository,
      contentVariantScaffold: S,
      contentTypePropertyName: "memberType"
    }), this.contentTypeUnique = this._data.createObservablePartOfCurrent((r) => r?.memberType.unique), this.kind = this._data.createObservablePartOfCurrent((r) => r?.kind), this.createDate = this._data.createObservablePartOfCurrent((r) => r?.variants[0].createDate), this.updateDate = this._data.createObservablePartOfCurrent((r) => r?.variants[0].updateDate), this.observe(this.contentTypeUnique, (r) => this.structure.loadType(r), null), this.routes.setRoutes([
      {
        path: "create/:memberTypeUnique",
        component: () => new p(),
        setup: async (r, a) => {
          const s = a.match.params.memberTypeUnique;
          await this.create(s), new B(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:unique",
        component: () => new p(),
        setup: (r, a) => {
          this.removeUmbControllerByAlias(I);
          const s = a.match.params.unique;
          this.load(s);
        }
      }
    ]);
  }
  async create(e) {
    return this.createScaffold({
      parent: { entityType: x, unique: null },
      preset: {
        memberType: {
          unique: e,
          icon: "icon-user"
        }
      }
    });
  }
  /**
   * Gets the unique identifier of the content type.
   * @deprecated Use `getContentTypeUnique` instead.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbMemberWorkspaceContext
   */
  getContentTypeId() {
    return this.getContentTypeUnique();
  }
  /**
   * Gets the unique identifier of the content type.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbMemberWorkspaceContext
   */
  getContentTypeUnique() {
    return this.getData()?.memberType.unique;
  }
  createPropertyDatasetContext(e, r) {
    return new L(e, this, r);
  }
  set(e, r) {
    this._data.updateCurrent({ [e]: r });
  }
  // Only for CRUD demonstration purposes
  updateData(e) {
    const r = this._data.getCurrent();
    if (!r) throw new Error("No data to update");
    this._data.setCurrent({ ...r, ...e });
  }
  get email() {
    return this.#t("email") || "";
  }
  get username() {
    return this.#t("username") || "";
  }
  get isLockedOut() {
    return this.#t("isLockedOut") || !1;
  }
  get isTwoFactorEnabled() {
    return this.#t("isTwoFactorEnabled") || !1;
  }
  get isApproved() {
    return this.#t("isApproved") || !1;
  }
  get failedPasswordAttempts() {
    return this.#t("failedPasswordAttempts") || 0;
  }
  get lastLockOutDate() {
    return this.#t("lastLockoutDate") ?? null;
  }
  get lastLoginDate() {
    return this.#t("lastLoginDate") ?? null;
  }
  get lastPasswordChangeDate() {
    return this.#t("lastPasswordChangeDate") ?? null;
  }
  get memberGroups() {
    return this.#t("groups") || [];
  }
  #t(e) {
    return this._data.getCurrent()?.[e];
  }
}
export {
  rt as UmbMemberWorkspaceContext,
  rt as api
};
//# sourceMappingURL=member-workspace.context-zScmaqYg.js.map
