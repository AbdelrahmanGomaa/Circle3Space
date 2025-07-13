import { v4 as a, validate as r } from "@umbraco-cms/backoffice/external/uuid";
class s {
  static new() {
    return a();
  }
  static validate(t) {
    return r(t);
  }
}
export {
  s as UmbId
};
//# sourceMappingURL=index.js.map
