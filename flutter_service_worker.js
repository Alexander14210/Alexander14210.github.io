'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"index.html": "7098560afdbd45f5305ccc3dbca7894c",
"/": "7098560afdbd45f5305ccc3dbca7894c",
"version.json": "ac36ad1e46c771a9343f8e66f611b09f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js": "2685da561f4d0987f4d0a8bb80164ed1",
"manifest.json": "c7dc1cec46c8f43188046cb5772e7d0b",
"assets/AssetManifest.json": "f590f27c162ea4afb76afe18e5e45a3a",
"assets/fonts/MaterialIcons-Regular.otf": "0f281d549eeec0ceefe6ed13537a1240",
"assets/AssetManifest.bin.json": "534cd90160c7188c9ad080f83871d0a9",
"assets/AssetManifest.bin": "3faae508c6ffdec16e1b15a5d630e308",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "c2716c0888c37a8398f61cdb972c43e2",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/NOTICES": "7f6910ffd0b6e197f2b077d428f092a6",
"assets/assets/img/mapas/Division_estudio.geojson": "21badcce585189ba4835f2eb2da47ca0",
"assets/assets/img/mapas/Puntos_de_muestreos.geojson": "4ed22108f780bbb387d3d2193a0be00c",
"assets/assets/img/mapas/Poblados.geojson": "5ca5349ace2bf4f48d579b748a3cbaa9",
"assets/assets/img/mapas/Rio_Caimito.geojson": "edb61d76864c5ce4cdc772809e7bc5de",
"assets/assets/img/mapas/Cuenca_Caimito.geojson": "c8c4367412cf8f1d7e623b6265cad4da",
"assets/assets/img/mapas/Name_CuencaMedia.geojson": "c225375b524d51316258fbad38111b28",
"assets/assets/img/mapas/Name_CuencaAlta.geojson": "732b6640221ca2aeef2641a498c67097",
"assets/assets/img/mapas/Cuenca_140.geojson": "6d368aff318f31f072f483fe60e5772c",
"assets/assets/img/mapas/Name_CuencaBaja.geojson": "8425ecb9ac4a417c1424ffbcd6f94e6b",
"assets/assets/img/mapas/EsIA_a_3km_del_rio.geojson": "959817479c191c244cc1621d3bb51426",
"assets/assets/img/puntos/0.jpg": "1b78fec3542486002f25c31156385401",
"assets/assets/img/puntos/7.jpg": "dc3b8e01580c1b6980150bc4daa74af4",
"assets/assets/img/puntos/1.jpg": "2e847373dd0eee42268b34bc310e8f5f",
"assets/assets/img/puntos/4.jpg": "f295018af970f38cf5705824cb9e0901",
"assets/assets/img/puntos/2.jpg": "688d5e10af9e734061d60b8dc981ded3",
"assets/assets/img/puntos/3.jpg": "2e3af436170bc127b7fb0d106f647157",
"assets/assets/img/puntos/6.jpg": "508b0c80888de80b136fd4e0d9952b2a",
"assets/assets/img/puntos/8.jpg": "885c7c930dbcd7499d3932f67ba21d92",
"assets/assets/img/puntos/5.jpg": "1de8c7b26ef8a4ce0e76e8bf81198263",
"assets/assets/img/fishes/Sicydium%2520salvini.jpg": "c3d8dc0839ff1b4f8884d680d3ddd0fa",
"assets/assets/img/fishes/Rhonciscus%2520bayanus.jpg": "17ff39714f5b2ff242900dce07c45ac7",
"assets/assets/img/fishes/_default.jpg": "2cb992c5940b78f251703ebd49f72370",
"assets/assets/img/fishes/Neoheterandria%2520tridentiger.jpg": "989eee30dcdd4979c8dea706ad522ba7",
"assets/assets/img/fishes/Trinectes%2520fonscensis.jpg": "f7d88286d3108bfe3799a32bb0ae8e38",
"assets/assets/img/fishes/Poecilia%2520gillii.jpg": "71d65871dcb09d7fd980e8b47a9e3651",
"assets/assets/img/fishes/Compsura%2520gorgonae.jpg": "5ed742bddffd7e072020406f4a2614b2",
"assets/assets/img/fishes/Awaous%2520transandeanus.jpg": "7020ae7746f80c6b05310a03e43dd9a0",
"assets/assets/img/fishes/Eleotris%2520picta.jpg": "24a4c7fc5ae85d466398e99024ea1017",
"assets/assets/img/fishes/Dormitator%2520latifrons.jpg": "7fe62d3a69286d376cf2fa7c6cf45e55",
"assets/assets/img/fishes/Sturisomatichthys%2520panamensis.jpg": "b676acfa4cd2f34f5c6242a3943fa736",
"assets/assets/img/fishes/Dajaus%2520monticola.jpg": "3ac3409d1b9f37fde46a18eddb0cd25b",
"assets/assets/img/fishes/Pimelodella%2520chagresi.jpg": "6933ca63fb8580e45762fbe746be4ac9",
"assets/assets/img/fishes/Pseudophallus%2520elcapitanensis.jpg": "300ab6ec28edafeacc3dc725ec9afe13",
"assets/assets/img/fishes/Parachromis%2520managuensis.jpg": "deb3cdaf6095a0ceb3ab811cf31cd7c4",
"assets/assets/img/fishes/Brycon%2520argenteus.jpg": "fa47cc42a45bd6461b4e2172ead39153",
"assets/assets/img/fishes/Oreochromis%2520niloticus.jpg": "ce8f5177139836bfaa505a36b7866494",
"assets/assets/img/fishes/Gobiomorus%2520maculatus.jpg": "238be9e1bb1c07ec2736fd82fd3f136d",
"assets/assets/img/fishes/Eugerres%2520brevimanus.jpg": "51200582d40b3207b7c595b658112eb0",
"assets/assets/img/fishes/Leptoancistrus%2520canensis.jpg": "7bd96a3b437cc865c6767c020df4a87b",
"assets/assets/img/fishes/Leptophilypnus%2520panamensis.jpg": "a7772d7b34ab3bc0388dc9ca9dc775fc",
"assets/assets/img/fishes/Eretmobrycon%2520emperador.jpg": "223cb45d364665001f5e90f5d7cfc766",
"assets/assets/img/fishes/Ancistrus%2520chagresi.jpg": "6cbe0e07e15f47532b8456fba650cc8d",
"assets/assets/img/fishes/Rhamdia%2520guatemalensis.jpg": "6913569c8707852d8c2b203d64466ad2",
"assets/assets/img/fishes/Centropomus%2520unionensis.jpg": "b27aafd727188b30e129fe639398b16c",
"assets/assets/img/fishes/Astyanax%2520panamensis.jpg": "767de53971f30c60b21f1a175f0729fb",
"assets/assets/img/fishes/Rineloricaria%2520uracantha.jpg": "0e08af1af58d70a38bc7350aff551da7",
"assets/assets/img/fishes/Cynodonichthys%2520brunneus.jpg": "4466438de0d23fdb542509cb1691882a",
"assets/assets/img/fishes/Brachyhypopomus%2520occidentalis.jpg": "5432ab232756d18b67e98d9be59db1d0",
"assets/assets/img/fishes/Hypostomus%2520aspidolepis.jpg": "dd787e181c7386871005ca070b6fba40",
"assets/assets/img/fishes/Cyphocharax%2520magdalenae.jpg": "12588b0c3894da8105cfdff3ce5b822c",
"assets/assets/img/fishes/Brachyrhaphis%2520episcopi.jpg": "3c2755a895298afd65550697b1c56a78",
"assets/assets/img/fishes/Gephyrocharax%2520atracaudatus.jpg": "3aaa44c9818eb5e56f9295605e07bfbf",
"assets/assets/img/fishes/Brycon%2520striatulus.jpg": "13d66cec8f2303104ff1fc0966389da1",
"assets/assets/img/fishes/Roeboides%2520occidentalis.jpg": "f7224e7d6a7c4333f141ebc4df64b033",
"assets/assets/img/fishes/Andinoacara%2520coeruleopunctatus.jpg": "2ead8c0304ef8c840ab2332c090ad70a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
