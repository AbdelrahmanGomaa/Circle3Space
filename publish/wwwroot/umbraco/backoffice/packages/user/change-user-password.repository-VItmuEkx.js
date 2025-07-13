import { U as a } from "./user-repository-base-B115G9Ys.js";
import { UserService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as c } from "@umbraco-cms/backoffice/resources";
class h {
  #s;
  /**
   * Creates an instance of UmbChangeUserPasswordServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbChangeUserPasswordServerDataSource
   */
  constructor(s) {
    this.#s = s;
  }
  /**
   * Change the password of a user
   * @param {string} id
   * @param {string} newPassword
   * @returns {*}
   * @memberof UmbChangeUserPasswordServerDataSource
   */
  async changePassword(s, r) {
    if (!s) throw new Error("User Id is missing");
    return c(
      this.#s,
      n.postUserByIdChangePassword({
        id: s,
        requestBody: {
          newPassword: r
        }
      })
    );
  }
}
class g extends a {
  #s;
  constructor(s) {
    super(s), this.#s = new h(s);
  }
  async changePassword(s, r) {
    if (!s) throw new Error("User id is missing");
    if (!r) throw new Error("New password is missing");
    await this.init;
    const { data: t, error: e } = await this.#s.changePassword(s, r);
    if (!e) {
      const i = { data: { message: "Password changed" } };
      this.notificationContext?.peek("positive", i);
    }
    return { data: t, error: e };
  }
}
export {
  g as UmbChangeUserPasswordRepository,
  g as default
};
//# sourceMappingURL=change-user-password.repository-VItmuEkx.js.map
