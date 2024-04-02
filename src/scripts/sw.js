import "regenerator-runtime";
import CacheHelper from "./utils/cache-helper";

const assertToCache = [
  "./",
  "./icons/restaurant.ico",
  "./images/restaurant.png",
  "./3a3056a298e898acbc0e.jpg",
  "./ef28b3d9bbbdd34bdfcb.jpg",
  "./a174fcfb1a82c6b25273.jpg",
  "./e21bf0619419a1f63192.jpg",
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
