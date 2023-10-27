// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dpgAG":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6rimH":[function(require,module,exports) {
let userName;
let userWeddingDate;
let userPhone;
let userLocation;
//let otherService;
let isEnabled = true;
const resend_otp_btn = document.querySelector("#resend_btn");
const country_code = document.querySelector("#country_code");
country_code.value = `+91`;
country_code.setAttribute("readonly", " ");
const gmv_form = document.querySelector("#gmv_v3");
const user_name = document.querySelector("#name_field");
const user_mob = document.querySelector("#mob_num");
const wedding_date = document.querySelector("#wedding_date");
const user_location = document.querySelector("#location");
const name_err = document.querySelector("#name_err");
const phn_err = document.querySelector("#phn_err");
const loc_err = document.querySelector("#loc_err");
const date_err = document.querySelector("#date_err");
const submit_btn = document.querySelector("#form_submit_btn");
const otp_modal = document.querySelector(".otp_modal_wrapper");
const modal_close_btn = document.querySelector(".close_btn");
const pop_up_form_close_btn = document.querySelector(".pop-up-form_close");
const otp_field = document.querySelector("#otp_field");
const otp_err = document.querySelector("#otp_err");
const otp_sub_btn = document.querySelector("#otp_submit");
const otp_form_block = document.querySelector(".otp_form_block");
const validating_otp_block = document.querySelector(".validating_otp_block");
const succ_block = document.querySelector(".success_block");
const final_name = document.querySelector("#final_name");
const final_date = document.querySelector("#final_date");
const final_num = document.querySelector("#final_num");
const final_location = document.querySelector("#final_location");
//const other_service_final = document.querySelector("#final_other_service");
const final_submit_btn = document.querySelector("#final_form_submit");
const floating_btn = document.querySelector(".floating_btn");
floating_btn.addEventListener("click", ()=>{
    submit_btn.click();
});
//wedding_date.type = "date";
// const today = new Date();
// const year = today.getFullYear();
// const month = String(today.getMonth() + 1).padStart(2, "0");
// const day = String(today.getDate()).padStart(2, "0");
// const minDate = `${year}-${month}-${day}`;
// wedding_date.min = minDate;
user_name.addEventListener("input", ()=>{
    name_err.style.display = "none";
});
user_mob.addEventListener("input", ()=>{
    phn_err.style.display = "none";
});
user_location.addEventListener("input", ()=>{
    loc_err.style.display = "none";
});
// wedding_date.addEventListener("input", () => {
//   date_err.style.display = "none";
// });
// const other_services = [];
// let checked_items;
// let unique_checked_items;
// document.querySelector("#service_wrapper").addEventListener("click", (e) => {
//   if (e.target.type == "checkbox") {
//     if (e.target.checked) {
//       other_services.push(e.target);
//     }
//   }
//   checked_items = other_services.filter(function (el) {
//     return el.checked == true;
//   });
//   unique_checked_items = [...new Set(checked_items)];
// });
submit_btn.addEventListener("click", (e)=>{
    const alphabets = /^[a-zA-Z]+$/;
    if (!user_name.value) {
        e.preventDefault();
        name_err.style.display = "flex";
    } else if (!user_mob.value) {
        e.preventDefault();
        phn_err.style.display = "flex";
    } else if (user_mob.value.match(alphabets) || user_mob.value.length > 10 || user_mob.value.length < 10 || user_mob.value.startsWith("1") || user_mob.value.startsWith("2") || user_mob.value.startsWith("3") || user_mob.value.startsWith("4") || user_mob.value.startsWith("5")) {
        e.preventDefault();
        phn_err.style.display = "flex";
        phn_err.textContent = "Please enter a valid phone number";
    } else if (!user_location.value) {
        e.preventDefault();
        loc_err.style.display = "flex";
    } else {
        userName = user_name.value;
        //userWeddingDate = wedding_date.value;
        userPhone = user_mob.value;
        userLocation = user_location.value;
    // otherService = unique_checked_items.map(function (el) {
    //   return el.parentNode.textContent;
    // });
    }
});
//////////////GET UTM PARAMS OF FIRST PAGE//////////////
const initial_page_url = document.location.href;
const url_params = new URL(initial_page_url);
const utm_params = {};
url_params.searchParams.forEach(function(value, key) {
    if (key.startsWith("utm_")) utm_params[key] = value;
});
//console.log(url_params.pathname);
///////////////////////////////////////////////////
modal_close_btn.addEventListener("click", ()=>{
    otp_modal.style.display = "none";
});
const send_otp = function() {
    let data = JSON.stringify({
        isd_code: "91",
        mobile: `${Number(user_mob.value)}`,
        medium: "SMS"
    });
    let request = new XMLHttpRequest();
    let endPoint = new URL(`https://api.betterhalf.ai/v2/auth/otp/send/`);
    let url = endPoint.toString();
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(data);
};
gmv_form.addEventListener("submit", ()=>{
    otp_modal.style.display = "flex";
    send_otp();
    enableButtonAfterDelay();
    start_cd();
    document.querySelector(".sent_otp_to_txt").textContent = `We have sent OTP to ${user_mob.value}`;
    document.cookie = "formSubmitted=true";
});
let verify_otp_status;
function callback(status) {
    verify_otp_status = status;
}
let verify_otp = function(callback) {
    let data = JSON.stringify({
        mobile: `${Number(user_mob.value) || Number(user_mob2.value)}`,
        isd_code: "91",
        otp: `${Number(otp_field.value)}`
    });
    let request = new XMLHttpRequest();
    let endPoint = new URL(`https://api.betterhalf.ai/v2/auth/wedding-store/otp/verify/`);
    let url = endPoint.toString();
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function() {
        callback(request.status);
    };
    request.send(data);
};
otp_sub_btn.addEventListener("click", (e)=>{
    e.preventDefault();
    verify_otp(callback);
    validating_otp_block.style.display = "flex";
    if (!otp_field.value) {
        validating_otp_block.style.display = "none";
        otp_err.style.display = "flex";
    }
    setTimeout(function() {
        if (otp_field.value && verify_otp_status == 200) {
            //console.log('IN 200:', verify_otp_status)
            //REDIRECTION TO TYPEFORM PAGE
            const redirected_to_url = `https://www.betterhalf.ai/lp/typeform?utm_mobile=${user_mob.value}&utm_url=${url_params.pathname}`;
            const redirect_with_utm = new URL(redirected_to_url);
            for(const key in utm_params)redirect_with_utm.searchParams.set(key, utm_params[key]);
            window.location.href = redirect_with_utm.href;
            otp_form_block.style.display = "none";
            validating_otp_block.style.display = "none";
            succ_block.style.display = "flex";
            final_name.value = userName;
            final_num.value = userPhone;
            final_date.value = userWeddingDate;
            final_location.value = userLocation;
            //other_service_final.value = otherService;
            final_submit_btn.click();
        } else if (otp_field.value && verify_otp_status != 200) {
            //console.log('IN !200',verify_otp_status)
            validating_otp_block.style.display = "none";
            otp_form_block.style.display = "flex";
            otp_err.textContent = "Please enter correct OTP";
            otp_err.style.display = "flex";
        }
    }, 1000);
});
////////////START 30 SEC COUNTDOWN/////////////
function start_cd() {
    let duration = 29;
    const cd_timer = setInterval(function() {
        cd_txt.innerHTML = `Resend OTP in ${duration} seconds`;
        duration--;
        if (duration < 0) {
            clearInterval(cd_timer);
            cd_txt.innerHTML = `Resend OTP`;
        }
    }, 1000);
}
//////////////ENABLE AND DISABLE RESEND OTP BUTTON//////////////////
function enableButtonAfterDelay() {
    setTimeout(()=>{
        isEnabled = true;
        resend_otp_btn.disabled = false;
        resend_otp_btn.style.display = "flex";
    }, 30000);
}
/////////////RESEND OTP/////////////////////
resend_otp_btn.addEventListener("click", ()=>{
    if (isEnabled) {
        resend_otp_btn.disabled = true;
        resend_otp_btn.style.display = "none";
        isEnabled = false;
        send_otp();
        enableButtonAfterDelay();
        //console.log("Here");
        start_cd();
    }
}); ///////////////SHOWING POP UP///////////////
 /*
let options = {
  threshold: 0.3,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting == true) {
      if (document.cookie.indexOf("formSubmitted=true") !== -1) {
        document.querySelector(".pop_up-form-wrapper").style.display = "none";
      } else {
        document.querySelector(".pop_up-form-wrapper").style.display = "flex";
      }

      if (document.cookie.indexOf("popupFormSubmitted=true") !== -1) {
        document.querySelector(".pop_up-form-wrapper").style.display = "none";
      } else {
        document.querySelector(".pop_up-form-wrapper").style.display = "flex";
      }
      observer.unobserve(entry.target);
    }
  });
}, options);

//observer.observe(document.querySelector(".testimonial_block"));
*/  /////////////////SHOWING POP UP ENDS//////////////////////////
 /////////////////////////////////////////////////////////////////POP UP FORM/////////////////////////////////////////////////////////////////
 /*
const country_code2 = document.querySelector("#country_code_2");
country_code2.value = `+91`;
country_code2.setAttribute("readonly", " ");

const gmv_form2 = document.querySelector("#gmv_v3_2");

const user_name2 = document.querySelector("#name_field_2");
const user_mob2 = document.querySelector("#mob_num_2");
const wedding_date2 = document.querySelector("#wedding_date_2");
wedding_date2.type = "date";
wedding_date2.min = minDate;
const user_location2 = document.querySelector("#location_2");

const submit_btn2 = document.querySelector("#form_submit_btn_2");

const name_err2 = document.querySelector("#name_err_2");
const phn_err2 = document.querySelector("#phn_err_2");

user_name2.addEventListener("input", () => {
  name_err2.style.display = "none";
});

user_mob2.addEventListener("input", () => {
  phn_err2.style.display = "none";
});

const other_services_2 = [];
let checked_items_2;
let unique_checked_items_2;

document.querySelector("#service_wrapper_2").addEventListener("click", (e) => {
  if (e.target.type == "checkbox") {
    if (e.target.checked) {
      other_services_2.push(e.target);
    }
  }

  checked_items_2 = other_services_2.filter(function (el) {
    return el.checked == true;
  });
  unique_checked_items_2 = [...new Set(checked_items_2)];
});

submit_btn2.addEventListener("click", (e) => {
  console.log("here");
  const alphabets = /^[a-zA-Z]+$/;
  if (!user_name2.value) {
    e.preventDefault();
    name_err2.style.display = "flex";
  } else if (!user_mob2.value) {
    e.preventDefault();
    phn_err2.style.display = "flex";
  } else if (
    user_mob2.value.match(alphabets) ||
    user_mob2.value.length > 10 ||
    user_mob2.value.length < 10 ||
    user_mob2.value.startsWith("1") ||
    user_mob2.value.startsWith("2") ||
    user_mob2.value.startsWith("3") ||
    user_mob2.value.startsWith("4") ||
    user_mob2.value.startsWith("5")
  ) {
    e.preventDefault();
    phn_err2.style.display = "flex";
    phn_err2.textContent = "Please enter a valid phone number";
  } else {
    userName = user_name2.value;
    userWeddingDate = wedding_date2.value;
    userPhone = user_mob2.value;
    userLocation = user_location2.value;
    //Assign chosen value of other service to otherService variable
    otherService = unique_checked_items_2.map(function (el) {
      return el.parentNode.textContent;
    });
  }
});

const send_otp2 = function () {
  let data = JSON.stringify({
    isd_code: "91",
    mobile: `${Number(user_mob2.value)}`,
    medium: "SMS",
  });

  let request = new XMLHttpRequest();
  let endPoint = new URL(`https://api.betterhalf.ai/v2/auth/otp/send/`);
  let url = endPoint.toString();
  request.open("POST", url, true);
  request.setRequestHeader("Content-Type", "application/json");

  request.send(data);
};

gmv_form2.addEventListener("submit", () => {
  document.querySelector(".pop_up-form-wrapper").style.display = "none";
  otp_modal.style.display = "flex";
  send_otp2();
  document.querySelector(
    ".sent_otp_to_txt"
  ).textContent = `We have sent OTP to ${user_mob2.value}`;
  document.cookie = "popupFormSubmitted=true";
});

pop_up_form_close_btn.addEventListener("click", () => {
  document.querySelector(".pop_up-form-wrapper").style.display = "none";
});

////////////LOCATION SUGGESTION FOR POPUP FORM/////////////////

let get_location_2 = function (id, childId) {
  const cardContainerSearch = document.getElementById(id);
  cardContainerSearch.innerHTML = "";

  let request = new XMLHttpRequest();
  let endPoint = new URL(
    `https://search.betterhalf.ai/search/city?charlist=${user_location2.value}`
  );
  let url = endPoint.toString();

  request.open("GET", url, true);

  request.onload = function () {
    let suggestions = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      suggestions.result.forEach((suggestion) => {
        const style = document.getElementById(childId);
        const cardSearch = style.cloneNode(true);
        cardSearch.setAttribute("id", "");

        cardSearch.style.display = "grid";

        const search_suggestion =
          cardSearch.getElementsByClassName("suggestion_txt")[0];
        search_suggestion.textContent = suggestion.city;

        const state = cardSearch.getElementsByClassName("state")[0];
        state.textContent = suggestion.state;

        const country = cardSearch.getElementsByClassName("country")[0];
        country.textContent = suggestion.country;

        cardSearch.onclick = () => {
          const location = `${suggestion.city}`;
          user_location2.value = location;

          cardContainerSearch.innerHTML = "";
        };

        cardContainerSearch.appendChild(cardSearch);
      });
    }
  };
  request.send();
};
user_location2.addEventListener(
  "input",
  get_location_2.bind(event, "Cards-Container_search2", "samplestyle_search2"),
  false
);
*/  ///////////////////////////////////////////////////////////////////POP UP FORM ENDS///////////////////////////////////////////////////////////////
 /////////////////////////////////////////////////////////SLIDER CODE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 /*
