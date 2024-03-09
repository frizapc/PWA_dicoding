import "regenerator-runtime";
import CacheHelper from "./utils/cache-helper";

const assertToCache = [
  "./",
  "./icons/restaurant.ico",
  "./images/restaurant.png",
  "./bd6b63650298f334a08b.jpg",
  "./d4f8a6c23405371bb2f5.jpg",
  "./index.html",
  "./app.css",
  "./app.bundle.js",
  "./app.webmanifest",
  "./sw.bundle.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assertToCache]));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
