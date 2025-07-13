import { UmbTextStyles as p } from "@umbraco-cms/backoffice/style";
import { ifDefined as y, html as b, css as v, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as g } from "@umbraco-cms/backoffice/modal";
var x = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, _ = (e, t, u, r) => {
  for (var i = r > 1 ? void 0 : r ? x(t, u) : t, a = e.length - 1, n; a >= 0; a--)
    (n = e[a]) && (i = n(i) || i);
  return i;
}, S = (e, t, u) => t.has(e) || m("Cannot " + u), k = (e, t, u) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, u), o = (e, t, u) => (S(e, t, "access private method"), u), l, d, h, c;
let s = class extends g {
  constructor() {
    super(...arguments), k(this, l);
  }
  render() {
    return b`
			<umb-body-layout headline="Edit style">
				<div id="main">
					<uui-box>
						<uui-form>
							<form id="MyForm" name="myForm">
								<uui-form-layout-item>
									<uui-label for="name" slot="label" required>Name</uui-label>
									<span slot="description">The name displayed in the editor style selector</span>
									<uui-input
										id="name"
										name="name"
										.value=${this.value.rule?.name ?? ""}
										label="Rule name"
										required
										@input=${o(this, l, d)}>
									</uui-input>
								</uui-form-layout-item>
								<uui-form-layout-item>
									<uui-label for="selector" slot="label" required>Selector</uui-label>
									<span slot="description">Uses CSS syntax, e.g. "h1" or ".redHeader"</span>
									<uui-input
										id="selector"
										name="selector"
										.value=${this.value.rule?.selector ?? ""}
										label="Rule selector"
										@input=${o(this, l, h)}
										required>
									</uui-input>
								</uui-form-layout-item>
								<uui-form-layout-item>
									<uui-label for="styles" slot="label">Styles</uui-label>
									<span slot="description"
										>The CSS that should be applied in the rich text editor, e.g. "color:red;"</span
									>
									<uui-textarea
										@input=${o(this, l, c)}
										id="styles"
										name="styles"
										.value=${this.value.rule?.styles ?? ""}
										label="Rule styles">
									</uui-textarea>
								</uui-form-layout-item>
								<uui-form-layout-item>
									<uui-label for="styles" slot="label">Preview</uui-label>
									<span slot="description">How the text will look like in the rich text editor.</span>
									<div style="${y(this.value.rule?.styles)}">
										a b c d e f g h i j k l m n o p q r s t u v w x t z
										<br />
										A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
										<br />
										1 2 3 4 5 6 7 8 9 0 € £ $ % &amp; (.,;:'"!?)
										<br />
										Amazingly few discotheques provide jukeboxes.
									</div>
								</uui-form-layout-item>
							</form>
						</uui-form>
					</uui-box>
				</div>
				<div slot="actions">
					<uui-button @click=${this._rejectModal} look="secondary" label="Close">Close</uui-button>
					<uui-button @click=${this._submitModal} look="primary" color="positive" label="Submit">Submit</uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
l = /* @__PURE__ */ new WeakSet();
d = function(e) {
  const t = e.target.value;
  this.updateValue({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    rule: {
      ...this.value.rule,
      name: t
    }
  });
};
h = function(e) {
  const t = e.target.value;
  this.updateValue({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    rule: {
      ...this.value.rule,
      selector: t
    }
  });
};
c = function(e) {
  const t = e.target.value;
  this.updateValue({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    rule: {
      ...this.value.rule,
      styles: t
    }
  });
};
s.styles = [
  p,
  v`
			:host {
				display: block;
				color: var(--uui-color-text);
				--umb-header-layout-height: 70px;
			}

			#main {
				box-sizing: border-box;
				height: calc(
					100dvh - var(--umb-header-layout-height) - var(--umb-footer-layout-height) - 2 * var(--uui-size-layout-1)
				);
			}

			#main uui-button:not(:last-of-type) {
				display: block;
				margin-bottom: var(--uui-size-space-5);
			}

			uui-input {
				width: 100%;
			}

			#styles {
				font-family:
					Monaco,
					Menlo,
					Consolas,
					Courier New,
					monospace;
				--uui-textarea-min-height: 100px;
				resize: none;
				width: 300px;
			}
		`
];
s = _([
  f("umb-stylesheet-rule-settings-modal")
], s);
export {
  s as default
};
//# sourceMappingURL=stylesheet-rule-settings-modal.element-D5mr1kCb.js.map
