import { G as B, b as m, p as i, t as p, u as D, l as P, E as n, a as b, w as W, B as x, J as f, K as Y, k as y, N as l, O as c, V as G, R as K, v as F, x as d, y as w, z as V, A as u, C as H, F as X, s as k, o as q, h as v, n as g, H as h, I as j, j as z, L as J, M as Q, f as Z, d as $, D as __, P as U_, Q as E_, g as R_, c as A_, m as S_, e as O_, T as I_, S as s_, i as T_, r as L_, U as r_, q as o_, q as a_ } from "../constants-BstfLIKC.js";
import { UmbUserCollectionRepository as N_ } from "../user-collection.repository-D5Fekbe1.js";
import { U as M_ } from "../input-user-permission-verb.element-Cso_1zIo.js";
import { UmbInviteUserRepository as B_ } from "../invite-user.repository-BkXyjHDQ.js";
import { U as i_, a as p_ } from "../resend-invite-to-user-modal.token-SCmTZoXA.js";
import { a as P_, b as n_, U as b_ } from "../paths-z-la_6QN.js";
import { UmbUserAvatarRepository as x_ } from "../user-avatar.repository-BulIpqXn.js";
import { UmbChangeUserPasswordRepository as Y_ } from "../change-user-password.repository-VItmuEkx.js";
import { UmbUserDetailRepository as A } from "../user-detail.repository-Dsq6EPIC.js";
import { UmbDisableUserRepository as l_ } from "../disable-user.repository-D2JWaR_m.js";
import { UmbEnableUserRepository as G_ } from "../enable-user.repository-C3ql2PTH.js";
import { UmbUserItemRepository as F_ } from "../user-item.repository-D8oXtAF7.js";
import { UmbUnlockUserRepository as w_ } from "../unlock-user.repository-164kPFdb.js";
import { U as u_ } from "../user.repository-DqW-ltjf.js";
import { U as X_ } from "../new-user-password.repository-C1fowDwb.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/temporary-file";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/external/rxjs";
const e = "Umb.Repository.User.NewPassword", N = async (_, U) => {
  const E = new A(_), { data: R } = await E.requestByUnique(U);
  return R?.isAdmin ?? !1;
}, C = "Umb.Condition.User.AllowEnableAction";
export {
  B as UMB_CHANGE_USER_PASSWORD_REPOSITORY_ALIAS,
  m as UMB_COLLECTION_VIEW_USER_GRID,
  i as UMB_COLLECTION_VIEW_USER_TABLE,
  p as UMB_CREATE_USER_CLIENT_CREDENTIAL_MODAL,
  D as UMB_CREATE_USER_CLIENT_CREDENTIAL_MODAL_ALIAS,
  P as UMB_CREATE_USER_MODAL,
  n as UMB_CREATE_USER_MODAL_ALIAS,
  b as UMB_CREATE_USER_SUCCESS_MODAL,
  W as UMB_CURRENT_USER_ALLOW_CHANGE_PASSWORD_CONDITION_ALIAS,
  x as UMB_CURRENT_USER_ALLOW_MFA_CONDITION_ALIAS,
  f as UMB_CURRENT_USER_CONFIG_REPOSITORY_ALIAS,
  Y as UMB_CURRENT_USER_CONFIG_STORE_ALIAS,
  y as UMB_CURRENT_USER_CONFIG_STORE_CONTEXT,
  l as UMB_DISABLE_USER_REPOSITORY_ALIAS,
  P_ as UMB_EDIT_USER_WORKSPACE_PATH_PATTERN,
  c as UMB_ENABLE_USER_REPOSITORY_ALIAS,
  i_ as UMB_INVITE_USER_MODAL,
  G as UMB_INVITE_USER_REPOSITORY_ALIAS,
  e as UMB_NEW_USER_PASSWORD_REPOSITORY_ALIAS,
  p_ as UMB_RESEND_INVITE_TO_USER_MODAL,
  K as UMB_UNLOCK_USER_REPOSITORY_ALIAS,
  F as UMB_USER_ALLOW_CHANGE_PASSWORD_CONDITION_ALIAS,
  d as UMB_USER_ALLOW_DELETE_CONDITION_ALIAS,
  w as UMB_USER_ALLOW_DISABLE_CONDITION_ALIAS,
  C as UMB_USER_ALLOW_ENABLE_CONDITION_ALIAS,
  V as UMB_USER_ALLOW_EXTERNAL_LOGIN_CONDITION_ALIAS,
  u as UMB_USER_ALLOW_MFA_CONDITION_ALIAS,
  H as UMB_USER_ALLOW_UNLOCK_CONDITION_ALIAS,
  X as UMB_USER_AVATAR_REPOSITORY_ALIAS,
  k as UMB_USER_CLIENT_CREDENTIAL_REPOSITORY_ALIAS,
  q as UMB_USER_COLLECTION_ALIAS,
  v as UMB_USER_COLLECTION_CONTEXT,
  g as UMB_USER_COLLECTION_REPOSITORY_ALIAS,
  h as UMB_USER_CONFIG_REPOSITORY_ALIAS,
  j as UMB_USER_CONFIG_STORE_ALIAS,
  z as UMB_USER_CONFIG_STORE_CONTEXT,
  J as UMB_USER_DETAIL_REPOSITORY_ALIAS,
  Q as UMB_USER_DETAIL_STORE_ALIAS,
  Z as UMB_USER_DETAIL_STORE_CONTEXT,
  $ as UMB_USER_ENTITY_TYPE,
  __ as UMB_USER_IS_DEFAULT_KIND_CONDITION_ALIAS,
  U_ as UMB_USER_ITEM_REPOSITORY_ALIAS,
  E_ as UMB_USER_ITEM_STORE_ALIAS,
  R_ as UMB_USER_ITEM_STORE_CONTEXT,
  A_ as UMB_USER_MFA_MODAL,
  S_ as UMB_USER_PICKER_MODAL,
  O_ as UMB_USER_ROOT_ENTITY_TYPE,
  I_ as UMB_USER_ROOT_WORKSPACE_ALIAS,
  n_ as UMB_USER_ROOT_WORKSPACE_PATH,
  s_ as UMB_USER_WORKSPACE_ALIAS,
  T_ as UMB_USER_WORKSPACE_CONTEXT,
  b_ as UMB_USER_WORKSPACE_PATH,
  Y_ as UmbChangeUserPasswordRepository,
  l_ as UmbDisableUserRepository,
  G_ as UmbEnableUserRepository,
  B_ as UmbInviteUserRepository,
  X_ as UmbNewUserPasswordRepository,
  w_ as UmbUnlockUserRepository,
  x_ as UmbUserAvatarRepository,
  N_ as UmbUserCollectionRepository,
  A as UmbUserDetailRepository,
  L_ as UmbUserInputElement,
  F_ as UmbUserItemRepository,
  r_ as UmbUserKind,
  M_ as UmbUserPermissionVerbElement,
  o_ as UmbUserPickerContext,
  a_ as UmbUserPickerInputContext,
  u_ as UmbUserRepository,
  N as isUserAdmin
};
//# sourceMappingURL=index.js.map
