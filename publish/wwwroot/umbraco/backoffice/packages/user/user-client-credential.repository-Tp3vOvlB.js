import { UserService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as i } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as a } from "@umbraco-cms/backoffice/repository";
class c {
  #e;
  constructor(e) {
    this.#e = e;
  }
  /**
   * Creates a new client credentials for a user
   * @param {UmbCreateUserClientCredentialRequestArgs} args - The user and client to create the credentials for
   * @returns {*}
   * @memberof UmbUserClientCredentialServerDataSource
   */
  async create(e) {
    const { error: t } = await i(
      this.#e,
      r.postUserByIdClientCredentials({
        id: e.user.unique,
        requestBody: {
          clientId: e.client.unique,
          clientSecret: e.client.secret
        }
      })
    );
    return t ? { error: t } : { data: { unique: e.client.unique } };
  }
  /**
   * Reads the client credentials for a user
   * @param {UmbUserClientCredentialRequestArgs} args - The user to read the credentials for
   * @returns {*}
   * @memberof UmbUserClientCredentialServerDataSource
   */
  async read(e) {
    const { data: t, error: s } = await i(
      this.#e,
      r.getUserByIdClientCredentials({
        id: e.user.unique
      })
    );
    return t ? { data: t.map((u) => ({
      unique: u
    })) } : { error: s };
  }
  /**
   * Deletes the client credentials for a user
   * @param {UmbDeleteUserClientCredentialRequestArgs} args - The user and client unique to delete the credentials for
   * @returns {*}
   * @memberof UmbUserClientCredentialServerDataSource
   */
  delete(e) {
    return i(
      this.#e,
      r.deleteUserByIdClientCredentialsByClientId({
        id: e.user.unique,
        clientId: e.client.unique
      })
    );
  }
}
class C extends a {
  #e;
  /**
   * Creates an instance of UmbUserClientCredentialRepository.
   * @param {UmbControllerHost} host - The controller host
   * @memberof UmbUserClientCredentialRepository
   */
  constructor(e) {
    super(e), this.#e = new c(e);
  }
  /**
   * Creates a new client credentials for a user
   * @param {UmbCreateUserClientCredentialRequestArgs} args - The user and client to create the credentials for
   * @returns {*}
   * @memberof UmbUserClientCredentialRepository
   */
  async requestCreate(e) {
    return this.#e.create(e);
  }
  /**
   * Reads the client credentials for a user
   * @param {UmbUserClientCredentialRequestArgs} args - The user to read the credentials for
   * @returns {*}
   * @memberof UmbUserClientCredentialRepository
   */
  async requestClientCredentials(e) {
    return this.#e.read(e);
  }
  /**
   * Deletes the client credentials for a user
   * @param {UmbDeleteUserClientCredentialRequestArgs} args - The user and client unique to delete the credentials for
   * @returns {*}
   * @memberof UmbUserClientCredentialRepository
   */
  async requestDelete(e) {
    return this.#e.delete(e);
  }
}
export {
  C as UmbUserClientCredentialRepository,
  C as api
};
//# sourceMappingURL=user-client-credential.repository-Tp3vOvlB.js.map
