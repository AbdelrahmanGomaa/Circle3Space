import { u as m, v as D, j as n, l as i, h as B, i as r, n as C, k as c, m as P, p as b, o as p, r as N, q as g, g as d, s as Y, t as f, e as l, d as u, c as h, b as x, U as y, f as W, w as z, a as K, x as X, x as H, b as V } from "../input-upload-field.element-B7PCDmnx.js";
import { f as F, m as w, U as k, a as j, o as q, p as G, b as $, g as J, l as Q, h as Z, k as __, i as E_, j as I_, n as A_, c as a_, t as M_, r as s_, s as t_, u as e_, v as T_, q as R_, w as o_, x as O_, d as U_, e as S_, y as L_ } from "../dropzone.element-B5oraMUj.js";
import { c as D_, U as n_, d as i_, b as B_, a as r_, e as C_ } from "../media-item.store.context-token-9YLCPlu1.js";
import { UmbMediaReferenceRepository as P_ } from "../media-reference.repository-D4WLAek5.js";
import { U as p_, a as N_ } from "../media-url.repository-DUerHiJb.js";
import { getProcessedImageUrl as R } from "@umbraco-cms/backoffice/utils";
import { U as d_ } from "../media-audit-log.repository-aXbdezOC.js";
export * from "@umbraco-cms/backoffice/dropzone";
async function e(_, A, a) {
  const M = _.dom.getSize(A), s = _.options.get("maxImageSize");
  if (s && s > 0) {
    const E = o(s, M.w, M.h);
    if (_.dom.setAttribs(A, { width: Math.round(E.width), height: Math.round(E.height) }), a) {
      const I = await R(a, {
        width: E.width,
        height: E.height
      });
      _.dom.setAttrib(A, "data-mce-src", I);
    }
    _.execCommand("mceAutoResize", !1);
  }
}
function o(_, A, a) {
  const M = { width: A, height: a }, s = _, E = _;
  let I = 0;
  return A > s && (I = s / A, M.width = s, M.height = a * I, a = a * I, A = A * I), a > E && (I = E / a, M.height = E, M.width = A * I, A = A * I), M;
}
async function U(_, A) {
  (A ?? _.getContent()).search(/src=["']blob:.*?["']/gi) !== -1 && ((await _.uploadImages()).forEach((E) => {
    if (E.status === !1)
      return;
    const I = E.element, t = I.getAttribute("src"), T = sessionStorage.getItem(`tinymce__${t}`);
    _.dom.setAttrib(I, "data-tmpimg", T), e(_, I);
  }), _.dom.select('img[src^="blob:"]:not([data-tmpimg])').forEach((E) => {
    const I = _.dom.getAttrib(E, "src"), t = sessionStorage.getItem(`tinymce__${I}`);
    t && (e(_, E), _.dom.setAttrib(E, "data-tmpimg", t));
  }));
}
export {
  F as UMB_BULK_MOVE_MEDIA_REPOSITORY_ALIAS,
  w as UMB_BULK_TRASH_MEDIA_REPOSITORY_ALIAS,
  m as UMB_CREATE_MEDIA_WORKSPACE_PATH_PATTERN,
  D as UMB_EDIT_MEDIA_WORKSPACE_PATH_PATTERN,
  n as UMB_IMAGE_CROPPER_EDITOR_MODAL,
  i as UMB_MEDIA_CAPTION_ALT_TEXT_MODAL,
  k as UMB_MEDIA_COLLECTION_ALIAS,
  B as UMB_MEDIA_COLLECTION_CONTEXT,
  j as UMB_MEDIA_COLLECTION_REPOSITORY_ALIAS,
  r as UMB_MEDIA_CREATE_OPTIONS_MODAL,
  q as UMB_MEDIA_DETAIL_REPOSITORY_ALIAS,
  G as UMB_MEDIA_DETAIL_STORE_ALIAS,
  D_ as UMB_MEDIA_DETAIL_STORE_CONTEXT,
  n_ as UMB_MEDIA_ENTITY_TYPE,
  $ as UMB_MEDIA_GRID_COLLECTION_VIEW_ALIAS,
  C as UMB_MEDIA_ITEM_REPOSITORY_ALIAS,
  i_ as UMB_MEDIA_ITEM_STORE_CONTEXT,
  J as UMB_MEDIA_MENU_ALIAS,
  c as UMB_MEDIA_PICKER_MODAL,
  B_ as UMB_MEDIA_PLACEHOLDER_ENTITY_TYPE,
  Q as UMB_MEDIA_RECYCLE_BIN_REPOSITORY_ALIAS,
  Z as UMB_MEDIA_RECYCLE_BIN_ROOT_ENTITY_TYPE,
  __ as UMB_MEDIA_RECYCLE_BIN_TREE_ALIAS,
  E_ as UMB_MEDIA_RECYCLE_BIN_TREE_REPOSITORY_ALIAS,
  I_ as UMB_MEDIA_RECYCLE_BIN_TREE_STORE_ALIAS,
  P as UMB_MEDIA_RECYCLE_BIN_TREE_STORE_CONTEXT,
  A_ as UMB_MEDIA_REFERENCE_REPOSITORY_ALIAS,
  r_ as UMB_MEDIA_ROOT_ENTITY_TYPE,
  b as UMB_MEDIA_SEARCH_PROVIDER_ALIAS,
  p as UMB_MEDIA_STORE_ALIAS,
  a_ as UMB_MEDIA_TABLE_COLLECTION_VIEW_ALIAS,
  M_ as UMB_MEDIA_TREE_ALIAS,
  N as UMB_MEDIA_TREE_PICKER_MODAL,
  s_ as UMB_MEDIA_TREE_REPOSITORY_ALIAS,
  t_ as UMB_MEDIA_TREE_STORE_ALIAS,
  g as UMB_MEDIA_TREE_STORE_CONTEXT,
  e_ as UMB_MEDIA_URL_REPOSITORY_ALIAS,
  T_ as UMB_MEDIA_URL_STORE_ALIAS,
  p_ as UMB_MEDIA_URL_STORE_CONTEXT,
  R_ as UMB_MEDIA_VALIDATION_REPOSITORY_ALIAS,
  d as UMB_MEDIA_VARIANT_CONTEXT,
  o_ as UMB_MEDIA_WORKSPACE_ALIAS,
  Y as UMB_MEDIA_WORKSPACE_CONTEXT,
  f as UMB_MEDIA_WORKSPACE_PATH,
  O_ as UMB_MEMBER_DETAIL_MODEL_VARIANT_SCAFFOLD,
  U_ as UMB_MOVE_MEDIA_REPOSITORY_ALIAS,
  S_ as UMB_SORT_CHILDREN_OF_MEDIA_REPOSITORY_ALIAS,
  L_ as UmbDropzoneMediaElement,
  l as UmbFocalPointChangeEvent,
  u as UmbImageCropChangeEvent,
  h as UmbInputImageCropperElement,
  x as UmbInputMediaElement,
  y as UmbInputRichMediaElement,
  W as UmbInputUploadFieldElement,
  d_ as UmbMediaAuditLogRepository,
  C_ as UmbMediaDetailRepository,
  z as UmbMediaItemRepository,
  K as UmbMediaPickerInputContext,
  P_ as UmbMediaReferenceRepository,
  X as UmbMediaSearchProvider,
  N_ as UmbMediaUrlRepository,
  H as api,
  V as element,
  o as scaleToMaxSize,
  e as sizeImageInEditor,
  U as uploadBlobImages
};
//# sourceMappingURL=index.js.map