function venue_vendor() {
  let splides = $(".venue_vendor");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 4,
      perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: "loop", // 'loop' or 'slide'
      gap: "2em", // space between slides
      arrows: "slider", // 'slider' or false
      pagination: false, // 'slider' or false
      speed: 600, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: true, // go back to beginning when reach end
      rewindSpeed: 400,
      waitForTransition: false,
      updateOnMove: true,
      trimSpace: false, // true removes empty space from end of list
      autoplay: true,
      breakpoints: {
        991: {
          // Tablet
          perPage: 1,
          gap: "4vw",
        },
        767: {
          // Mobile Landscape
          perPage: 1,
          gap: "4vw",
        },
        479: {
          // Mobile Portrait
          perPage: 1,
          gap: "4vw",
        },
      },
    }).mount();
  }
}
venue_vendor();

function wedding_success() {
  let splides = $(".wedding_success");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 2,
      perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: "loop", // 'loop' or 'slide'
      gap: "2em", // space between slides
      arrows: false, // 'slider' or false
      pagination: false, // 'slider' or false
      speed: 600, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: true, // go back to beginning when reach end
      rewindSpeed: 400,
      waitForTransition: false,
      updateOnMove: true,
      trimSpace: false, // true removes empty space from end of list
      autoplay: true,
      breakpoints: {
        991: {
          // Tablet
          perPage: 1,
          gap: "4vw",
        },
        767: {
          // Mobile Landscape
          perPage: 1,
          gap: "4vw",
        },
        479: {
          // Mobile Portrait
          perPage: 1,
          gap: "4vw",
        },
      },
    }).mount();
  }
}
wedding_success();

