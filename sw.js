const CACHE_NAME='bio4pack-pricing-v2';
const ASSETS=['./','./index.html','./image.png','./icon-192.png','./icon-512.png','./manifest.json'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS)).catch(()=>{}));self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil(self.clients.claim());});
self.addEventListener('fetch',event=>{event.respondWith(caches.match(event.request).then(response=>response||fetch(event.request)));});
