import { TemporaryFileService as v } from "@umbraco-cms/backoffice/external/backend-api";
import { tryXhrRequest as C, tryExecuteAndNotify as d, isCancelError as O } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as I } from "@umbraco-cms/backoffice/repository";
import { css as S, property as y, customElement as T, html as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as F } from "@umbraco-cms/backoffice/lit-element";
import { clamp as b, formatBytes as _ } from "@umbraco-cms/backoffice/utils";
import { UmbTemporaryFileConfigRepository as x } from "../config.repository-BYcO56Dn.js";
import { U as oe } from "../config.store.token-CsbU_19N.js";
import { UmbTemporaryFileConfigStore as ae } from "../config.store-CVJDS2rs.js";
import { U as le, a as ce } from "../constants-CDwqkOdg.js";
import "@umbraco-cms/backoffice/store";
import { UmbArrayState as z, observeMultiple as A } from "@umbraco-cms/backoffice/observable-api";
import { UmbControllerBase as B } from "@umbraco-cms/backoffice/class-api";
import { UmbLocalizationController as P } from "@umbraco-cms/backoffice/localization-api";
import { UMB_NOTIFICATION_CONTEXT as w } from "@umbraco-cms/backoffice/notification";
class M {
  #e;
  /**
   * Creates an instance of UmbTemporaryFileServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbTemporaryFileServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Uploads a temporary file to the server
   * @param {string} id
   * @param {File} file
   * @returns {*}
   * @memberof UmbTemporaryFileServerDataSource
   */
  async create(e, t, i, o) {
    const s = new FormData();
    s.append("Id", e), s.append("File", t);
    const a = C({
      url: "/umbraco/management/api/v1/temporary-file",
      method: "POST",
      responseHeader: "Umb-Generated-Resource",
      body: s,
      onProgress: i,
      abortSignal: o
    });
    return d(this.#e, a);
  }
  /**
   * Gets a temporary file from the server
   * @param {string} id
   * @returns {*}
   * @memberof UmbTemporaryFileServerDataSource
   */
  read(e) {
    if (!e) throw new Error("Id is missing");
    return d(this.#e, v.getTemporaryFileById({ id: e }));
  }
  /**
   * Deletes a temporary file from the server
   * @param {string} id
   * @returns {*}
   * @memberof UmbTemporaryFileServerDataSource
   */
  delete(e) {
    if (!e) throw new Error("Id is missing");
    return d(this.#e, v.deleteTemporaryFileById({ id: e }));
  }
}
class N extends I {
  #e;
  /**
   * Creates an instance of UmbTemporaryFileRepository.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbTemporaryFileRepository
   */
  constructor(e) {
    super(e), this.#e = new M(e);
  }
  /**
   * Uploads a temporary file
   * @param {string} id
   * @param {File} file
   * @param onProgress
   * @param abortSignal
   * @returns {*}
   * @memberof UmbTemporaryFileRepository
   */
  upload(e, t, i, o) {
    return this.#e.create(e, t, i, o);
  }
  /**
   * Deletes a temporary file
   * @param {string} id
   * @returns {*}
   * @memberof UmbTemporaryFileRepository
   */
  delete(e) {
    return this.#e.delete(e);
  }
  /**
   * Gets a temporary file
   * @param {string} id
   * @returns {*}
   * @memberof UmbTemporaryFileRepository
   */
  requestById(e) {
    return this.#e.read(e);
  }
}
var q = Object.defineProperty, L = Object.getOwnPropertyDescriptor, U = (r) => {
  throw TypeError(r);
}, h = (r, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? L(e, t) : e, s = r.length - 1, a; s >= 0; s--)
    (a = r[s]) && (o = (i ? a(e, t, o) : a(o)) || o);
  return i && o && q(e, t, o), o;
}, g = (r, e, t) => e.has(r) || U("Cannot " + t), $ = (r, e, t) => (g(r, e, "read from private field"), t ? t.call(r) : e.get(r)), E = (r, e, t) => e.has(r) ? U("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), k = (r, e, t, i) => (g(r, e, "write to private field"), e.set(r, t), t), G = (r, e, t) => (g(r, e, "access private method"), t), u, f, R;
let c = class extends F {
  constructor() {
    super(...arguments), E(this, f), E(this, u, 0), this.complete = !1, this.error = !1;
  }
  set progress(r) {
    const e = b(Math.ceil(r), 0, 100);
    k(this, u, e);
  }
  get progress() {
    return $(this, u);
  }
  render() {
    return m` <div id="wrapper">
			<uui-loader-circle .progress=${this.complete || this.error ? 100 : this.progress}></uui-loader-circle>
			<div id="icon">${G(this, f, R).call(this)}</div>
		</div>`;
  }
};
u = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakSet();
R = function() {
  return this.error ? m`<uui-icon name="icon-alert"></uui-icon>` : this.complete ? m`<uui-icon name="icon-check"></uui-icon>` : `${this.progress}%`;
};
c.styles = S`
		#wrapper {
			position: relative;
			height: 75%;
		}

		:host([complete]) {
			uui-loader-circle,
			#icon {
				color: var(--uui-color-positive);
			}
		}
		:host([error]) {
			uui-loader-circle,
			#icon {
				color: var(--uui-color-danger);
			}
		}

		uui-loader-circle {
			z-index: 2;
			inset: 0;
			color: var(--uui-color-focus);
			font-size: var(--uui-size-12);
			width: 100%;
			height: 100%;
		}

		#icon {
			color: var(--uui-color-text);
			font-size: var(--uui-size-6);
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	`;
h([
  y({ type: Number })
], c.prototype, "progress", 1);
h([
  y({ type: Boolean, reflect: !0 })
], c.prototype, "complete", 2);
h([
  y({ type: Boolean, reflect: !0 })
], c.prototype, "error", 2);
c = h([
  T("umb-temporary-file-badge")
], c);
var l = /* @__PURE__ */ ((r) => (r.SUCCESS = "success", r.WAITING = "waiting", r.ERROR = "error", r.CANCELLED = "cancelled", r))(l || {});
class re extends B {
  constructor() {
    super(...arguments), this.#e = new N(this._host), this.#t = new x(this._host), this.#i = new P(this._host), this.#r = new z([], (e) => e.temporaryUnique), this.queue = this.#r.asObservable();
  }
  #e;
  #t;
  #i;
  #r;
  /**
   * Gets the temporary file configuration.
   * @returns {Promise<UmbTemporaryFileConfigRepository>} The temporary file configuration.
   */
  async getConfiguration() {
    return await this.#t.initialized, this.#t;
  }
  async uploadOne(e, t) {
    this.#r.setValue([]);
    const i = {
      ...e,
      status: l.WAITING
    };
    return this.#r.appendOne(i), (await this.#o({ ...t, chunkSize: 1 }))[0];
  }
  async upload(e, t) {
    this.#r.setValue([]);
    const i = e.map((o) => ({ ...o, status: l.WAITING }));
    return this.#r.append(i), this.#o({ ...t });
  }
  removeOne(e) {
    this.#r.removeOne(e);
  }
  remove(e) {
    this.#r.remove(e);
  }
  removeAll() {
    this.#r.setValue([]);
  }
  async #o(e) {
    const t = [], i = this.#r.getValue();
    if (!i.length) return t;
    const o = async (n) => {
      const p = await this.#a(n);
      t.push(p), e?.callback && await e.callback(p);
    }, s = e?.chunkSize ?? 5, a = Math.ceil(i.length / s);
    for (let n = 0; n < a; n++) {
      const p = i.slice(n * s, n * s + s);
      await Promise.all(p.map(o));
    }
    return t;
  }
  async #s(e) {
    const t = await this.getConfiguration();
    let i = await this.observe(t.part("maxFileSize")).asPromise();
    if (i && (i *= 1024, e.file.size > i))
      return (await this.getContext(w)).peek("warning", {
        data: {
          headline: "Upload",
          message: `
	${this.#i.term("media_invalidFileSize")}: ${e.file.name} (${_(e.file.size)}).

	${this.#i.term("media_maxFileSize")} ${_(i)}.
						`
        }
      }), !1;
    const o = e.file.name.split(".").pop() ?? "", [s, a] = await this.observe(
      A([
        this.#t.part("allowedUploadedFileExtensions"),
        this.#t.part("disallowedUploadedFilesExtensions")
      ])
    ).asPromise();
    return s?.length && !s.includes(o) || a?.length && a.includes(o) ? ((await this.getContext(w)).peek("warning", {
      data: {
        message: `${this.#i.term("media_disallowedFileType")}: ${o}`
      }
    }), !1) : !0;
  }
  async #a(e) {
    if (!e.temporaryUnique) throw new Error(`Unique is missing for item ${e}`);
    if (!await this.#s(e))
      return this.#r.updateOne(e.temporaryUnique, {
        ...e,
        status: l.ERROR
      }), { ...e, status: l.ERROR };
    const { error: i } = await this.#e.upload(
      e.temporaryUnique,
      e.file,
      (s) => {
        e.onProgress && e.onProgress(s.loaded / s.total * 100);
      },
      e.abortController?.signal ?? e.abortSignal
    );
    let o = l.SUCCESS;
    return i && (o = l.ERROR, O(i) && (o = l.CANCELLED)), this.#r.updateOne(e.temporaryUnique, { ...e, status: o }), { ...e, status: o };
  }
}
export {
  l as TemporaryFileStatus,
  le as UMB_TEMPORARY_FILE_CONFIG_STORE_ALIAS,
  oe as UMB_TEMPORARY_FILE_CONFIG_STORE_CONTEXT,
  ce as UMB_TEMPORARY_FILE_REPOSITORY_ALIAS,
  c as UmbTemporaryFileBadgeElement,
  x as UmbTemporaryFileConfigRepository,
  ae as UmbTemporaryFileConfigStore,
  re as UmbTemporaryFileManager,
  N as UmbTemporaryFileRepository
};
//# sourceMappingURL=index.js.map
