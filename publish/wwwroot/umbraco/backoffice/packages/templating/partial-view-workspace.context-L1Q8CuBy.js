import { n as g, o as T } from "./partial-view-workspace.context-token-BPSaKQI9.js";
import { c as A, f as q } from "./manifests-ChE0t90n.js";
import { c as C } from "./index-D0fxHn_d.js";
import { html as _, nothing as U, css as P, state as y, query as x, customElement as I } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as S } from "@umbraco-cms/backoffice/lit-element";
import { UMB_MODAL_MANAGER_CONTEXT as k } from "@umbraco-cms/backoffice/modal";
import { UMB_TEMPLATE_QUERY_BUILDER_MODAL as R } from "@umbraco-cms/backoffice/template";
import "@umbraco-cms/backoffice/code-editor";
import "./insert-menu.element-BsuXFvGV.js";
import { UmbEntityNamedDetailWorkspaceContextBase as W, UmbWorkspaceIsNewRedirectController as M } from "@umbraco-cms/backoffice/workspace";
import { tryExecuteAndNotify as O } from "@umbraco-cms/backoffice/resources";
import { PartialViewService as B } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbServerFileRenameWorkspaceRedirectController as L } from "@umbraco-cms/backoffice/server-file-system";
var N = Object.defineProperty, z = Object.getOwnPropertyDescriptor, v = (i) => {
  throw TypeError(i);
}, d = (i, t, e, n) => {
  for (var r = n > 1 ? void 0 : n ? z(t, e) : t, o = i.length - 1, u; o >= 0; o--)
    (u = i[o]) && (r = (n ? u(t, e, r) : u(r)) || r);
  return n && r && N(t, e, r), r;
}, m = (i, t, e) => t.has(i) || v("Cannot " + e), l = (i, t, e) => (m(i, t, "read from private field"), e ? e.call(i) : t.get(i)), h = (i, t, e) => t.has(i) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(i) : t.set(i, e), V = (i, t, e, n) => (m(i, t, "write to private field"), t.set(i, e), e), c = (i, t, e) => (m(i, t, "access private method"), e), s, p, f, w, b, E;
let a = class extends S {
  constructor() {
    super(), h(this, p), this._content = "", h(this, s), this.consumeContext(g, (i) => {
      V(this, s, i), this.observe(l(this, s).content, (t) => {
        this._content = t;
      }), this.observe(l(this, s).isNew, (t) => {
        this._isNew = t;
      });
    });
  }
  render() {
    return _`
			<umb-entity-detail-workspace-editor>
				<umb-workspace-header-name-editable
					slot="header"
					?readonly=${this._isNew === !1}></umb-workspace-header-name-editable>
				<uui-box>
					<div slot="header" id="code-editor-menu-container">
						<umb-templating-insert-menu @insert=${c(this, p, w)} hidePartialViews></umb-templating-insert-menu>
						<uui-button
							look="secondary"
							id="query-builder-button"
							label=${this.localize.term("template_queryBuilder")}
							@click=${c(this, p, b)}>
							<uui-icon name="icon-wand"></uui-icon>
							<umb-localize key="template_queryBuilder">Query builder</umb-localize>
						</uui-button>
					</div>
					${c(this, p, E).call(this)}
				</uui-box>
			</umb-entity-detail-workspace-editor>
		`;
  }
};
s = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
f = function(i) {
  const e = i.target.code;
  l(this, s)?.setContent(e);
};
w = function(i) {
  const e = i.target.value;
  this._codeEditor?.insert(e);
};
b = async function() {
  (await this.getContext(k)).open(this, R)?.onSubmit().then((e) => {
    e.value && this._codeEditor?.insert(C(e.value));
  }).catch(() => {
  });
};
E = function() {
  return this._content === void 0 ? U : _`
			<umb-code-editor
				id="content"
				language="razor"
				.code=${this._content ?? ""}
				@input=${c(this, p, f)}></umb-code-editor>
		`;
};
a.styles = [
  P`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}

			umb-code-editor {
				--editor-height: calc(100dvh - 300px);
			}

			uui-box {
				min-height: calc(100dvh - 300px);
				margin: var(--uui-size-layout-1);
				--uui-box-default-padding: 0;
				/* remove header border bottom as code editor looks better in this box */
				--uui-color-divider-standalone: transparent;
			}

			#code-editor-menu-container uui-icon:not([name='icon-delete']) {
				margin-right: var(--uui-size-space-3);
			}

			#insert-menu {
				margin: 0;
				padding: 0;
				margin-top: var(--uui-size-space-3);
				background-color: var(--uui-color-surface);
				box-shadow: var(--uui-shadow-depth-3);
				min-width: calc(100% + var(--uui-size-8, 24px));
			}

			#insert-menu > li,
			ul {
				padding: 0;
				width: 100%;
				list-style: none;
			}

			.insert-menu-item {
				width: 100%;
			}

			#code-editor-menu-container {
				display: flex;
				justify-content: flex-end;
				gap: var(--uui-size-space-3);
				width: 100%;
			}
		`
];
d([
  y()
], a.prototype, "_content", 2);
d([
  y()
], a.prototype, "_isNew", 2);
d([
  x("umb-code-editor")
], a.prototype, "_codeEditor", 2);
a = d([
  I("umb-partial-view-workspace-editor")
], a);
class et extends W {
  constructor(t) {
    super(t, {
      workspaceAlias: q,
      entityType: T,
      detailRepositoryAlias: A
    }), this.content = this._data.createObservablePartOfCurrent((e) => e?.content), this.#t = async (e) => {
      await this.createScaffold(e), new M(
        this,
        this,
        this.getHostElement().shadowRoot.querySelector("umb-router-slot")
      );
    }, this.routes.setRoutes([
      {
        path: "create/parent/:entityType/:parentUnique/snippet/:snippetId",
        component: a,
        setup: async (e, n) => {
          const r = n.match.params.entityType, o = n.match.params.parentUnique === "null" ? null : n.match.params.parentUnique, u = n.match.params.snippetId;
          this.#t({
            parent: { entityType: r, unique: o },
            snippet: { unique: u }
          });
        }
      },
      {
        path: "create/parent/:entityType/:parentUnique",
        component: a,
        setup: async (e, n) => {
          const r = n.match.params.entityType, o = n.match.params.parentUnique === "null" ? null : n.match.params.parentUnique;
          this.#t({
            parent: { entityType: r, unique: o },
            snippet: null
          });
        }
      },
      {
        path: "edit/:unique",
        component: a,
        setup: (e, n) => {
          const r = n.match.params.unique;
          this.load(r), new L(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      }
    ]);
  }
  #t;
  setContent(t) {
    this._data.updateCurrent({ content: t });
  }
  async createScaffold(t) {
    let e = "";
    if (t.snippet?.unique) {
      const { data: r } = await this.#e(t.snippet.unique);
      e = r?.content || "";
    }
    const n = { ...t, preset: { content: e } };
    return super.createScaffold(n);
  }
  #e(t) {
    return O(
      this,
      B.getPartialViewSnippetById({
        id: t
      })
    );
  }
}
export {
  et as UmbPartialViewWorkspaceContext,
  et as api
};
//# sourceMappingURL=partial-view-workspace.context-L1Q8CuBy.js.map
