import { U as K } from "./tiptap-toolbar-configuration.context-token-yqUn7jq0.js";
import { umbExtensionsRegistry as Q } from "@umbraco-cms/backoffice/extension-registry";
import { UmbArrayState as I, UmbBooleanState as Z } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextBase as tt } from "@umbraco-cms/backoffice/class-api";
import { UmbId as f } from "@umbraco-cms/backoffice/id";
import { UMB_PROPERTY_DATASET_CONTEXT as et, UMB_PROPERTY_CONTEXT as ot } from "@umbraco-cms/backoffice/property";
import { html as d, when as v, repeat as z, nothing as $, css as at, state as S, property as it, customElement as rt } from "@umbraco-cms/backoffice/external/lit";
import { debounce as nt } from "@umbraco-cms/backoffice/utils";
import { UmbLitElement as st } from "@umbraco-cms/backoffice/lit-element";
class lt extends tt {
  constructor(t) {
    super(t, K), this.#o = new I([], (e) => e.alias), this.extensions = this.#o.asObservable(), this.#a = new Z(!1), this.reload = this.#a.asObservable(), this.#i = /* @__PURE__ */ new Set(), this.#e = /* @__PURE__ */ new Set(), this.#t = new I([], (e) => e.unique), this.toolbar = this.#t.asObservable(), this.#n = {
      undo: "Umb.Tiptap.Toolbar.Undo",
      redo: "Umb.Tiptap.Toolbar.Redo",
      cut: null,
      copy: null,
      paste: null,
      styles: "Umb.Tiptap.Toolbar.StyleSelect",
      fontname: "Umb.Tiptap.Toolbar.FontFamily",
      fontfamily: "Umb.Tiptap.Toolbar.FontFamily",
      fontsize: "Umb.Tiptap.Toolbar.FontSize",
      forecolor: "Umb.Tiptap.Toolbar.TextColorForeground",
      backcolor: "Umb.Tiptap.Toolbar.TextColorBackground",
      blockquote: "Umb.Tiptap.Toolbar.Blockquote",
      formatblock: null,
      removeformat: "Umb.Tiptap.Toolbar.ClearFormatting",
      bold: "Umb.Tiptap.Toolbar.Bold",
      italic: "Umb.Tiptap.Toolbar.Italic",
      underline: "Umb.Tiptap.Toolbar.Underline",
      strikethrough: "Umb.Tiptap.Toolbar.Strike",
      alignleft: "Umb.Tiptap.Toolbar.TextAlignLeft",
      aligncenter: "Umb.Tiptap.Toolbar.TextAlignCenter",
      alignright: "Umb.Tiptap.Toolbar.TextAlignRight",
      alignjustify: "Umb.Tiptap.Toolbar.TextAlignJustify",
      bullist: "Umb.Tiptap.Toolbar.BulletList",
      numlist: "Umb.Tiptap.Toolbar.OrderedList",
      outdent: "Umb.Tiptap.Toolbar.TextOutdent",
      indent: "Umb.Tiptap.Toolbar.TextIndent",
      anchor: "Umb.Tiptap.Toolbar.Anchor",
      table: "Umb.Tiptap.Toolbar.Table",
      hr: "Umb.Tiptap.Toolbar.HorizontalRule",
      subscript: "Umb.Tiptap.Toolbar.Subscript",
      superscript: "Umb.Tiptap.Toolbar.Superscript",
      charmap: "Umb.Tiptap.Toolbar.CharacterMap",
      rtl: "Umb.Tiptap.Toolbar.TextDirectionRtl",
      ltr: "Umb.Tiptap.Toolbar.TextDirectionLtr",
      link: "Umb.Tiptap.Toolbar.Link",
      unlink: "Umb.Tiptap.Toolbar.Unlink",
      sourcecode: "Umb.Tiptap.Toolbar.SourceEditor",
      umbmediapicker: "Umb.Tiptap.Toolbar.MediaPicker",
      umbembeddialog: "Umb.Tiptap.Toolbar.EmbeddedMedia",
      umbblockpicker: "Umb.Tiptap.Toolbar.BlockPicker"
    }, this.observe(Q.byType("tiptapToolbarExtension"), (e) => {
      const a = e.sort((i, r) => i.alias.localeCompare(r.alias)).map((i) => ({
        kind: i.kind ?? "button",
        alias: i.alias,
        label: i.meta.label,
        icon: i.meta.icon,
        dependencies: i.forExtensions
      }));
      this.#o.setValue(a), this.#r = new Map(a.map((i) => [i.alias, i]));
    }), this.consumeContext(et, async (e) => {
      this.observe(
        await e.propertyValueByAlias("extensions"),
        (a) => {
          a && (this.#i.clear(), this.#a.setValue(!1), this.#o.getValue().filter((i) => !i.dependencies || i.dependencies.every((r) => a.includes(r))).map((i) => i.alias).forEach((i) => this.#i.add(i)), this.#a.setValue(!0));
        },
        "_observeExtensions"
      );
    });
  }
  #o;
  #a;
  #i;
  #e;
  #r;
  #t;
  #n;
  cloneToolbarValue(t) {
    return this.isValidToolbarValue(t) ? t.map((e) => e.map((a) => [...a])) : [[[]]];
  }
  filterExtensions(t) {
    return this.#o.getValue().filter((e) => e.alias?.toLowerCase().includes(t) || e.label?.toLowerCase().includes(t));
  }
  getExtensionByAlias(t) {
    return this.#r?.get(t);
  }
  isExtensionEnabled(t) {
    return this.#i.has(t);
  }
  isExtensionInUse(t) {
    return this.#e.has(t);
  }
  isValidToolbarValue(t) {
    if (!Array.isArray(t)) return !1;
    for (const e of t) {
      if (!Array.isArray(e)) return !1;
      for (const a of e) {
        if (!Array.isArray(a)) return !1;
        for (const i of a)
          if (typeof i != "string") return !1;
      }
    }
    return !0;
  }
  insertToolbarItem(t, e) {
    const a = [...this.#t.getValue()], [i, r, u] = e, b = a[i], h = [...b.data], p = h[r], T = [...p.data];
    T.splice(u, 0, t), this.#e.add(t), h[r] = { unique: p.unique, data: T }, a[i] = { unique: b.unique, data: h }, this.#t.setValue(a);
  }
  insertToolbarGroup(t, e) {
    const a = [...this.#t.getValue()], i = a[t], r = [...i.data];
    r.splice(e, 0, { unique: f.new(), data: [] }), a[t] = { unique: i.unique, data: r }, this.#t.setValue(a);
  }
  insertToolbarRow(t) {
    const e = [...this.#t.getValue()];
    e.splice(t, 0, { unique: f.new(), data: [{ unique: f.new(), data: [] }] }), this.#t.setValue(e);
  }
  /**
   * @param {UmbTiptapToolbarValue | Array<string> | null} value - The value to migrate.
   * @returns {UmbTiptapToolbarValue} The migrated value.
   * @deprecated This will be removed in Umbraco 16.
   */
  migrateTinyMceToolbar(t) {
    if (this.isValidToolbarValue(t)) return t;
    const e = [];
    if (Array.isArray(t) && t.length > 0 && typeof t[0] == "string")
      for (const a of t) {
        const i = this.#n[a];
        i && e.push(i);
      }
    return [[e]];
  }
  moveToolbarItem(t, e) {
    const [a, i, r] = t, [u, b, h] = e, p = [...this.#t.getValue()], T = p[a], _ = [...T.data], O = _[i], D = [...O.data], J = D.splice(r, 1);
    _[i] = { unique: O.unique, data: D }, p[a] = { unique: T.unique, data: _ };
    const B = p[u], k = [...B.data], G = k[b], M = [...G.data];
    M.splice(h, 0, J[0]), k[b] = { unique: G.unique, data: M }, p[u] = { unique: B.unique, data: k }, this.#t.setValue(p);
  }
  removeToolbarItem(t) {
    const [e, a, i] = t, r = [...this.#t.getValue()], u = r[e], b = [...u.data], h = b[a], p = [...h.data];
    p.splice(i, 1).forEach((_) => this.#e.delete(_)), b[a] = { unique: h.unique, data: p }, r[e] = { unique: u.unique, data: b }, this.#t.setValue(r);
  }
  removeToolbarGroup(t, e) {
    const a = [...this.#t.getValue()];
    if (a[t].data.length > e) {
      const i = a[t], r = [...i.data];
      r.splice(e, 1).forEach((b) => b.data.forEach((h) => this.#e.delete(h))), a[t] = { unique: i.unique, data: r };
    }
    a[t].data.length === 0 && (a[t].data[0] = { unique: f.new(), data: [] }), this.#t.setValue(a);
  }
  removeToolbarRow(t) {
    const e = [...this.#t.getValue()];
    e.length > t && e.splice(t, 1).forEach(
      (i) => i.data.forEach((r) => r.data.forEach((u) => this.#e.delete(u)))
    ), e.length === 0 && (e[0] = { unique: f.new(), data: [{ unique: f.new(), data: [] }] }), this.#t.setValue(e);
  }
  setToolbar(t) {
    this.isValidToolbarValue(t) || (t = [[[]]]), this.#e.clear(), t.forEach((a) => a.forEach((i) => i.forEach((r) => this.#e.add(r))));
    const e = t.map((a) => ({
      unique: f.new(),
      data: a.map((i) => ({ unique: f.new(), data: i }))
    }));
    this.#t.setValue(e);
  }
  updateToolbarRow(t, e) {
    const a = [...this.#t.getValue()], i = a[t];
    a[t] = { unique: i.unique, data: e }, this.#t.setValue(a);
  }
}
var ut = Object.defineProperty, ct = Object.getOwnPropertyDescriptor, P = (o) => {
  throw TypeError(o);
}, E = (o, t, e, a) => {
  for (var i = a > 1 ? void 0 : a ? ct(t, e) : t, r = o.length - 1, u; r >= 0; r--)
    (u = o[r]) && (i = (a ? u(t, e, i) : u(i)) || i);
  return a && i && ut(t, e, i), i;
}, V = (o, t, e) => t.has(o) || P("Cannot " + e), n = (o, t, e) => (V(o, t, "read from private field"), e ? e.call(o) : t.get(o)), w = (o, t, e) => t.has(o) ? P("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(o) : t.set(o, e), q = (o, t, e, a) => (V(o, t, "write to private field"), t.set(o, e), e), c = (o, t, e) => (V(o, t, "access private method"), e), s, y, A, m, l, L, x, R, U, C, F, W, N, X, Y, j, H;
let g = class extends st {
  constructor() {
    super(), w(this, l), w(this, s, new lt(this)), w(this, y), w(this, A, nt((o) => {
      this._availableExtensions = n(this, s).filterExtensions(o);
    }, 250)), this._availableExtensions = [], this._toolbar = [], w(this, m), this.consumeContext(ot, (o) => {
      this.observe(n(this, s).extensions, (t) => {
        this._availableExtensions = t;
      }), this.observe(n(this, s).reload, (t) => {
        t && this.requestUpdate();
      }), this.observe(n(this, s).toolbar, (t) => {
        t.length && (this._toolbar = t, q(this, m, t.map((e) => e.data.map((a) => [...a.data]))), o.setValue(n(this, m)));
      });
    });
  }
  set value(o) {
    o || (o = [[[]]]), o !== n(this, m) && q(this, m, n(this, s).migrateTinyMceToolbar(o));
  }
  get value() {
    return n(this, s).cloneToolbarValue(n(this, m));
  }
  firstUpdated() {
    n(this, s).setToolbar(this.value);
  }
  render() {
    return d`${c(this, l, X).call(this)} ${c(this, l, W).call(this)}`;
  }
};
s = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
A = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
L = function(o) {
  const t = (n(this, m)?.length ?? 1) - 1, e = (n(this, m)?.[t].length ?? 1) - 1, a = n(this, m)?.[t][e].length ?? 0;
  n(this, s).insertToolbarItem(o.alias, [t, e, a]);
};
x = function(o, t, e) {
  o.dataTransfer.effectAllowed = "move", q(this, y, { alias: t, fromPos: e });
};
R = function(o) {
  o.preventDefault(), o.dataTransfer.dropEffect = "move";
};
U = function(o) {
  if (o.preventDefault(), o.dataTransfer?.dropEffect === "none") {
    const { fromPos: t } = n(this, y) ?? {};
    if (!t) return;
    n(this, s).removeToolbarItem(t);
  }
};
C = function(o, t) {
  o.preventDefault();
  const { alias: e, fromPos: a } = n(this, y) ?? {};
  if (a && !t) {
    n(this, s).removeToolbarItem(a);
    return;
  }
  if (a && t) {
    n(this, s).moveToolbarItem(a, t);
    return;
  }
  e && t && n(this, s).insertToolbarItem(e, t);
};
F = function(o) {
  const t = (o.target.value ?? "").toLocaleLowerCase();
  n(this, A).call(this, t);
};
W = function() {
  return d`
			<uui-box id="toolbox" headline=${this.localize.term("tiptap_toobar_availableItems")}>
				<div slot="header-actions">
					<uui-input
						type="search"
						autocomplete="off"
						placeholder=${this.localize.term("placeholders_filter")}
						@input=${c(this, l, F)}>
						<div slot="prepend">
							<uui-icon name="search"></uui-icon>
						</div>
					</uui-input>
				</div>
				<uui-scroll-container>
					<div class="available-items" dropzone="move" @drop=${c(this, l, C)} @dragover=${c(this, l, R)}>
						${v(
    this._availableExtensions.length === 0,
    () => d`<umb-localize key="tiptap_toobar_availableItemsEmpty"
									>There are no toolbar extensions to show</umb-localize
								>`,
    () => z(this._availableExtensions, (o) => c(this, l, N).call(this, o))
  )}
					</div>
				</uui-scroll-container>
			</uui-box>
		`;
};
N = function(o) {
  const t = !n(this, s).isExtensionEnabled(o.alias), e = n(this, s).isExtensionInUse(o.alias);
  return e || t ? $ : d`
			<uui-button
				compact
				class=${t ? "forbidden" : ""}
				data-mark="tiptap-toolbar-item:${o.alias}"
				draggable="true"
				look=${t ? "placeholder" : "outline"}
				?disabled=${t || e}
				@click=${() => c(this, l, L).call(this, o)}
				@dragstart=${(a) => c(this, l, x).call(this, a, o.alias)}
				@dragend=${c(this, l, U)}>
				<div class="inner">
					${v(o.icon, () => d`<umb-icon .name=${o.icon}></umb-icon>`)}
					<span>${this.localize.string(o.label)}</span>
				</div>
			</uui-button>
		`;
};
X = function() {
  return d`
			<div id="toolbar">
				<div id="rows">
					${z(
    this._toolbar,
    (o) => o.unique,
    (o, t) => c(this, l, Y).call(this, o, t)
  )}
				</div>
				<uui-button
					id="btnAddRow"
					look="placeholder"
					label=${this.localize.term("tiptap_toolbar_addRow")}
					@click=${() => n(this, s).insertToolbarRow(this._toolbar.length)}></uui-button>
			</div>
		`;
};
Y = function(o, t = 0) {
  if (!o) return $;
  const e = this._toolbar.length === 1;
  return d`
			<uui-button-inline-create
				label=${this.localize.term("tiptap_toolbar_addRow")}
				@click=${() => n(this, s)?.insertToolbarRow(t)}></uui-button-inline-create>
			<div class="row">
				<div class="groups">
					<uui-button-inline-create
						vertical
						label=${this.localize.term("tiptap_toolbar_addGroup")}
						@click=${() => n(this, s)?.insertToolbarGroup(t, 0)}></uui-button-inline-create>
					${z(
    o.data,
    (a) => a.unique,
    (a, i) => c(this, l, j).call(this, a, t, i)
  )}
				</div>
				${v(
    !e,
    () => d`
						<uui-action-bar>
							<uui-button
								look="secondary"
								label=${this.localize.term("tiptap_toolbar_removeRow")}
								@click=${() => n(this, s)?.removeToolbarRow(t)}>
								<uui-icon name="icon-trash"></uui-icon>
							</uui-button>
						</uui-action-bar>
					`
  )}
			</div>
		`;
};
j = function(o, t = 0, e = 0) {
  if (!o) return $;
  const a = this._toolbar[t].data.length > 1 && o.data.length === 0;
  return d`
			<div
				class="group"
				dropzone="move"
				@dragover=${c(this, l, R)}
				@drop=${(i) => c(this, l, C).call(this, i, [t, e, o.data.length - 1])}>
				<div class="items">
					${v(
    o?.data.length === 0,
    () => d`<em><umb-localize key="toolbar_emptyGroup">Empty</umb-localize></em>`,
    () => d`${o.data.map((i, r) => c(this, l, H).call(this, i, t, e, r))}`
  )}
				</div>
				${v(
    a,
    () => d`
						<uui-action-bar>
							<uui-button
								look="secondary"
								label=${this.localize.term("tiptap_toolbar_removeGroup")}
								@click=${() => n(this, s)?.removeToolbarGroup(t, e)}>
								<uui-icon name="icon-trash"></uui-icon>
							</uui-button>
						</uui-action-bar>
					`
  )}
			</div>
			<uui-button-inline-create
				vertical
				label=${this.localize.term("tiptap_toolbar_addGroup")}
				@click=${() => n(this, s)?.insertToolbarGroup(t, e + 1)}></uui-button-inline-create>
		`;
};
H = function(o, t = 0, e = 0, a = 0) {
  const i = n(this, s)?.getExtensionByAlias(o);
  if (!i) return $;
  const r = !n(this, s)?.isExtensionEnabled(i.alias);
  switch (i.kind) {
    case "menu":
      return d`
					<uui-button
						compact
						class=${r ? "forbidden" : ""}
						draggable="true"
						look=${r ? "placeholder" : "outline"}
						title=${this.localize.string(i.label)}
						?disabled=${r}
						@click=${() => n(this, s).removeToolbarItem([t, e, a])}
						@dragend=${c(this, l, U)}
						@dragstart=${(u) => c(this, l, x).call(this, u, o, [t, e, a])}>
						<div class="inner">
							<span>${this.localize.string(i.label)}</span>
						</div>
						<uui-symbol-expand slot="extra" open></uui-symbol-expand>
					</uui-button>
				`;
    case "button":
    default:
      return d`
					<uui-button
						compact
						class=${r ? "forbidden" : ""}
						data-mark="tiptap-toolbar-item:${i.alias}"
						draggable="true"
						look=${r ? "placeholder" : "outline"}
						title=${this.localize.string(i.label)}
						?disabled=${r}
						@click=${() => n(this, s).removeToolbarItem([t, e, a])}
						@dragend=${c(this, l, U)}
						@dragstart=${(u) => c(this, l, x).call(this, u, o, [t, e, a])}>
						<div class="inner">
							${v(
        i.icon,
        () => d`<umb-icon .name=${i.icon}></umb-icon>`,
        () => d`<span>${this.localize.string(i.label)}</span>`
      )}
						</div>
					</uui-button>
				`;
  }
};
g.styles = [
  at`
			:host {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-4);
				flex-grow: 1;
			}

			@media (min-width: 1400px) {
				:host {
					flex-direction: row;
				}
				#toolbox {
					width: 500px;
					max-width: 33%;
					flex-grow: 1;
				}

				#toolbar {
					flex-grow: 100;
				}
			}

			#toolbox {
				border: 1px solid var(--uui-color-border);
			}

			uui-box {
				[slot='header-actions'] {
					margin-bottom: var(--uui-size-2);

					uui-input {
						align-items: baseline;
					}

					uui-icon {
						color: var(--uui-color-border);
					}
				}
			}

			uui-scroll-container {
				max-height: 350px;
			}

			.available-items {
				display: flex;
				flex-wrap: wrap;
				gap: var(--uui-size-3);

				uui-button {
					--uui-button-font-weight: normal;

					&[draggable='true'],
					&[draggable='true'] > .inner {
						cursor: move;
					}

					&[disabled],
					&[disabled] > .inner {
						cursor: not-allowed;
					}

					&.forbidden {
						--color: var(--uui-color-danger);
						--color-standalone: var(--uui-color-danger-standalone);
						--color-emphasis: var(--uui-color-danger-emphasis);
						--color-contrast: var(--uui-color-danger);
						--uui-button-contrast-disabled: var(--uui-color-danger);
						--uui-button-border-color-disabled: var(--uui-color-danger);
					}

					div {
						display: flex;
						gap: var(--uui-size-1);
					}
				}
			}

			uui-button-inline-create:not([vertical]) {
				margin-bottom: -4px;
			}

			#rows {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-1);

				.row {
					display: flex;
					align-items: flex-start;
					justify-content: space-between;
					gap: var(--uui-size-3);

					&:not(:last-child) {
						border-bottom: 1px solid var(--uui-color-border);
					}

					&:focus-within,
					&:hover {
						border-color: var(--uui-color-border-standalone);
					}

					.groups {
						flex: 1;
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
						align-items: center;
						justify-content: flex-start;
						gap: var(--uui-size-1);

						uui-button-inline-create {
							height: 50px;
						}

						.group {
							display: flex;
							flex-direction: row;
							align-items: center;
							justify-content: space-between;
							gap: var(--uui-size-3);

							border: 1px dashed transparent;
							border-radius: var(--uui-border-radius);
							padding: var(--uui-size-3);

							> uui-action-bar {
								opacity: 0;
								transition: opacity 120ms;
							}

							&:focus-within,
							&:hover {
								border-color: var(--uui-color-border-standalone);
								> uui-action-bar {
									opacity: 1;
								}
							}

							.items {
								display: flex;
								flex-direction: row;
								flex-wrap: wrap;
								gap: var(--uui-size-1);

								uui-button {
									--uui-button-font-weight: normal;

									&[draggable='true'],
									&[draggable='true'] > .inner {
										cursor: move;
									}

									&[disabled],
									&[disabled] > .inner {
										cursor: not-allowed;
									}

									&.forbidden {
										--color: var(--uui-color-danger);
										--color-standalone: var(--uui-color-danger-standalone);
										--color-emphasis: var(--uui-color-danger-emphasis);
										--color-contrast: var(--uui-color-danger);
										--uui-button-contrast-disabled: var(--uui-color-danger);
										--uui-button-border-color-disabled: var(--uui-color-danger);
									}

									div {
										display: flex;
										gap: var(--uui-size-1);
									}

									uui-symbol-expand {
										margin-left: var(--uui-size-space-2);
									}
								}
							}
						}
					}
				}
			}

			#btnAddRow {
				display: block;
				margin-top: var(--uui-size-1);
			}

			.handle {
				cursor: move;
			}
		`
];
E([
  S()
], g.prototype, "_availableExtensions", 2);
E([
  S()
], g.prototype, "_toolbar", 2);
E([
  it({ attribute: !1 })
], g.prototype, "value", 1);
g = E([
  rt("umb-property-editor-ui-tiptap-toolbar-configuration")
], g);
export {
  g as UmbPropertyEditorUiTiptapToolbarConfigurationElement,
  g as element
};
//# sourceMappingURL=property-editor-ui-tiptap-toolbar-configuration.element-okeG0GCY.js.map
