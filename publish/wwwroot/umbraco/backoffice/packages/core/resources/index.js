import "../auth-flow-CWAq4eQH.js";
import { U as h } from "../auth.context.token-CFi72pnR.js";
import { CancelablePromise as y, ApiError as l, CancelError as b, OpenAPI as d } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbControllerBase as p } from "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/external/rxjs";
import { U as x } from "../deprecation-SeDYTswO.js";
import { e as P, u as H } from "../extractUmbColorVariable.function-C_Z99zyW.js";
function E(n) {
  return n.name === "ApiError";
}
function f(n) {
  return n.name === "CancelError";
}
function w(n) {
  return n?.cancel !== void 0;
}
class u extends p {
  #e;
  constructor(e, o, t) {
    super(e, t), this.#e = o;
  }
  hostDisconnected() {
    super.hostDisconnected(), this.cancel();
  }
  /**
   * Base execute function with a try/catch block and return a tuple with the result and the error.
   * @param promise
   */
  static async tryExecute(e) {
    try {
      return { data: await e };
    } catch (o) {
      if (E(o) || f(o))
        return { error: o };
      throw console.error("Unknown error", o), new Error("Unknown error");
    }
  }
  /**
   * Wrap the {tryExecute} function in a try/catch block and return the result.
   * If the executor function throws an error, then show the details in a notification.
   * @param _options
   * @param options
   */
  async tryExecuteAndNotify(e) {
    const { data: o, error: t } = await u.tryExecute(this.#e);
    if (e && new x({
      deprecated: "tryExecuteAndNotify `options` argument is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the method without arguments."
    }).warn(), t) {
      if (f(t))
        return { error: t };
      {
        console.groupCollapsed("ApiError caught in UmbResourceController"), console.error("Request failed", t.request), console.error("Request body", t.body), console.error("Error", t), console.groupEnd();
        let s = null;
        if (typeof t.body < "u" && t.body)
          try {
            t.body = s = typeof t.body == "string" ? JSON.parse(t.body) : t.body;
          } catch (i) {
            console.error("Error parsing error body (expected JSON)", i);
          }
        let c = !1;
        switch (s?.operationStatus && typeof s.operationStatus == "string" && s.operationStatus.endsWith("ByNotification") && (c = !0), t.status ?? 0) {
          case 401: {
            (await this.getContext(h)).timeOut();
            break;
          }
          case 500:
            if (!c) {
              let i = s?.title ?? t.name ?? "Server Error", r = "A fatal server error occurred. If this continues, please reach out to your administrator.";
              (s?.detail?.includes("ObjectCacheAppCache") || s?.detail?.includes("Umbraco.Cms.Infrastructure.Scoping.Scope.DisposeLastScope()")) && (i = "Please restart the server", r = "The Umbraco object cache is corrupt, but your action may still have been executed. Please restart the server to reset the cache. This is a work in progress."), (await import("@umbraco-cms/backoffice/notification")).umbPeekError(this, {
                headline: i,
                message: r,
                details: s?.errors ?? s?.detail
              });
            }
            break;
          default:
            if (!c) {
              const i = s?.title ?? t.name ?? "Server Error";
              (await import("@umbraco-cms/backoffice/notification")).umbPeekError(this, {
                message: i,
                details: s?.errors ?? s?.detail
              });
            }
        }
      }
    }
    return { data: o, error: t };
  }
  /**
   * Make an XHR request.
   * @param host The controller host for this controller to be appended to.
   * @param options The options for the XHR request.
   */
  static xhrRequest(e) {
    const o = e.baseUrl || "/umbraco", t = new y(async (s, c, i) => {
      const r = new XMLHttpRequest();
      if (r.open(e.method, `${o}${e.url}`, !0), e.token) {
        const a = typeof e.token == "function" ? await e.token() : e.token;
        a && r.setRequestHeader("Authorization", `Bearer ${a}`);
      }
      if (e.body instanceof FormData || r.setRequestHeader("Content-Type", "application/json"), e.headers)
        for (const [a, m] of Object.entries(e.headers))
          r.setRequestHeader(a, m);
      r.upload.onprogress = (a) => {
        e.onProgress && e.onProgress(a);
      }, r.onload = () => {
        try {
          if (r.status >= 200 && r.status < 300)
            if (e.responseHeader) {
              const a = r.getResponseHeader(e.responseHeader);
              s(a);
            } else
              s(JSON.parse(r.responseText));
          else {
            const a = new l(
              {
                method: e.method,
                url: `${o}${e.url}`
              },
              {
                body: r.responseText,
                ok: !1,
                status: r.status,
                statusText: r.statusText,
                url: r.responseURL
              },
              r.statusText
            );
            c(a);
          }
        } catch {
          c(new Error(`Failed to make request: ${r.statusText}`));
        }
      }, r.onerror = () => {
        const a = new l(
          {
            method: e.method,
            url: `${o}${e.url}`
          },
          {
            body: r.responseText,
            ok: !1,
            status: r.status,
            statusText: r.statusText,
            url: r.responseURL
          },
          r.statusText
        );
        c(a);
      }, i.isCancelled || (e.body instanceof FormData ? r.send(e.body) : r.send(JSON.stringify(e.body))), i(() => {
        r.abort(), c(new b("Request was cancelled."));
      });
    });
    return e.abortSignal && e.abortSignal.addEventListener("abort", () => {
      t.cancel();
    }), t;
  }
  /**
   * Cancel all resources that are currently being executed by this controller if they are cancelable.
   *
   * This works by checking if the promise is a CancelablePromise and if so, it will call the cancel method.
   *
   * This is useful when the controller is being disconnected from the DOM.
   * @see CancelablePromise
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortController
   */
  cancel() {
    w(this.#e) && this.#e.cancel();
  }
  destroy() {
    super.destroy(), this.cancel();
  }
}
function R(n) {
  return u.tryExecute(n);
}
function q(n, e, o) {
  return new u(n, e).tryExecuteAndNotify(o);
}
function N(n) {
  return u.xhrRequest({
    ...n,
    baseUrl: d.BASE,
    token: d.TOKEN
  });
}
export {
  u as UmbResourceController,
  P as extractUmbColorVariable,
  E as isApiError,
  f as isCancelError,
  w as isCancelablePromise,
  R as tryExecute,
  q as tryExecuteAndNotify,
  N as tryXhrRequest,
  H as umbracoColors
};
//# sourceMappingURL=index.js.map
