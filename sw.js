// version v1.2.0

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('nord').then(cache =>
      cache.addAll([
        '',
        'index.html',
        'rzl/css/core.css',
        'rzl/js/core.js',
        'rzl/js/ui.js',
        'nord/nord.css',
        'nord/nord.js',
        'nord/tools/arena/arena.js',
        'nord/tools/breeding/breeding.js',
        'nord/tools/cartography/cartography.js',
        'nord/tools/tools.js'
      ])
    )
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response
      else return fetch(event.request)
    })
  )
})
