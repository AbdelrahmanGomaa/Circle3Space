import { s as x } from "./input-upload-field.element-B7PCDmnx.js";
import { html as s, repeat as b, css as y, state as E, customElement as $ } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
var M = Object.defineProperty, z = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, _ = (e, t, i, a) => {
  for (var n = a > 1 ? void 0 : a ? z(t, i) : t, p = e.length - 1, u; p >= 0; p--)
    (u = e[p]) && (n = (a ? u(t, i, n) : u(n)) || n);
  return a && n && M(t, i, n), n;
}, d = (e, t, i) => t.has(e) || m("Cannot " + i), h = (e, t, i) => (d(e, t, "read from private field"), t.get(e)), f = (e, t, i) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), L = (e, t, i, a) => (d(e, t, "write to private field"), t.set(e, i), i), c = (e, t, i) => (d(e, t, "access private method"), i), o, r, k, v, g, w;
let l = class extends C {
  constructor() {
    super(), f(this, r), f(this, o), this.consumeContext(x, (e) => {
      L(this, o, e), c(this, r, k).call(this);
    });
  }
  render() {
    return s`<umb-workspace-info-app-layout headline="#general_links">
			${c(this, r, g).call(this)}
		</umb-workspace-info-app-layout> `;
  }
};
o = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
k = function() {
  h(this, o) && this.observe(
    h(this, o).urls,
    (e) => {
      this._urls = e;
    },
    "__urls"
  );
};
v = function(e) {
  const t = window.open("", "_blank");
  if (!t) return;
  const i = `<!doctype html>
<body style="background-image: linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(135deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(135deg, transparent 75%, #ccc 75%); background-size:30px 30px; background-position:0 0, 15px 0, 15px -15px, 0px 15px;">
	<img src="${e}"/>
	<script>history.pushState(null, null, "${window.location.href}");<\/script>
</body>`;
  t.document.open(), t.document.write(i), t.document.close();
};
g = function() {
  return this._urls && this._urls.length ? s`
				${b(
    this._urls,
    (e) => e.url,
    (e) => c(this, r, w).call(this, e)
  )}
			` : s`
				<div class="link-item">
					<span class="link-content italic"><umb-localize key="content_noMediaLink"></umb-localize></span>
				</div>
			`;
};
w = function(e) {
  return e.url.split(/[#?]/)[0].split(".").pop()?.trim() === "svg" ? s`
				<a href="#" target="_blank" class="link-item with-href" @click=${() => c(this, r, v).call(this, e.url)}>
					<span class="link-content">${e.url}</span>
					<uui-icon name="icon-out"></uui-icon>
				</a>
			` : s`
				<a href=${e.url} target="_blank" class="link-item with-href">
					<span class="link-content">${e.url}</span>
					<uui-icon name="icon-out"></uui-icon>
				</a>
			`;
};
l.styles = [
  y`
			uui-box {
				--uui-box-default-padding: 0;
			}

			#link-section {
				display: flex;
				flex-direction: column;
				text-align: left;
			}

			.link-item {
				padding: var(--uui-size-space-4) var(--uui-size-space-5);
				display: grid;
				grid-template-columns: 1fr auto;
				gap: var(--uui-size-6);
				color: inherit;
				text-decoration: none;
				word-break: break-all;
			}

			.link-language {
				color: var(--uui-color-divider-emphasis);
			}

			.link-content.italic {
				font-style: italic;
			}

			.link-item uui-icon {
				margin-right: var(--uui-size-space-2);
				vertical-align: middle;
			}

			.link-item.with-href {
				cursor: pointer;
			}

			.link-item.with-href:hover {
				background: var(--uui-color-divider);
			}
		`
];
_([
  E()
], l.prototype, "_urls", 2);
l = _([
  $("umb-media-links-workspace-info-app")
], l);
const O = l;
export {
  l as UmbMediaLinksWorkspaceInfoAppElement,
  O as default
};
//# sourceMappingURL=media-links-workspace-info-app.element-DAuwZ3Sc.js.map
