import { b as B } from "../content-type-move-root-containers-into-first-tab-helper.class-BXhoyS1X.js";
import { d as _t, U as Pt, a as Et, c as St } from "../content-type-move-root-containers-into-first-tab-helper.class-BXhoyS1X.js";
import { U as At, a as Bt } from "../content-type-property-structure-helper.class-CrCAJBRs.js";
import { UmbLitElement as D, umbFocus as V } from "@umbraco-cms/backoffice/lit-element";
import { css as R, state as m, customElement as q, ifDefined as U, html as M } from "@umbraco-cms/backoffice/external/lit";
import { UMB_MODAL_MANAGER_CONTEXT as z } from "@umbraco-cms/backoffice/modal";
import { UMB_ICON_PICKER_MODAL as $ } from "@umbraco-cms/backoffice/icon";
import { umbBindToValidation as I } from "@umbraco-cms/backoffice/validation";
import { UmbRepositoryBase as k } from "@umbraco-cms/backoffice/repository";
import { tryExecuteAndNotify as x } from "@umbraco-cms/backoffice/resources";
import { UmbId as v } from "@umbraco-cms/backoffice/id";
import { UmbArrayState as O, createObservablePart as l, partialUpdateFrozenArray as T, appendToFrozenArray as F, filterFrozenArray as W } from "@umbraco-cms/backoffice/observable-api";
import { incrementString as L } from "@umbraco-cms/backoffice/utils";
import { UmbControllerBase as H } from "@umbraco-cms/backoffice/class-api";
import { UmbExtensionApiInitializer as G } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as X } from "@umbraco-cms/backoffice/extension-registry";
import { UmbEntityDetailWorkspaceContextBase as Y } from "@umbraco-cms/backoffice/workspace";
import { UMB_ACTION_EVENT_CONTEXT as g } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as K, UmbRequestReloadStructureForEntityEvent as Q } from "@umbraco-cms/backoffice/entity-action";
import { U as Vt } from "../property-type-based-property.element-B_7ZydA1.js";
var J = Object.defineProperty, Z = Object.getOwnPropertyDescriptor, P = (s) => {
  throw TypeError(s);
}, f = (s, t, r, e) => {
  for (var n = e > 1 ? void 0 : e ? Z(t, r) : t, i = s.length - 1, o; i >= 0; i--)
    (o = s[i]) && (n = (e ? o(t, r, n) : o(n)) || n);
  return e && n && J(t, r, n), n;
}, b = (s, t, r) => t.has(s) || P("Cannot " + r), c = (s, t, r) => (b(s, t, "read from private field"), t.get(s)), _ = (s, t, r) => t.has(s) ? P("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(s) : t.set(s, r), j = (s, t, r, e) => (b(s, t, "write to private field"), t.set(s, r), r), w = (s, t, r) => (b(s, t, "access private method"), r), u, y, E, S, N;
let p = class extends D {
  constructor() {
    super(), _(this, y), _(this, u), this.consumeContext(B, (s) => {
      j(this, u, s), w(this, y, E).call(this);
    });
  }
  async _handleIconClick() {
    const [s, t] = this._icon?.replace("color-", "")?.split(" ") ?? [];
    (await this.getContext(z)).open(this, $, {
      value: {
        icon: s,
        color: t
      }
    })?.onSubmit().then((n) => {
      n.icon && n.color ? c(this, u)?.setIcon(`${n.icon} color-${n.color}`) : n.icon && c(this, u)?.setIcon(n.icon);
    });
  }
  render() {
    return M`
			<div id="header">
				<uui-button id="icon" compact label="icon" look="outline" @click=${this._handleIconClick}>
					<umb-icon name=${U(this._icon)}></umb-icon>
				</uui-button>

				<div id="editors">
					<umb-input-with-alias
						id="name"
						label=${this.localize.term("placeholders_entername")}
						.value=${this._name}
						.alias=${this._alias}
						?auto-generate-alias=${this._isNew}
						@change=${w(this, y, S)}
						required
						${I(this, "$.name", this._name)}
						${V()}>
					</umb-input-with-alias>

					<uui-input
						id="description"
						.label=${this.localize.term("placeholders_enterDescription")}
						.value=${this._description}
						.placeholder=${this.localize.term("placeholders_enterDescription")}
						@input=${w(this, y, N)}></uui-input>
				</div>
			</div>
		`;
  }
};
u = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakSet();
E = function() {
  c(this, u) && (this.observe(c(this, u).name, (s) => this._name = s, "_observeName"), this.observe(c(this, u).alias, (s) => this._alias = s, "_observeAlias"), this.observe(
    c(this, u).description,
    (s) => this._description = s,
    "_observeDescription"
  ), this.observe(c(this, u).icon, (s) => this._icon = s, "_observeIcon"), this.observe(c(this, u).isNew, (s) => this._isNew = s, "_observeIsNew"));
};
S = function(s) {
  c(this, u)?.setName(s.target.value ?? ""), c(this, u)?.setAlias(s.target.alias ?? "");
};
N = function(s) {
  c(this, u)?.setDescription(s.target.value.toString() ?? "");
};
p.styles = [
  R`
			:host {
				display: contents;
			}

			#header {
				display: flex;
				flex: 1 1 auto;
				gap: var(--uui-size-space-2);
			}

			#editors {
				display: flex;
				flex: 1 1 auto;
				flex-direction: column;
				gap: var(--uui-size-space-1);
			}

			#name {
				width: 100%;
			}

			#description {
				width: 100%;
				--uui-input-height: var(--uui-size-8);
				--uui-input-border-color: transparent;
			}

			#description:hover {
				--uui-input-border-color: var(--uui-color-border);
			}

			#icon {
				font-size: var(--uui-size-8);
				height: 60px;
				width: 60px;
			}
		`
];
f([
  m()
], p.prototype, "_name", 2);
f([
  m()
], p.prototype, "_alias", 2);
f([
  m()
], p.prototype, "_description", 2);
f([
  m()
], p.prototype, "_icon", 2);
f([
  m()
], p.prototype, "_isNew", 2);
p = f([
  q("umb-content-type-workspace-editor-header")
], p);
class bt extends k {
  #n;
  constructor(t, r) {
    super(t), this.#n = new r(t);
  }
  /**
   * Returns a promise with the allowed children of a content type
   * @param {string} unique
   * @param parentContentUnique
   * @returns {*}
   * @memberof UmbContentTypeStructureRepositoryBase
   */
  requestAllowedChildrenOf(t, r) {
    return this.#n.getAllowedChildrenOf(t, r);
  }
}
class vt {
  #n;
  #e;
  #s;
  /**
   * Creates an instance of UmbContentTypeStructureServerDataSourceBase.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @param args
   * @memberof UmbItemServerDataSourceBase
   */
  constructor(t, r) {
    this.#n = t, this.#e = r.getAllowedChildrenOf, this.#s = r.mapper;
  }
  /**
   * Returns a promise with the allowed content types for the given unique
   * @param {string} unique
   * @param parentContentUnique
   * @returns {*}
   * @memberof UmbContentTypeStructureServerDataSourceBase
   */
  async getAllowedChildrenOf(t, r) {
    const { data: e, error: n } = await x(
      this.#n,
      this.#e(t, r)
    );
    return e ? { data: { items: e.items.map((o) => this.#s(o)), total: e.total } } : { error: n };
  }
}
const tt = (s, t, r) => r.indexOf(s) === t;
class et extends H {
  constructor(t, r) {
    super(t), this.#e = new Promise((e) => {
      this.#n = e;
    }), this.#o = new Promise((e) => {
      this.#s ? e() : this.#u = e;
    }), this.#a = new Array(), this.#t = new O([], (e) => e.unique), this.contentTypes = this.#t.asObservable(), this.ownerContentType = this.#t.asObservablePart(
      (e) => e.find((n) => n.unique === this.#r)
    ), this.ownerContentTypeAlias = l(this.ownerContentType, (e) => e?.alias), this.ownerContentTypeName = l(this.ownerContentType, (e) => e?.name), this.ownerContentTypeCompositions = l(this.ownerContentType, (e) => e?.compositions), this.#h = this.#t.asObservablePart((e) => e.flatMap((n) => n.containers ?? [])), this.contentTypeProperties = this.#t.asObservablePart((e) => e.flatMap((n) => n.properties ?? [])), this.contentTypeDataTypeUniques = this.#t.asObservablePart((e) => e.flatMap((n) => n.properties?.map((i) => i.dataType.unique) ?? []).filter(tt)), this.contentTypeHasProperties = this.#t.asObservablePart((e) => e.some((n) => n.properties.length > 0)), this.contentTypePropertyAliases = l(
      this.contentTypeProperties,
      (e) => e.map((n) => n.alias)
    ), this.contentTypeUniques = this.#t.asObservablePart((e) => e.map((n) => n.unique)), this.contentTypeAliases = this.#t.asObservablePart((e) => e.map((n) => n.alias)), this.variesByCulture = l(this.ownerContentType, (e) => e?.variesByCulture), this.variesBySegment = l(this.ownerContentType, (e) => e?.variesBySegment), this.#i = new O(
      [],
      (e) => e.id
    ), typeof r == "string" ? this.#y(r) : (this.#s = r, this.#u?.()), this.observe(this.ownerContentTypeCompositions, (e) => {
      this.#d(e);
    }), this.observe(this.#h, (e) => {
      this.#i.setValue(e);
    });
  }
  #n;
  #e;
  #s;
  #u;
  #o;
  async whenLoaded() {
    return await this.#e, !0;
  }
  #r;
  #a;
  #t;
  #h;
  async getContentTypeProperties() {
    return await this.observe(this.contentTypeProperties).asPromise();
  }
  #i;
  containerById(t) {
    return this.#i.asObservablePart((r) => r.find((e) => e.id === t));
  }
  /**
   * loadType will load the ContentType and all inherited and composed ContentTypes.
   * This will give us all the structure for properties and containers.
   * @param {string} unique - The unique of the ContentType to load.
   * @returns {Promise} - Promise resolved
   */
  async loadType(t) {
    if (this.#r === t) {
      await this.#e;
      return;
    }
    if (this.#l(), this.#r = t, !t) return;
    const r = await this.#c(t);
    return this.#n?.(r), r;
  }
  async createScaffold(t) {
    await this.#o, this.#l();
    const r = await this.#s.createScaffold(t);
    return r.data ? (this.#r = r.data.unique, this.#t.appendOne(r.data), this.#n?.(r), r) : {};
  }
  /**
   * Save the owner content type. Notice this is for a Content Type that is already stored on the server.
   * @returns {Promise} - A promise that will be resolved when the content type is saved.
   */
  async save() {
    await this.#o;
    const t = this.getOwnerContentType();
    if (!t || !t.unique) throw new Error("Could not find the Content Type to save");
    const { error: r, data: e } = await this.#s.save(t);
    if (r || !e)
      throw r?.message ?? "Repository did not return data after save.";
    return this.#t.updateOne(t.unique, e), e;
  }
  /**
   * Create the owner content type. Notice this is for a Content Type that is NOT already stored on the server.
   * @param {string | null} parentUnique - The unique of the parent content type
   * @returns {Promise} - a promise that is resolved when the content type has been created.
   */
  async create(t) {
    await this.#o;
    const r = this.getOwnerContentType();
    if (!r || !r.unique)
      throw new Error("Could not find the Content Type to create");
    const { data: e } = await this.#s.create(r, t);
    if (!e) return Promise.reject();
    this.#t.updateOne(r.unique, e), this.#p(e);
  }
  async #d(t) {
    t || (t = []);
    const r = this.getOwnerContentTypeUnique();
    this.#t.getValue().forEach((e) => {
      e.unique !== r && !t.find((n) => n.contentType.unique === e.unique) && (this.#a.find((n) => n.controllerAlias === "observeContentType_" + e.unique)?.destroy(), this.#t.removeOne(e.unique));
    }), t.forEach((e) => {
      this.#f(e.contentType.unique);
    });
  }
  async #f(t) {
    t && (this.#t.getValue().find((r) => r.unique === t) || await this.#c(t));
  }
  async #c(t) {
    if (!t) return {};
    await this.#o;
    const { data: r, asObservable: e } = await this.#s.requestByUnique(t);
    return r ? (await this.#p(r), { data: r, asObservable: e }) : {};
  }
  async #p(t) {
    if (!t.unique) return;
    await this.#o;
    const r = this.observe(
      // Then lets start observation of the content type:
      await this.#s.byUnique(t.unique),
      (e) => {
        e ? this.#t.appendOne(e) : this.#t.removeOne(t.unique);
      },
      "observeContentType_" + t.unique
      // Controller Alias is used to stop observation when no longer needed. [NL]
    );
    this.#a.push(r);
  }
  /** Public methods for consuming structure: */
  ownerContentTypeObservablePart(t) {
    return l(this.ownerContentType, t);
  }
  getOwnerContentType() {
    return this.#t.getValue().find((t) => t.unique === this.#r);
  }
  getOwnerContentTypeUnique() {
    return this.#r;
  }
  getVariesByCulture() {
    return this.getOwnerContentType()?.variesByCulture;
  }
  getVariesBySegment() {
    return this.getOwnerContentType()?.variesBySegment;
  }
  /**
   * Figure out if any of the Content Types has a Property.
   * @returns {boolean} - true if any of the Content Type in this composition has a Property.
   */
  getHasProperties() {
    return this.#t.getValue().some((t) => t.properties.length > 0);
  }
  updateOwnerContentType(t) {
    this.#t.updateOne(this.#r, t);
  }
  getContentTypes() {
    return this.#t.getValue();
  }
  getContentTypeUniques() {
    return this.#t.getValue().map((t) => t.unique);
  }
  getContentTypeAliases() {
    return this.#t.getValue().map((t) => t.alias);
  }
  // TODO: We could move the actions to another class?
  /**
   * Ensure a container exists for a specific Content Type. Otherwise clone it.
   * @param {string} containerId - The container to ensure exists on the given ContentType.
   * @param {string} contentTypeUnique - The content type to ensure the container for.
   * @returns {Promise<UmbPropertyTypeContainerModel | undefined>} - The container found or created for the owner ContentType.
   */
  async ensureContainerOf(t, r) {
    await this.#e;
    const e = this.#t.getValue().find((i) => i.unique === r);
    if (!e)
      throw new Error("Could not find the Content Type to ensure containers for");
    const n = e?.containers?.find((i) => i.id === t);
    return n || this.cloneContainerTo(t, r);
  }
  /**
   * Clone a container to a specific Content Type.
   * @param {string} containerId - The container to clone, assuming it does not already exist on the given Content Type.
   * @param {string} toContentTypeUnique - The content type to clone to.
   * @returns {Promise<UmbPropertyTypeContainerModel | undefined>} - The container cloned or found for the owner ContentType.
   */
  async cloneContainerTo(t, r) {
    await this.#e, r = r ?? this.#r;
    const e = this.#i.getValue().find((o) => o.id === t);
    if (!e) throw new Error("Container to clone was not found");
    const n = {
      ...e,
      id: v.new()
    };
    if (e.parent) {
      const o = await this.ensureContainerOf(e.parent.id, r);
      if (!o)
        throw new Error("Parent container for cloning could not be found or created");
      n.parent = { id: o.id };
    }
    const i = [
      ...this.#t.getValue().find((o) => o.unique === r)?.containers ?? []
    ];
    return i.push(n), this.#t.updateOne(r, { containers: i }), n;
  }
  ensureContainerNames(t, r, e = null) {
    t = t ?? this.#r, this.getOwnerContainers(r, e)?.forEach((n) => {
      if (n.name === "") {
        const i = "Unnamed";
        this.updateContainer(null, n.id, {
          name: this.makeContainerNameUniqueForOwnerContentType(n.id, i, r, e) ?? i
        });
      }
    });
  }
  async createContainer(t, r = null, e = "Group", n) {
    if (await this.#e, t = t ?? this.#r, r) {
      const d = await this.ensureContainerOf(r, t);
      if (!d)
        throw new Error("Parent container for creating a new container could not be found or created");
      r = d.id;
    }
    const i = {
      id: v.new(),
      parent: r ? { id: r } : null,
      name: "",
      type: e,
      sortOrder: n ?? 0
    };
    this.ensureContainerNames(t, e, r);
    const a = [...this.#t.getValue().find((d) => d.unique === t)?.containers ?? []];
    return a.push(i), this.#t.updateOne(t, { containers: a }), i;
  }
  /*async insertContainer(contentTypeUnique: string | null, container: UmbPropertyTypeContainerModel) {
  		await this.#init;
  		contentTypeUnique = contentTypeUnique ?? this.#ownerContentTypeUnique!;
  
  		// If we have a parent, we need to ensure it exists, and then update the parent property with the new container id.
  		if (container.parent) {
  			const parentContainer = await this.ensureContainerOf(container.parent.id, contentTypeUnique);
  			if (!parentContainer) {
  				throw new Error('Container for inserting property could not be found or created');
  			}
  			container.parent.id = parentContainer.id;
  		}
  
  		const frozenContainers =
  			this.#contentTypes.getValue().find((x) => x.unique === contentTypeUnique)?.containers ?? [];
  
  		const containers = appendToFrozenArray(frozenContainers, container, (x) => x.id === container.id);
  
  		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
  		// @ts-ignore
  		// TODO: fix TS partial complaint
  		this.#contentTypes.updateOne(contentTypeUnique, { containers });
  	}*/
  makeEmptyContainerName(t, r, e = null) {
    return this.makeContainerNameUniqueForOwnerContentType(t, "Unnamed", r, e) ?? "Unnamed";
  }
  makeContainerNameUniqueForOwnerContentType(t, r, e, n = null) {
    const i = this.getOwnerContainers(e, n);
    if (!i)
      return null;
    let o = r;
    for (; i.find((a) => a.name === o && a.id !== t); )
      o = L(o);
    return o === r ? null : o;
  }
  async updateContainer(t, r, e) {
    await this.#e, t = t ?? this.#r;
    const n = this.#t.getValue().find((a) => a.unique === t)?.containers ?? [];
    n.find((a) => a.id === r) || console.error(
      "We do not have this container on the requested id, we should clone the container and append the change to it. [NL]"
    );
    const o = T(n, e, (a) => a.id === r);
    this.#t.updateOne(t, { containers: o });
  }
  async removeContainer(t, r = null) {
    await this.#e, t = t ?? this.#r;
    const e = this.#t.getValue().find((h) => h.unique === t);
    if (!e)
      throw new Error("Could not find the Content Type to remove container from");
    const n = e.containers ?? [], i = n.filter((h) => h.id === r || h.parent?.id === r).map((h) => h.id), o = n.filter((h) => h.id !== r && h.parent?.id !== r), d = e.properties.filter(
      (h) => h.container ? !i.some((A) => A === h.container?.id) : !0
    );
    this.#t.updateOne(t, { containers: o, properties: d });
  }
  async insertProperty(t, r) {
    if (await this.#e, t = t ?? this.#r, r.container) {
      this.#t.mute();
      const i = await this.ensureContainerOf(r.container.id, t);
      if (this.#t.unmute(), !i)
        throw new Error("Container for inserting property could not be found or created");
      r = { ...r, container: { id: i.id } };
    }
    r.sortOrder === void 0 && (r.sortOrder = 0);
    const e = this.#t.getValue().find((i) => i.unique === t)?.properties ?? [], n = F(e, r, (i) => i.id === r.id);
    this.#t.updateOne(t, { properties: n });
  }
  async removeProperty(t, r) {
    await this.#e, t = t ?? this.#r;
    const e = this.#t.getValue().find((i) => i.unique === t)?.properties ?? [], n = W(e, (i) => i.id !== r);
    this.#t.updateOne(t, { properties: n });
  }
  async updateProperty(t, r, e) {
    await this.#e, t = t ?? this.#r;
    const n = this.#t.getValue().find((o) => o.unique === t)?.properties ?? [], i = T(n, e, (o) => o.id === r);
    this.#t.updateOne(t, { properties: i });
  }
  // TODO: Refactor: These property methods, should maybe be named without structure in their name.
  async propertyStructureById(t) {
    return await this.#e, this.#t.asObservablePart((r) => {
      for (const e of r) {
        const n = e.properties?.find((i) => i.id === t);
        if (n)
          return n;
      }
    });
  }
  async propertyStructureByAlias(t) {
    return await this.#e, this.#t.asObservablePart((r) => {
      for (const e of r) {
        const n = e.properties?.find((i) => i.alias === t);
        if (n)
          return n;
      }
    });
  }
  async getPropertyStructureById(t) {
    await this.#e;
    for (const r of this.#t.getValue()) {
      const e = r.properties?.find((n) => n.id === t);
      if (e)
        return e;
    }
  }
  async getPropertyStructureByAlias(t) {
    await this.#e;
    for (const r of this.#t.getValue()) {
      const e = r.properties?.find((n) => n.alias === t);
      if (e)
        return e;
    }
  }
  hasPropertyStructuresOf(t) {
    return this.#t.asObservablePart((r) => r.find((e) => e.properties?.find((n) => n.container?.id === t)) !== void 0);
  }
  rootPropertyStructures() {
    return this.propertyStructuresOf(null);
  }
  propertyStructuresOf(t) {
    return this.#t.asObservablePart((r) => {
      const e = [];
      return r.forEach((n) => {
        n.properties?.forEach((i) => {
          i.container?.id === t && e.push(i);
        });
      }), e;
    });
  }
  rootContainers(t) {
    return this.#i.asObservablePart((r) => r.filter((e) => e.parent === null && e.type === t));
  }
  getRootContainers(t) {
    return this.#i.getValue().filter((r) => r.parent === null && r.type === t);
  }
  async hasRootContainers(t) {
    return this.#i.asObservablePart((r) => r.filter((e) => e.parent === null && e.type === t).length > 0);
  }
  ownerContainersOf(t, r) {
    return this.ownerContentTypeObservablePart(
      (e) => e?.containers?.filter(
        (n) => (r ? n.parent?.id === r : n.parent === null) && n.type === t
      ) ?? []
    );
  }
  getOwnerContainers(t, r) {
    return this.getOwnerContentType()?.containers?.filter(
      (e) => (r ? e.parent?.id === r : e.parent === null) && e.type === t
    );
  }
  isOwnerContainer(t) {
    return this.getOwnerContentType()?.containers?.filter((r) => r.id === t);
  }
  containersOfParentId(t, r) {
    return this.#i.asObservablePart((e) => e.filter((n) => n.parent?.id === t && n.type === r));
  }
  // In future this might need to take parentName(parentId lookup) into account as well? otherwise containers that share same name and type will always be merged, but their position might be different and they should not be merged. [NL]
  containersByNameAndType(t, r) {
    return this.#i.asObservablePart((e) => e.filter((n) => n.name === t && n.type === r));
  }
  containersByNameAndTypeAndParent(t, r, e, n) {
    return this.#i.asObservablePart((i) => i.filter(
      (o) => (
        // Match name and type:
        o.name === t && o.type === r && // If we look for a parent name, then we need to match that as well:
        (e !== null ? (
          // And we have a parent on this container, then we need to match the parent name and type as well
          o.parent ? i.some((a) => o.parent.id === a.id && a.name === e && a.type === n) : !1
        ) : (
          // if we do not have a parent then its not a match
          o.parent === null
        ))
      )
      // it parentName === null then we expect the container parent to be null.
    ));
  }
  getContentTypeOfContainer(t) {
    return this.#t.getValue().find((r) => r.containers.some((e) => e.id === t));
  }
  contentTypeOfProperty(t) {
    return this.#t.asObservablePart(
      (r) => r.find((e) => e.properties.some((n) => n.id === t))
    );
  }
  #y(t) {
    if (!t) throw new Error("Content Type structure manager must have a repository alias.");
    new G(
      this,
      X,
      t,
      [this._host],
      (r, e) => {
        this.#s = r ? e.api : void 0, this.#u?.();
      }
    );
  }
  #l() {
    this.#e = new Promise((t) => {
      this.#n = t;
    }), this.#t.setValue([]), this.#a.forEach((t) => t.destroy()), this.#a = [], this.#t.setValue([]), this.#i.setValue([]);
  }
  destroy() {
    this.#t.destroy(), this.#i.destroy(), super.destroy();
  }
}
const C = "umbLoadingContentTypeDetail";
class Ot extends Y {
  constructor(t, r) {
    super(t, r), this.IS_CONTENT_TYPE_WORKSPACE_CONTEXT = !0, this.structure = new et(this, r.detailRepositoryAlias), this.name = this.structure.ownerContentTypeObservablePart((e) => e?.name), this.alias = this.structure.ownerContentTypeObservablePart((e) => e?.alias), this.description = this.structure.ownerContentTypeObservablePart((e) => e?.description), this.icon = this.structure.ownerContentTypeObservablePart((e) => e?.icon), this.allowedAtRoot = this.structure.ownerContentTypeObservablePart((e) => e?.allowedAtRoot), this.variesByCulture = this.structure.ownerContentTypeObservablePart((e) => e?.variesByCulture), this.variesBySegment = this.structure.ownerContentTypeObservablePart((e) => e?.variesBySegment), this.isElement = this.structure.ownerContentTypeObservablePart((e) => e?.isElement), this.allowedContentTypes = this.structure.ownerContentTypeObservablePart((e) => e?.allowedContentTypes), this.compositions = this.structure.ownerContentTypeObservablePart((e) => e?.compositions), this.collection = this.structure.ownerContentTypeObservablePart((e) => e?.collection), this.observe(this.structure.ownerContentType, (e) => this._data.setCurrent(e));
  }
  /**
   * Creates a new scaffold
   * @param { UmbEntityDetailWorkspaceContextCreateArgs<DetailModelType> } args The arguments for creating a new scaffold
   * @returns { Promise<DetailModelType | undefined> } The new scaffold
   */
  async createScaffold(t) {
    this.resetState(), this.loading.addState({ unique: C, message: `Creating ${this.getEntityType()} scaffold` }), this.setParent(t.parent);
    const r = this.structure.createScaffold(t.preset);
    this._getDataPromise = r;
    let { data: e } = await r;
    return e && (e = await this._scaffoldProcessData(e), this.modalContext && (e = { ...e, ...this.modalContext.data.preset }), this.setUnique(e.unique), this.setIsNew(!0), this._data.setPersisted(e)), this.loading.removeState(C), e;
  }
  /**
   * Loads the data for the workspace
   * @param { string } unique The unique identifier of the data to load
   * @returns { Promise<DetailModelType> } The loaded data
   */
  async load(t) {
    if (t === this.getUnique() && this._getDataPromise)
      return await this._getDataPromise;
    this.resetState(), this.setUnique(t), this.loading.addState({ unique: C, message: `Loading ${this.getEntityType()} Details` }), this._getDataPromise = this.structure.loadType(t);
    const r = await this._getDataPromise, e = r.data;
    return e && (this._data.setPersisted(e), this.setIsNew(!1), this.observe(
      r.asObservable(),
      (n) => this.#n(n),
      "umbContentTypeDetailStoreObserver"
    )), this.loading.removeState(C), r;
  }
  #n(t) {
    t || this._data.clear();
  }
  /**
   * Creates the Content Type
   * @param { DetailModelType } currentData The current data
   * @param { UmbEntityModel } parent The parent entity
   * @memberof UmbContentTypeWorkspaceContextBase
   */
  async _create(t, r) {
    try {
      await this.structure.create(r?.unique), this._data.setPersisted(this.structure.getOwnerContentType());
      const e = await this.getContext(g), n = new K({
        entityType: r.entityType,
        unique: r.unique
      });
      e.dispatchEvent(n), this.setIsNew(!1);
    } catch (e) {
      console.error(e);
    }
  }
  /**
   * Updates the content type for the workspace
   * @memberof UmbContentTypeWorkspaceContextBase
   */
  async _update() {
    try {
      await this.structure.save(), this._data.setPersisted(this.structure.getOwnerContentType());
      const t = await this.getContext(g), r = new Q({
        unique: this.getUnique(),
        entityType: this.getEntityType()
      });
      t.dispatchEvent(r);
    } catch (t) {
      console.error(t);
    }
  }
  /**
   * Gets the name of the content type
   * @returns { string | undefined } The name of the content type
   */
  getName() {
    return this.structure.getOwnerContentType()?.name;
  }
  /**
   * Sets the name of the content type
   * @param { string } name The name of the content type
   */
  setName(t) {
    this.structure.updateOwnerContentType({ name: t });
  }
  /**
   * Gets the alias of the content type
   * @returns { string | undefined } The alias of the content type
   */
  getAlias() {
    return this.structure.getOwnerContentType()?.alias;
  }
  /**
   * Sets the alias of the content type
   * @param { string } alias The alias of the content type
   */
  setAlias(t) {
    this.structure.updateOwnerContentType({ alias: t });
  }
  /**
   * Gets the description of the content type
   * @returns { string | undefined } The description of the content type
   */
  getDescription() {
    return this.structure.getOwnerContentType()?.description;
  }
  /**
   * Sets the description of the content type
   * @param { string } description The description of the content type
   */
  setDescription(t) {
    this.structure.updateOwnerContentType({ description: t });
  }
  /**
   * Gets the compositions of the content type
   * @returns { string | undefined } The icon of the content type
   */
  getCompositions() {
    return this.structure.getOwnerContentType()?.compositions;
  }
  /**
   * Sets the compositions of the content type
   * @param { string } compositions The compositions of the content type
   * @returns { void }
   */
  setCompositions(t) {
    this.structure.updateOwnerContentType({ compositions: t });
  }
  /**
   * Gets the icon of the content type
   * @returns { string | undefined } The icon of the content type
   */
  getIcon() {
    return this.structure.getOwnerContentType()?.icon;
  }
  // TODO: manage setting icon color alias?
  setIcon(t) {
    this.structure.updateOwnerContentType({ icon: t });
  }
  getData() {
    return this.structure.getOwnerContentType();
  }
  destroy() {
    this.structure.destroy(), super.destroy();
  }
}
export {
  _t as UMB_COMPOSITION_PICKER_MODAL,
  Pt as UMB_CONTENT_TYPE_DESIGN_EDITOR_CONTEXT,
  B as UMB_CONTENT_TYPE_WORKSPACE_CONTEXT,
  At as UMB_PROPERTY_TYPE_CONTEXT,
  Et as UmbContentTypeContainerStructureHelper,
  St as UmbContentTypeMoveRootGroupsIntoFirstTabHelper,
  Bt as UmbContentTypePropertyStructureHelper,
  et as UmbContentTypeStructureManager,
  bt as UmbContentTypeStructureRepositoryBase,
  vt as UmbContentTypeStructureServerDataSourceBase,
  Ot as UmbContentTypeWorkspaceContextBase,
  p as UmbContentTypeWorkspaceEditorHeaderElement,
  Vt as UmbPropertyTypeBasedPropertyElement
};
//# sourceMappingURL=index.js.map