Array.from(document.querySelectorAll("#left-arrow")).forEach(function (el) {
  el.addEventListener("click", () => {
    Array.from(document.querySelectorAll(".splide__arrow--prev")).forEach(
      (el) => {
        el.click();
      }
    );
  });
});

Array.from(document.querySelectorAll("#right-arrow")).forEach(function (el) {
  el.addEventListener("click", () => {
    Array.from(document.querySelectorAll(".splide__arrow--next")).forEach(
      (el) => {
        el.click();
      }
    );
  });
});

Array.from(document.querySelectorAll(".splide__arrow--next")).forEach((el) => {
  el.style.display = "none";
});

Array.from(document.querySelectorAll(".splide__arrow--prev")).forEach((el) => {
  el.style.display = "none";
});
*/  ////////////////////////////////////////////////////////SLIDER CODE ENDS////////////////////////////////////////////////////////
 //////////////////SEND OTP FUNCTION USING fetch()//////////////////
 /*
const validating_otp_block = document.querySelector(".validating_block");
const success_block = document.querySelector(".success_block");
const otp_err_warning = document.querySelector(".otp_err");

const sub_btn = document.querySelector(".otp_submit_btn");

let data_to_send_otp = {
  isd_code: "91",
  mobile: `2222222222`,
  medium: "SMS",
};

const otp_send = async function () {
  const res = await fetch(`https://api.betterhalf.ai/v2/auth/otp/send/`, {
    method: "POST",
    body: JSON.stringify(data_to_send_otp),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  console.log(data);
};

otp_send();

let data_to_verify_otp = {
  mobile: `2222222222`,
  isd_code: `91`,
  otp: `2828`,
};

const otp_verify = async function () {
  const res = await fetch(
    `https://api.betterhalf.ai/v2/auth/wedding-store/otp/verify/`,
    {
      method: "POST",
      body: JSON.stringify(data_to_verify_otp),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  console.log(`Verifying OTP...`);
  validating_otp_block.style.display = "flex";

  const data = await res.json();
  if (res.status == 200) {
    console.log(data);
    success_block.style.display = "flex";
  } else {
    console.log(res.status, `Wrong OTP entered`);
    validating_otp_block.style.display = "none";
    z_warning.style.display = "flex";
  }
};

sub_btn.addEventListener("click", (e) => {
  e.preventDefault();
  otp_verify();
});
*/ 

},{}]},["dpgAG","6rimH"], "6rimH", "parcelRequiree7b8")

//# sourceMappingURL=script.js.map
