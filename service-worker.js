const CACHE_NAME = 'and1-v1';
const assets = [
  '/', '/index.html', '/style.css', '/menu.js', '/game.js', '/player.js', '/audio.js',
  '/images/and1_logo.png', '/sounds/menu_music.mp3'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});