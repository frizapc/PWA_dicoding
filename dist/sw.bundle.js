/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
self.addEventListener("install", function (event) {
  console.log("Installing service worker ...");
});
self.addEventListener("activate", function (event) {
  console.log("Activating service worker ...");
});
self.addEventListener("fetch", function (event) {
  // console.log(event.request);
  event.respondWith(fetch(event.request));
});
/******/ })()
;
//# sourceMappingURL=sw.bundle.js.map