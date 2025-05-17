'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2d245ec83748ba8c753fda1123d9de2e",
"assets/AssetManifest.bin.json": "b4619e95c64ddc52794c900423f9d89a",
"assets/AssetManifest.json": "7ed977b4412aec8610b648e922c69b22",
"assets/assets/fonts/Almarai-Bold.ttf": "1c7b8f3e50a7ca693dc27d3f1314167f",
"assets/assets/fonts/Almarai-ExtraBold.ttf": "5270f5e7ab01259e282604276871946f",
"assets/assets/fonts/Almarai-Light.ttf": "5b0dec05feae02fef51afd517af94d4c",
"assets/assets/fonts/Almarai-Regular.ttf": "4fcf563640cefe40b7474aec4f966c0a",
"assets/assets/fonts/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/assets/fonts/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/assets/fonts/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "fb428a00b04d4e93deb4d7180814848b",
"assets/assets/images/1.png": "edebb5c0fbb493734d97af49c1afeff2",
"assets/assets/images/2.png": "46d4afe8b93c676efda8df9e3c3fefad",
"assets/assets/images/3.png": "7a5930563fc148ff6e450c4c30a614d7",
"assets/assets/images/fady.jpg": "87ec4ee2f8d7036cd2701e78fb73ba7e",
"assets/assets/images/fady.png": "37fec3ba2649b1ae3843770a4231ff82",
"assets/assets/images/fady_logo.png": "0e8d8d6c2e23767f6aa34919fbd4f30c",
"assets/assets/images/fady_logo_1.png": "c2550459d0c65f167b9d4fd4f9f5fe63",
"assets/assets/images/fedo1.jpg": "8b875d455641f612a8c4eb078fc24907",
"assets/assets/images/fedo1.png": "0f6cfa92b300c1bdd3fdc09025a946b0",
"assets/assets/images/fedo2.jpg": "41e71b1818f4ad41b255210bbb03387c",
"assets/assets/images/fedo2.png": "326ec3bd67345ad94a6152256484e7b1",
"assets/assets/images/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/images/gif/icons/android.svg": "a5edf188314ff37a4f513eaccb8d546b",
"assets/assets/images/gif/icons/api.png": "e3cecfbe120293174a4bd5a08683b0d9",
"assets/assets/images/gif/icons/apple.svg": "6be40eb4dcaeafda971f070ef687ac8e",
"assets/assets/images/gif/icons/clean.png": "9709844f3499d9bca8d4f7b01467089b",
"assets/assets/images/gif/icons/concept.svg": "1d2ab33390f87572191ab36a2f4912cd",
"assets/assets/images/gif/icons/contact.png": "e3b1aca81c02dd72dfd9a842c5512a82",
"assets/assets/images/gif/icons/conti.png": "8d618dd1f576984e80732fadc50feb61",
"assets/assets/images/gif/icons/dark.png": "34b9b410330efc014dac0df01b222a9e",
"assets/assets/images/gif/icons/data-recovery.png": "43d84ab83b495dc42b6229ac2e31b089",
"assets/assets/images/gif/icons/database.svg": "af66f234a398197845eac15cc5bfe961",
"assets/assets/images/gif/icons/design.svg": "b9c1d12b86f6f5a1b1d564b6403b177f",
"assets/assets/images/gif/icons/dev.svg": "b14707ec638fce2d61ee308153066dd1",
"assets/assets/images/gif/icons/experience.png": "1ca4fc99b3f6fdfbe8ffb675051ce7a1",
"assets/assets/images/gif/icons/extra.svg": "3fb07c94f8a4146abb2f266a9e5b229f",
"assets/assets/images/gif/icons/home.png": "8848d51a04d7f272187ec179f7def64a",
"assets/assets/images/gif/icons/light.png": "e9912f4715e49b9933978c2adcaafe0f",
"assets/assets/images/gif/icons/map.svg": "b1e04382dab1ba99ac4fb9595e21bec8",
"assets/assets/images/gif/icons/mobile&web.svg": "a52728da45f566090d7b296297c533f6",
"assets/assets/images/gif/icons/notification.png": "2991a7d6c5de0404091c66922ee2e904",
"assets/assets/images/gif/icons/performance.png": "c2552fe2712156eda3b03d74542e0c94",
"assets/assets/images/gif/icons/project.png": "fe02d5cd0c46dd85e8caa850bf6c154b",
"assets/assets/images/gif/icons/responsive.png": "992d23ae406cf593a730bdb0adb9e58f",
"assets/assets/images/gif/icons/skill.png": "938ab509e9d4b0a807004779a561e5c7",
"assets/assets/images/gif/icons/state.svg": "f79db439a4f4ab26642706b01276444b",
"assets/assets/images/gif/icons/storage.svg": "81d33565398c7a0820e9f478c4d87582",
"assets/assets/images/gif/icons/test.svg": "464bb0814d1417ab36ee64d7c91569d4",
"assets/assets/images/gif/icons/version_control.png": "3c098540038e90e5ca34362cee45b58b",
"assets/assets/images/gif/icons/web.png": "f4ad9d5b2e0eca6a257aa5a0104289db",
"assets/assets/images/gif/icons/website.svg": "9cd94a52a52a97e7c48dff52a4b4eb1d",
"assets/assets/images/gif/lottie/1.jpg": "e521eb9670894f79f0371dad55639cd7",
"assets/assets/images/gif/lottie/10.jpg": "f32fa98c5bbadfa9daa1bf3fb2429486",
"assets/assets/images/gif/lottie/11.jpg": "0ee420b4a21054b21784d2f40b67d19c",
"assets/assets/images/gif/lottie/13.jpg": "4ccb46bc38d94b6453063cdefa5a86b1",
"assets/assets/images/gif/lottie/14.jpg": "47972845741fb3879f70070cc23b58f2",
"assets/assets/images/gif/lottie/15.jpg": "c1467111e54a426e2e9c71765f599dc6",
"assets/assets/images/gif/lottie/16.jpg": "11aad8ecd0ac6427c97f1c95fafa7936",
"assets/assets/images/gif/lottie/17.jpg": "431bad3ea38c19c746d4275d99b34209",
"assets/assets/images/gif/lottie/2.jpg": "ff45140df2ff7058a50ffa12a1dad51f",
"assets/assets/images/gif/lottie/3.jpg": "cfb14196046b3a96ff60415967e0633a",
"assets/assets/images/gif/lottie/4.jpg": "b6f49e586decd04496425f4f528f1658",
"assets/assets/images/gif/lottie/5.jpg": "2c643e1025d6df26fef47aa5dca91243",
"assets/assets/images/gif/lottie/6.jpg": "9495595efeb07aa9892a804b7fbeb8fc",
"assets/assets/images/gif/lottie/7.jpg": "786c98b084a28346604303280a2ed1c4",
"assets/assets/images/gif/lottie/8.jpg": "160de52668124c777f5f9c6901aaf88d",
"assets/assets/images/gif/lottie/88.jpg": "4ed00ebdec5da026645b2ba5981e9455",
"assets/assets/images/gif/lottie/9.jpg": "636fb01388ba618a7a487b6d5c0fb728",
"assets/assets/images/gif/lottie/bot.json": "342278e571ecc64b5a8aba55b1bb3347",
"assets/assets/images/gif/lottie/downArrow.json": "49173a110fe080fa76d509fb174b26ce",
"assets/assets/images/gif/lottie/downArrow.json~": "ef1fd26a61990361b1b5dd6f580b6a8b",
"assets/assets/images/ic_arrowdown.svg": "983f8c05d9a4909f1378510f1cef0e16",
"assets/assets/images/ic_back_arrow.svg": "2b9e2d571dc2309125cff4dcad7eefd8",
"assets/assets/images/ic_call.svg": "ec0e7679316afe0c22446e912098333a",
"assets/assets/images/ic_close.svg": "cd444e323f043dc2421bf936ff811a4d",
"assets/assets/images/ic_delete.svg": "90248410d6ace58fad664644e75030a0",
"assets/assets/images/ic_facebook.svg": "a0a6db46ddc3bea3ca01841e2f142506",
"assets/assets/images/ic_facebook_2.svg": "edfb34f53fdc045475625308f41a0b0b",
"assets/assets/images/ic_image_place_holder.png": "91f162a095329f9459fd34995a06c85c",
"assets/assets/images/ic_instagram.svg": "f8ba66a2acfc2fb3598025f92d9cf230",
"assets/assets/images/ic_instagram_2.svg": "60628dd3330d8076ace0200687c34911",
"assets/assets/images/ic_landing_whatsapp.svg": "1f82e5694db6d3df76ae9efce8757fd5",
"assets/assets/images/ic_language.svg": "3c14830732cc42fbcdeea38520865e39",
"assets/assets/images/ic_language_2.svg": "24fae05718e6d517e5acd51ff220f9ba",
"assets/assets/images/ic_like.svg": "812fd53a86172f1dbd1054ce8ce89f49",
"assets/assets/images/ic_linkedin.svg": "86747840351da8bd194a24700ccd9fc1",
"assets/assets/images/ic_loading.svg": "3b6339c63950667ad9f6bff33e153f5c",
"assets/assets/images/ic_location.svg": "8784ecaac9c3f984293254b9b9a2107e",
"assets/assets/images/ic_locations.svg": "db9818f9ccd40f9c2e97d83a813212cb",
"assets/assets/images/ic_lock.svg": "70234beafcd9f9a7cc1f0d4a3c865c8e",
"assets/assets/images/ic_logo.svg": "8a498e8beef9f57ef87d1df69c21a994",
"assets/assets/images/ic_pause.svg": "380e79803a59125735b6e6eb825414c4",
"assets/assets/images/ic_pay_now.svg": "69150d4edfbd41a206cd8f278b3b9442",
"assets/assets/images/ic_play.svg": "e8d0f4f18391780551b9aee7dcd4c8b9",
"assets/assets/images/ic_plumbing.svg": "8e4ddaeaaabb2810348c9644cb7e16dc",
"assets/assets/images/ic_refresh.svg": "0de7a5631bcec2772714604498b6ab16",
"assets/assets/images/ic_school.svg": "cd503f474fd4c1080bcca0387e3ec811",
"assets/assets/images/ic_Search.svg": "44e82147e8a81455703b82123fa15ffc",
"assets/assets/images/ic_version.svg": "cac68f81af353eb018c53da54e19516c",
"assets/assets/images/ic_video.svg": "f9df7a718f01d1d849457a2dd8ccaedb",
"assets/assets/images/ic_warning.svg": "ae503884c2abb0f9b7a33314f164a439",
"assets/assets/images/ic_whatsapp.svg": "9a84cff013ad78da2c9642b88c32357b",
"assets/assets/images/ic_youtube.svg": "ee3b45f3dbb2c2a766895d68403990c4",
"assets/assets/images/logo.jpg": "ce13e5052e72d23563a114ed5e104e73",
"assets/assets/images/new_logo1.png": "f94df1b99afa0ee9b242be5edc5ed44b",
"assets/assets/images/new_logo2.png": "bae30d5d8aad5ea2146e8d85ede9104e",
"assets/assets/images/new_logo3.png": "3885b8c3b9dcb06388eb6d09b5c047f8",
"assets/assets/images/new_logo_5.png": "fccd792dd570cc4031faf3dade0ef5d6",
"assets/FontManifest.json": "e40785cff0a6bf317c8b0ea322155b63",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "55b189decb1c396880bfb25d70bba8ab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "fccd792dd570cc4031faf3dade0ef5d6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/fady/favicon.ico": "fccd792dd570cc4031faf3dade0ef5d6",
"icons/fady/favicon.png": "fccd792dd570cc4031faf3dade0ef5d6",
"icons/fady/icon_192.png": "fccd792dd570cc4031faf3dade0ef5d6",
"icons/fady/icon_512.png": "fccd792dd570cc4031faf3dade0ef5d6",
"icons/fady/icon_maskable_192.png": "fccd792dd570cc4031faf3dade0ef5d6",
"icons/fady/icon_maskable_512.png": "fccd792dd570cc4031faf3dade0ef5d6",
"icon_192.png": "fccd792dd570cc4031faf3dade0ef5d6",
"icon_512.png": "fccd792dd570cc4031faf3dade0ef5d6",
"icon_maskable_192.png": "fccd792dd570cc4031faf3dade0ef5d6",
"icon_maskable_512.png": "fccd792dd570cc4031faf3dade0ef5d6",
"index.html": "ffe7f173a1a7679b80862d4b1873b5c2",
"/": "ffe7f173a1a7679b80862d4b1873b5c2",
"main.dart.js": "582efdbdd5dd45c246aefed029755440",
"manifest.json": "74ed44747a9316c566554e3ea8c4348d",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
