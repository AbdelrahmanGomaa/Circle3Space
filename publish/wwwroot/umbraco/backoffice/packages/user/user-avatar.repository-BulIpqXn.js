import { U as c } from "./user-repository-base-B115G9Ys.js";
import { UserService as o } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as s } from "@umbraco-cms/backoffice/resources";
import { UmbId as p } from "@umbraco-cms/backoffice/id";
import { UmbTemporaryFileRepository as m } from "@umbraco-cms/backoffice/temporary-file";
class l {
  #t;
  constructor(t) {
    this.#t = t;
  }
  /**
   * Creates an avatar for the user with the given id based on a temporary uploaded file
   * @param {string} unique
   * @param {string} fileUnique
   * @returns {*}  {Promise<UmbDataSourceErrorResponse>}
   * @memberof UmbUserServerDataSource
   */
  createAvatar(t, r) {
    const e = {
      file: {
        id: r
      }
    };
    return s(this.#t, o.postUserAvatarById({ id: t, requestBody: e }));
  }
  /**
   * Deletes the avatar for the user with the given id
   * @param {string} unique
   * @returns {*}  {Promise<UmbDataSourceErrorResponse>}
   * @memberof UmbUserServerDataSource
   */
  deleteAvatar(t) {
    return s(this.#t, o.deleteUserAvatarById({ id: t }));
  }
}
class U extends c {
  #t;
  #r;
  constructor(t) {
    super(t), this.#r = new l(t), this.#t = new m(t);
  }
  /**
   * Uploads an avatar for the user with the given id
   * @param {string} userUnique
   * @param {File} file
   * @returns {Promise<UmbDataSourceErrorResponse>}
   * @memberof UmbUserRepository
   */
  async uploadAvatar(t, r) {
    if (!t) throw new Error("Id is missing");
    await this.init;
    const e = p.new();
    await this.#t.upload(e, r);
    const { error: i } = await this.#r.createAvatar(t, e);
    if (!i) {
      const a = URL.createObjectURL(r);
      this.detailStore?.updateItem(t, { avatarUrls: [a, a, a, a, a] });
      const d = { data: { message: "Avatar uploaded" } };
      this.notificationContext?.peek("positive", d);
    }
    return { error: i };
  }
  /**
   * Removes the avatar for the user with the given id
   * @param {string} userUnique
   * @returns {Promise<UmbDataSourceErrorResponse>}
   * @memberof UmbUserRepository
   */
  async deleteAvatar(t) {
    if (!t) throw new Error("Id is missing");
    await this.init;
    const { error: r } = await this.#r.deleteAvatar(t);
    if (!r) {
      this.detailStore?.updateItem(t, { avatarUrls: [] });
      const e = { data: { message: "Avatar deleted" } };
      this.notificationContext?.peek("positive", e);
    }
    return { error: r };
  }
  destroy() {
    super.destroy();
  }
}
export {
  U as UmbUserAvatarRepository,
  U as default
};
//# sourceMappingURL=user-avatar.repository-BulIpqXn.js.map
