import { UmbModalToken as L, UMB_MODAL_MANAGER_CONTEXT as q } from "@umbraco-cms/backoffice/modal";
import { e as z } from "../media-item.store.context-token-9YLCPlu1.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/resources";
import { UmbDropzoneMediaTypePickerModalElement as Ee } from "../dropzone-media-type-picker-modal.element-CcTa8a3H.js";
import { UmbTemporaryFileManager as D, TemporaryFileStatus as y } from "@umbraco-cms/backoffice/temporary-file";
import { UmbArrayState as g, UmbObjectState as $ } from "@umbraco-cms/backoffice/observable-api";
import { UmbControllerBase as x } from "@umbraco-cms/backoffice/class-api";
import { UmbId as w } from "@umbraco-cms/backoffice/id";
import { UmbMediaTypeStructureRepository as P } from "@umbraco-cms/backoffice/media-type";
import { UMB_NOTIFICATION_CONTEXT as N } from "@umbraco-cms/backoffice/notification";
import { UmbLocalizationController as R } from "@umbraco-cms/backoffice/localization-api";
import { ifDefined as S, html as n, nothing as k, repeat as W, when as h, css as O, property as f, query as B, state as V, customElement as G } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as Y } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as X } from "@umbraco-cms/backoffice/style";
import { formatBytes as K } from "@umbraco-cms/backoffice/utils";
import { UmbFormControlMixin as Z } from "@umbraco-cms/backoffice/validation";
const H = new L("Umb.Modal.Dropzone.MediaTypePicker", {
  modal: {
    type: "dialog"
  }
});
var o = /* @__PURE__ */ ((s) => (s.WAITING = "waiting", s.COMPLETE = "complete", s.NOT_ALLOWED = "not allowed", s.CANCELLED = "cancelled", s.ERROR = "error", s))(o || {});
class J extends x {
  constructor(e) {
    super(e), this.#a = !0, this.#o = new P(this), this.#i = new z(this), this.#s = new D(this), this.#l = new g([], (t) => t.extension), this.#n = new g([], (t) => t.mediaTypeUnique), this.#r = new $({ total: 0, completed: 0 }), this.progress = this.#r.asObservable(), this.#t = new g([], (t) => t.unique), this.progressItems = this.#t.asObservable(), this.#c = new R(this), this.createFilesAsMedia = this.createMediaItems, this.createFilesAsTemporary = this.createTemporaryFiles, this.#p = ({ folders: t, files: r }, i) => {
      const a = [];
      for (const l of r) {
        const c = {
          file: l,
          temporaryUnique: w.new(),
          abortController: new AbortController(),
          onProgress: (M) => this.#C(m, M)
        }, m = {
          unique: w.new(),
          parentUnique: i,
          status: o.WAITING,
          progress: 0,
          temporaryFile: c
        };
        c.abortController?.signal.addEventListener("abort", () => {
          this.#e(m, o.CANCELLED);
        }), a.push(m);
      }
      for (const l of t) {
        const c = w.new();
        a.push({
          unique: c,
          parentUnique: i,
          status: o.WAITING,
          progress: 100,
          // Folders are created instantly.
          folder: { name: l.folderName }
        }), a.push(...this.#p({ folders: l.folders, files: l.files }, c));
      }
      return a;
    }, this.#d = e, this.consumeContext(N, (t) => {
      this.#u = t;
    });
  }
  #d;
  #a;
  #o;
  #i;
  #s;
  #l;
  #n;
  #r;
  #t;
  #u;
  #c;
  /**
   * @deprecated Not used anymore; this method will be removed in Umbraco 17.
   */
  setIsFoldersAllowed(e) {
    this.#a = e;
  }
  /**
   * @deprecated Not used anymore; this method will be removed in Umbraco 17.
   */
  getIsFoldersAllowed() {
    return this.#a;
  }
  /**
   * Uploads files and folders to the server and creates the media items with corresponding media type.\
   * Allows the user to pick a media type option if multiple types are allowed.
   * @param {UmbFileDropzoneDroppedItems} items - The files and folders to upload.
   * @param {string | null} parentUnique - Where the items should be uploaded.
   * @returns {Array<UmbUploadableItem>} - The items about to be uploaded.
   */
  createMediaItems(e, t = null) {
    const r = this.#b(e, t);
    return r.length ? (r.length === 1 ? this.#g(r[0]) : this.#w(r), r) : [];
  }
  /**
   * Uploads the files as temporary files and returns the data.
   * @param { File[] } files - The files to upload.
   * @returns {Promise<Array<UmbUploadableItem>>} - Files as temporary files.
   */
  async createTemporaryFiles(e) {
    const t = this.#b({ files: e, folders: [] }, null), r = [];
    for (const i of t) {
      const a = await this.#s.uploadOne(i.temporaryFile);
      a.status === y.CANCELLED ? this.#e(i, o.CANCELLED) : a.status === y.SUCCESS ? this.#e(i, o.COMPLETE) : this.#e(i, o.ERROR), r.push(i);
    }
    return r;
  }
  removeOne(e) {
    e.temporaryFile?.abortController?.abort(), this.#t.removeOne(e.unique), e.temporaryFile && this.#s.removeOne(e.temporaryFile.temporaryUnique);
  }
  remove(e) {
    const t = [];
    for (const i of e)
      i.temporaryFile?.abortController?.abort(), i.temporaryFile && t.push(i.temporaryFile.temporaryUnique);
    this.#t.remove(t);
    const r = e.map((i) => i.temporaryFile?.temporaryUnique).filter((i) => !!i);
    this.#s.remove(r);
  }
  removeAll() {
    for (const e of this.#t.getValue())
      e.temporaryFile?.abortController?.abort();
    this.#t.setValue([]), this.#s.removeAll();
  }
  async #v(e) {
    return (await (await this.getContext(q)).open(this.#d, H, { data: { options: e } }).onSubmit().catch(() => {
    }))?.mediaTypeUnique;
  }
  async #g(e) {
    const t = await this.#f(e);
    if (!t.length)
      return this.#u?.peek("warning", {
        data: {
          message: `${this.#c.term("media_disallowedFileType")}: ${e.temporaryFile?.file.name}.`
        }
      }), this.#e(e, o.NOT_ALLOWED);
    const r = t.length > 1 ? await this.#v(t) : t[0].unique;
    if (!r)
      return this.#e(e, o.CANCELLED);
    e.temporaryFile ? this.#h(e, r) : e.folder && this.#m(e, r);
  }
  async #w(e) {
    for (const t of e) {
      const r = await this.#f(t);
      if (!r.length) {
        this.#e(t, o.NOT_ALLOWED);
        continue;
      }
      const i = r[0].unique;
      if (!i)
        throw new Error("Media type unique is not defined");
      t.temporaryFile ? this.#h(t, i) : t.folder && this.#m(t, i);
    }
  }
  async #h(e, t) {
    const r = await this.#s.uploadOne(e.temporaryFile);
    if (r.status === y.CANCELLED) {
      this.#e(e, o.CANCELLED);
      return;
    }
    if (r.status !== y.SUCCESS) {
      this.#e(e, o.ERROR);
      return;
    }
    const i = await this.#y(e, t), { data: a } = await this.#i.create(i, e.parentUnique);
    a ? this.#e(e, o.COMPLETE) : this.#e(e, o.ERROR);
  }
  async #m(e, t) {
    const r = await this.#y(e, t), { data: i } = await this.#i.create(r, e.parentUnique);
    i ? this.#e(e, o.COMPLETE) : this.#e(e, o.ERROR);
  }
  // Media types
  async #f(e) {
    const t = e.parentUnique ? await this.#i.requestByUnique(e.parentUnique) : null, r = await this.#_(t?.data?.mediaType.unique ?? null, e.parentUnique), i = e.temporaryFile?.file.name.split(".").pop() ?? null, a = await this.#E(i);
    return a.length ? r.filter((c) => a.find((m) => m.unique === c.unique)) : [];
  }
  async #E(e) {
    const t = this.#l.getValue().find((i) => i.extension === e)?.availableMediaTypes;
    if (t) return t;
    const r = e ? await this.#o.requestMediaTypesOf({ fileExtension: e }) : await this.#o.requestMediaTypesOfFolders();
    return this.#l.appendOne({ extension: e, availableMediaTypes: r }), r;
  }
  async #_(e, t) {
    const r = this.#n.getValue().find((a) => a.mediaTypeUnique === e)?.allowedChildren;
    if (r) return r;
    const { data: i } = await this.#o.requestAllowedChildrenOf(e, t);
    if (!i) throw new Error("Parent media type does not exists");
    return this.#n.appendOne({ mediaTypeUnique: e, allowedChildren: i.items }), i.items;
  }
  // Scaffold
  async #y(e, t) {
    const r = e.temporaryFile ? e.temporaryFile.file.name : e.folder?.name ?? "", i = {
      editorAlias: "",
      alias: "umbracoFile",
      value: { temporaryFileId: e.temporaryFile?.temporaryUnique },
      culture: null,
      segment: null
    }, a = {
      unique: e.unique,
      mediaType: { unique: t, collection: null },
      variants: [{ culture: null, segment: null, createDate: null, updateDate: null, name: r }],
      values: e.temporaryFile ? [i] : void 0
    }, { data: l } = await this.#i.createScaffold(a);
    return l;
  }
  // Progress handling
  #b(e, t) {
    const r = this.#r.getValue(), i = this.#t.getValue(), a = this.#p({ folders: e.folders, files: e.files }, t);
    return this.#t.setValue([...i, ...a]), this.#r.setValue({ total: r.total + a.length, completed: r.completed }), a;
  }
  #e(e, t) {
    this.#t.updateOne(e.unique, { status: t });
    const r = this.#r.getValue();
    this.#r.update({ completed: r.completed + 1 });
  }
  #C(e, t) {
    this.#t.updateOne(e.unique, { progress: t });
  }
  #p;
  destroy() {
    this.#s.destroy(), super.destroy();
  }
}
class C extends Event {
  static {
    this.TYPE = "change";
  }
  constructor(e, t) {
    super(C.TYPE, { bubbles: !1, composed: !1, cancelable: !1, ...t }), this.items = e;
  }
}
class T extends Event {
  static {
    this.TYPE = "submitted";
  }
  constructor(e, t) {
    super(T.TYPE, { bubbles: !1, composed: !1, cancelable: !1, ...t }), this.items = e;
  }
}
var Q = Object.defineProperty, j = Object.getOwnPropertyDescriptor, I = (s) => {
  throw TypeError(s);
}, u = (s, e, t, r) => {
  for (var i = r > 1 ? void 0 : r ? j(e, t) : e, a = s.length - 1, l; a >= 0; a--)
    (l = s[a]) && (i = (r ? l(e, t, i) : l(i)) || i);
  return r && i && Q(e, t, i), i;
}, A = (s, e, t) => e.has(s) || I("Cannot " + t), E = (s, e, t) => (A(s, e, "read from private field"), t ? t.call(s) : e.get(s)), ee = (s, e, t) => e.has(s) ? I("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, t), b = (s, e, t) => (A(s, e, "access private method"), t), d, v, _, F, U;
let p = class extends Z(
  Y
) {
  constructor() {
    super(), ee(this, d), this.disableFolderUpload = !1, this.disabled = !1, this.multiple = !1, this.label = "dropzone", this._progressItems = [], this._manager = new J(this), this.observe(
      this._manager.progress,
      (s) => this.dispatchEvent(new ProgressEvent("progress", { loaded: s.completed, total: s.total })),
      "_observeProgress"
    ), this.observe(
      this._manager.progressItems,
      (s) => {
        this._progressItems = [...s];
        const e = this._progressItems.find((t) => t.status === o.WAITING);
        this._progressItems.length && !e && (this.value = [...this._progressItems], this.dispatchEvent(new C(this._progressItems)));
      },
      "_observeProgressItems"
    );
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._manager.destroy();
  }
  /**
   * Opens the file browse dialog.
   */
  browse() {
    E(this, d, v) || this._dropzone?.browse();
  }
  render() {
    return n`
			<slot name="text"></slot>
			<uui-file-dropzone
				id="dropzone"
				label=${this.label}
				accept=${S(this.accept)}
				?multiple=${this.multiple}
				?disabled=${E(this, d, v)}
				?disallowFolderUpload=${this.disableFolderUpload}
				@change=${this.onUpload}
				@click=${b(this, d, _)}>
				<slot>
					<uui-button label=${this.localize.term("media_clickToUpload")} @click=${b(this, d, _)}></uui-button>
				</slot>
			</uui-file-dropzone>
			${this.renderUploader()}
		`;
  }
  renderUploader() {
    return this._progressItems?.length ? n`
			<div id="uploader">
				${W(
      this._progressItems,
      (s) => s.unique,
      (s) => this.renderPlaceholder(s)
    )}
				<uui-button
					id="uploader-clear"
					compact
					@click=${b(this, d, U)}
					label=${this.localize.term("content_uploadClear")}>
					<uui-icon name="icon-trash"></uui-icon>${this.localize.term("content_uploadClear")}
				</uui-button>
			</div>
		` : k;
  }
  renderPlaceholder(s) {
    const e = s.temporaryFile?.file;
    return n`
			<div class="placeholder">
				<div class="fileIcon">
					${h(
      s.status === o.COMPLETE,
      () => n`<umb-icon name="check" color="green"></umb-icon>`
    )}
					${h(
      s.status === o.ERROR || s.status === o.CANCELLED || s.status === o.NOT_ALLOWED,
      () => n`<umb-icon name="wrong" color="red"></umb-icon>`
    )}
				</div>
				<div class="fileDetails">
					<div class="fileName" title=${e?.name ?? ""}>${e?.name ?? ""}</div>
					<div class="fileSize">
						${K(e?.size ?? 0, { decimals: 2 })}:
						${this.localize.number(s.progress, { maximumFractionDigits: 0 })}%
					</div>
					${h(
      s.status === o.WAITING,
      () => n`<div class="progress"><uui-loader-bar progress=${s.progress}></uui-loader-bar></div>`
    )}
					${h(
      s.status === o.ERROR,
      () => n`<div class="error">An error occured</div>`
    )}
					${h(s.status === o.CANCELLED, () => n`<div class="error">Cancelled</div>`)}
					${h(
      s.status === o.NOT_ALLOWED,
      () => n`<div class="error">File type not allowed</div>`
    )}
				</div>
				<div class="fileActions">
					${h(
      s.status === o.WAITING,
      () => n`
							<uui-button
								compact
								@click=${() => b(this, d, F).call(this, s)}
								label=${this.localize.term("general_cancel")}>
								<uui-icon name="icon-remove"></uui-icon>${this.localize.term("general_cancel")}
							</uui-button>
						`
    )}
				</div>
			</div>
		`;
  }
  async onUpload(s) {
    if (s.stopImmediatePropagation(), E(this, d, v) || !s.detail.files.length && !s.detail.folders.length) return;
    const e = this._manager.createTemporaryFiles(s.detail.files);
    this.dispatchEvent(new T(await e));
  }
};
d = /* @__PURE__ */ new WeakSet();
v = function() {
  return this.disabled || !this.multiple && this._progressItems.length > 0;
};
_ = function(s) {
  this._dropzone && (s.stopImmediatePropagation(), this._dropzone.browse());
};
F = function(s) {
  s.temporaryFile?.abortController?.abort();
};
U = function() {
  this._manager.removeAll();
};
p.styles = [
  X,
  O`
			:host {
				display: flex;
				flex-direction: column;
				flex-wrap: wrap;
				place-items: center;
				cursor: pointer;
			}

			:host([disabled]) #dropzone {
				opacity: 0.5;
				pointer-events: none;
			}

			#dropzone {
				width: 100%;
				inset: 0;
				backdrop-filter: opacity(1); /* Removes the built in blur effect */

				&[disabled] {
					opacity: 0.5;
					pointer-events: none;
				}
			}

			#uploader {
				display: flex;
				flex-direction: column;
				flex-wrap: wrap;
				align-items: center;
				gap: var(--uui-size-space-3);

				.placeholder {
					display: grid;
					grid-template-columns: 30px 200px 1fr;
					max-width: fit-content;
					padding: var(--uui-size-space-3);
					border: 1px dashed var(--uui-color-divider-emphasis);
				}

				.fileIcon,
				.fileActions {
					place-self: center center;
				}

				.fileName {
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					font-size: var(--uui-size-5);
				}

				.fileSize {
					font-size: var(--uui-font-size-small);
					color: var(--uui-color-text-alt);
				}

				.error {
					color: var(--uui-color-danger);
				}
			}
		`
];
u([
  f({ type: String })
], p.prototype, "accept", 2);
u([
  f({ type: Boolean, attribute: "disable-folder-upload" })
], p.prototype, "disableFolderUpload", 2);
u([
  f({ type: Boolean, reflect: !0 })
], p.prototype, "disabled", 2);
u([
  f({ type: Boolean })
], p.prototype, "multiple", 2);
u([
  f({ type: String })
], p.prototype, "label", 2);
u([
  B("#dropzone", !0)
], p.prototype, "_dropzone", 2);
u([
  V()
], p.prototype, "_progressItems", 2);
p = u([
  G("umb-input-dropzone")
], p);
const ve = O`
	umb-input-dropzone {
		position: relative;
		display: block;
		inset: 0;
		cursor: pointer;
		border: 1px dashed var(--uui-color-divider-emphasis);
	}
`;
export {
  H as UMB_DROPZONE_MEDIA_TYPE_PICKER_MODAL,
  C as UmbDropzoneChangeEvent,
  J as UmbDropzoneManager,
  Ee as UmbDropzoneMediaTypePickerModalElement,
  T as UmbDropzoneSubmittedEvent,
  o as UmbFileDropzoneItemStatus,
  ve as UmbInputDropzoneDashedStyles,
  p as UmbInputDropzoneElement
};
//# sourceMappingURL=index.js.map
