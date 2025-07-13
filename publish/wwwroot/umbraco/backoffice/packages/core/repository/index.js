import { UmbControllerBase as u } from "@umbraco-cms/backoffice/class-api";
import { createExtensionApi as l, UmbExtensionApiInitializer as w } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as m } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_NOTIFICATION_CONTEXT as y } from "@umbraco-cms/backoffice/notification";
import { tryExecuteAndNotify as g } from "@umbraco-cms/backoffice/resources";
import { UmbDeprecation as v } from "@umbraco-cms/backoffice/utils";
import { UmbArrayState as c } from "@umbraco-cms/backoffice/observable-api";
import { UMB_ACTION_EVENT_CONTEXT as U } from "@umbraco-cms/backoffice/action";
import { UmbEntityUpdatedEvent as d } from "@umbraco-cms/backoffice/entity-action";
const b = "Umb.ManagementApi";
class E extends u {
  #t = /* @__PURE__ */ new Map();
  async resolve(t, e) {
    if (!t)
      throw new Error("data source identifier is required");
    if (!e)
      throw new Error("data identifier is required");
    const s = this.#e(t, e);
    if (!s)
      return;
    if (this.#t.has(s.alias))
      return this.#t.get(s.alias);
    const i = await l(this, s);
    if (i) {
      if (!i.map)
        throw new Error("Data Mapping does not have a map method.");
      return this.#t.set(s.alias, i), i;
    }
  }
  #e(t, e) {
    const s = this.#s(t, e);
    if (s.length)
      return s.sort((i, r) => (r.weight || 0) - (i.weight || 0))[0];
  }
  #s(t, e) {
    return m.getByTypeAndFilter("dataSourceDataMapping", (i) => i.forDataSource === t && i.forDataModel === e);
  }
}
class q extends u {
  #t = new E(this);
  async map(t) {
    if (!t.forDataSource)
      throw new Error("data source identifier is required");
    if (!t.forDataModel)
      throw new Error("data identifier is required");
    if (!t.data)
      throw new Error("data is required");
    const e = await this.#t.resolve(t.forDataSource, t.forDataModel);
    if (!e && !t.fallback)
      throw new Error("Data mapping not found and no fallback provided.");
    if (!e && t.fallback)
      return t.fallback(t.data);
    if (!e?.map)
      throw new Error("Data mapping does not have a map method.");
    return e.map(t.data);
  }
}
class C extends u {
  #t = new q(this);
  constructor(t) {
    super(t);
  }
  map(t) {
    return this.#t.map({
      ...t,
      forDataSource: b
    });
  }
}
class p extends u {
}
class N extends p {
  #t;
  #e;
  #s;
  #r;
  #a;
  #i;
  constructor(t, e, s) {
    if (super(t), !e) throw new Error("Detail source is missing");
    if (!s) throw new Error("Detail store context alias is missing");
    this.detailDataSource = new e(t), this.#t = Promise.all([
      this.consumeContext(s, (i) => {
        this.#e = i;
      }).asPromise(),
      this.consumeContext(y, (i) => {
        this.#s = i;
      }).asPromise()
    ]);
  }
  /**
   * Creates a scaffold
   * @param {Partial<DetailModelType>} [preset]
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async createScaffold(t) {
    return this.detailDataSource.createScaffold(t);
  }
  /**
   * Requests the detail for the given unique
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async requestByUnique(t) {
    if (!t) throw new Error("Unique is missing");
    await this.#t;
    const { data: e, error: s } = await this.detailDataSource.read(t);
    return e && this.#e.append(e), {
      data: e,
      error: s,
      asObservable: () => this.#e.byUnique(t)
    };
  }
  /**
   * Returns a promise with an observable of the detail for the given unique
   * @param {DetailModelType} model
   * @param {string | null} [parentUnique]
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async create(t, e) {
    if (!t) throw new Error("Data is missing");
    await this.#t;
    const { data: s, error: i } = await this.detailDataSource.create(t, e);
    if (s) {
      this.#e?.append(s), this.#r?.close();
      const r = { data: { message: "Created" } };
      this.#r = this.#s.peek("positive", r);
    }
    return { data: s, error: i };
  }
  /**
   * Saves the given data
   * @param {DetailModelType} model
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async save(t) {
    if (!t) throw new Error("Data is missing");
    if (!t.unique) throw new Error("Unique is missing");
    await this.#t;
    const { data: e, error: s } = await this.detailDataSource.update(t);
    if (e) {
      this.#e.updateItem(t.unique, e), this.#a?.close();
      const i = { data: { message: "Saved" } };
      this.#a = this.#s.peek("positive", i);
    }
    return { data: e, error: s };
  }
  /**
   * Deletes the detail for the given unique
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async delete(t) {
    if (!t) throw new Error("Unique is missing");
    await this.#t;
    const { error: e } = await this.detailDataSource.delete(t);
    if (!e) {
      this.#e.removeItem(t), this.#i?.close();
      const s = { data: { message: "Deleted" } };
      this.#i = this.#s.peek("positive", s);
    }
    return { error: e };
  }
  /**
   * Returns a promise with an observable of the detail for the given unique
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async byUnique(t) {
    if (!t) throw new Error("Unique is missing");
    return await this.#t, this.#e.byUnique(t);
  }
  destroy() {
    this.#e = void 0, this.detailDataSource = void 0, super.destroy();
  }
}
class R extends p {
  #t;
  constructor(t, e, s) {
    super(t), this.#t = new e(t), this._init = this.consumeContext(s, (i) => {
      this._itemStore = i;
    }).asPromise();
  }
  /**
   * Requests the items for the given uniques
   * @param {Array<string>} uniques
   * @returns {*}
   * @memberof UmbItemRepositoryBase
   */
  async requestItems(t) {
    if (!t) throw new Error("Uniques are missing");
    await this._init;
    const { data: e, error: s } = await this.#t.getItems(t), i = s;
    return e && this._itemStore.appendItems(e), { data: e, error: i, asObservable: () => this._itemStore.items(t) };
  }
  /**
   * Returns a promise with an observable of the items for the given uniques
   * @param {Array<string>} uniques
   * @returns {*}
   * @memberof UmbItemRepositoryBase
   */
  async items(t) {
    return await this._init, this._itemStore.items(t);
  }
}
class P {
  #t;
  #e;
  #s;
  /**
   * Creates an instance of UmbItemServerDataSourceBase.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @param args
   * @memberof UmbItemServerDataSourceBase
   */
  constructor(t, e) {
    this.#t = t, this.#e = e.getItems, this.#s = e.mapper;
  }
  /**
   * Fetches the items for the given uniques from the server
   * @param {Array<string>} uniques
   * @returns {*}
   * @memberof UmbItemServerDataSourceBase
   */
  async getItems(t) {
    if (!t) throw new Error("Uniques are missing");
    const { data: e, error: s } = await g(this.#t, this.#e(t));
    return e ? { data: e.map((r) => this.#s(r)) } : { error: s };
  }
}
const D = Symbol();
class V extends u {
  /**
   * Creates an instance of UmbRepositoryItemsManager.
   * @param {UmbControllerHost} host - The host for the controller.
   * @param {string} repositoryAlias - The alias of the repository to use.
   * @param {((entry: ItemType) => string | undefined)} [getUniqueMethod] - DEPRECATED since 15.3. Will be removed in v. 17: A method to get the unique key from the item.
   * @memberof UmbRepositoryItemsManager
   */
  constructor(t, e, s) {
    super(t), this.#a = new c([], (i) => i), this.uniques = this.#a.asObservable(), this.#i = new c([], (i) => this.#t(i)), this.items = this.#i.asObservable(), this.#n = new c([], (i) => i.unique), this.statuses = this.#n.asObservable(), this.#o = (i) => {
      const r = i.getUnique(), a = this.getItems();
      if (a.length === 0) return;
      const n = a.find((o) => this.#t(o) === r);
      n && this.#c(n.unique);
    }, this.#t = s ? (i) => (new v({
      deprecated: "The getUniqueMethod parameter.",
      removeInVersion: "17.0.0",
      solution: "The required unique property on the item will be used instead."
    }).warn(), s(i)) : (i) => i.unique, this.#e = new w(
      this,
      m,
      e,
      [this],
      (i, r) => {
        this.repository = i ? r.api : void 0;
      }
    ).asPromise(), this.observe(
      this.uniques,
      (i) => {
        if (i.length === 0) {
          this.#i.setValue([]);
          return;
        }
        const r = this.#i.getValue();
        i.length === r.length && i.every((a) => r.find((n) => this.#t(n) === a)) ? this.#i.setValue(this.#h(r)) : this.#u();
      },
      null
    ), this.consumeContext(U, (i) => {
      this.#r?.removeEventListener(
        d.TYPE,
        this.#o
      ), this.#r = i, this.#r.addEventListener(
        d.TYPE,
        this.#o
      );
    });
  }
  #t;
  #e;
  #s;
  #r;
  // the init promise is used externally for recognizing when the manager is ready.
  get init() {
    return this.#e;
  }
  #a;
  #i;
  #n;
  getUniques() {
    return this.#a.getValue();
  }
  setUniques(t) {
    this.#a.setValue(t ?? []);
  }
  getItems() {
    return this.#i.getValue();
  }
  itemByUnique(t) {
    return this.#i.asObservablePart((e) => e.find((s) => this.#t(s) === t));
  }
  async getItemByUnique(t) {
    const e = this.observe(this.itemByUnique(t), () => {
    }, null), s = await e.asPromise();
    return e.destroy(), s;
  }
  async #u() {
    if (await this.#e, !this.repository) throw new Error("Repository is not initialized");
    const t = this.getUniques();
    this.#n.setValue(
      t.map((a) => ({
        state: {
          type: "loading"
        },
        unique: a
      }))
    );
    const e = this.repository.requestItems(t);
    this.#s = e;
    const { asObservable: s, data: i, error: r } = await e;
    if (this.#s === e) {
      if (r) {
        this.#n.append(
          t.map((a) => ({
            state: {
              type: "error",
              error: "#general_error"
            },
            unique: a
          }))
        );
        return;
      }
      if (i) {
        const a = t.filter(
          (o) => !i.find((f) => this.#t(f) === o)
        ), n = t.filter((o) => !a.includes(o));
        this.#i.remove(a), this.#n.append([
          ...a.map(
            (o) => ({
              state: {
                type: "error",
                error: "#general_notFound"
              },
              unique: o
            })
          ),
          ...n.map(
            (o) => ({
              state: {
                type: "success"
              },
              unique: o
            })
          )
        ]);
      }
      s && this.observe(
        s(),
        (a) => {
          this.#i.setValue(this.#h(a));
        },
        D
      );
    }
  }
  async #c(t) {
    if (await this.#e, !this.repository) throw new Error("Repository is not initialized");
    const { data: e, error: s } = await this.repository.requestItems([t]);
    if (s && this.#n.appendOne({
      state: {
        type: "error",
        error: "#general_notFound"
      },
      unique: t
    }), e) {
      const i = this.getItems(), r = i.find((a) => this.#t(a) === t);
      if (r) {
        const a = i.indexOf(r), n = [...i];
        n[a] = e[0], this.#i.setValue(this.#h(n));
      }
    }
  }
  #h(t) {
    const e = this.getUniques();
    return [...t].sort((s, i) => {
      const r = e.indexOf(this.#t(s) ?? ""), a = e.indexOf(this.#t(i) ?? "");
      return r - a;
    });
  }
  #o;
  destroy() {
    this.#r?.removeEventListener(
      d.TYPE,
      this.#o
    ), super.destroy();
  }
}
export {
  b as UMB_MANAGEMENT_API_DATA_SOURCE_ALIAS,
  q as UmbDataSourceDataMapper,
  E as UmbDataSourceDataMappingResolver,
  N as UmbDetailRepositoryBase,
  R as UmbItemRepositoryBase,
  P as UmbItemServerDataSourceBase,
  C as UmbManagementApiDataMapper,
  p as UmbRepositoryBase,
  V as UmbRepositoryItemsManager
};
//# sourceMappingURL=index.js.map
