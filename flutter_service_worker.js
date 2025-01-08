'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "beb8ee6825d1f40fb21b0331fe7caba2",
"index.html": "0cfbb9b9de4af0610036033c66273a16",
"/": "0cfbb9b9de4af0610036033c66273a16",
"main.dart.js": "8b2b404a8624d5eeeb07694d8d4c2e34",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "3f75805443fc8dfa7c0f5c9fb316ff4e",
"assets/AssetManifest.json": "b28490d839d7d82d58578d9a2a17819e",
"assets/NOTICES": "3d55fe53a722aaa538812d11c28174ac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/flutter_public/assets/icon_arrow_up.png": "628db8fe2d21d519f754955348f74853",
"assets/packages/flutter_public/assets/icon_arrow_left.png": "0f1b5d50ce6359ce493c0057fc2a79bd",
"assets/packages/flutter_public/assets/icon_arrow_bold_right.png": "3811a0f317671719dea4ee850f9d5b32",
"assets/packages/flutter_public/assets/2.0x/icon_arrow_up.png": "8c3104d5cc084bc9356178adfb6cdafb",
"assets/packages/flutter_public/assets/2.0x/icon_arrow_left.png": "93638a8284e3a5a5871e84063b00c61b",
"assets/packages/flutter_public/assets/2.0x/icon_arrow_bold_right.png": "7df3f0b5d9ee29d8568865ad678a4772",
"assets/packages/flutter_public/assets/2.0x/icon_arrow_bold_down.png": "657de50024a0bc5c11057be1c7a82e12",
"assets/packages/flutter_public/assets/2.0x/icon_arrow_bold_left.png": "03a9f101b81068f20b4f42a98c144c36",
"assets/packages/flutter_public/assets/2.0x/icon_arrow_bold_up.png": "c7cf40dbb6c4deec5c39460d44858c26",
"assets/packages/flutter_public/assets/2.0x/icon_arrow_right.png": "1e20a3012a64e8eb50403023a0778279",
"assets/packages/flutter_public/assets/2.0x/icon_arrow_down.png": "ac30c62890661a62db9c5d14fc21c0af",
"assets/packages/flutter_public/assets/icon_arrow_bold_down.png": "6b167abb2bc98bc1c6b6760aa2006368",
"assets/packages/flutter_public/assets/icon_arrow_bold_left.png": "584b2bbd67ec794b1b8cb212c3e21fec",
"assets/packages/flutter_public/assets/icon_arrow_bold_up.png": "28372876f2784aaa098844a797951cb1",
"assets/packages/flutter_public/assets/icon_arrow_right.png": "8a39d6107f743dbe3074aef520f9211a",
"assets/packages/flutter_public/assets/icon_arrow_down.png": "313f7db6d642e9eb6b5117389953f80d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "ac0a4930c2d2feb1f9fae1b296f66fb7",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/batch.png": "71a3f587a1310e4ba8feb06bd21b41e3",
"assets/assets/add.png": "163608fccd7c293bec69ae31a429d9a0",
"assets/assets/standard_card_left.png": "7d670215dbab0fa490f42e9f4bdd286e",
"assets/assets/icon_mark_blue.png": "e0bca943c2fef2418aed6cbe0967ee4f",
"assets/assets/icon_menu_M0111.png": "6973a5e385dab8fbcef5651fb53ecc24",
"assets/assets/tab_message_select.png": "c8fd6b3e8088073167639e45d85ae71f",
"assets/assets/icon_menu_M0105.png": "558040f9d39acbeb67ec508dca1d00b7",
"assets/assets/icon_menu_M0104.png": "c69a12c761d3390be98b94cef4ace18a",
"assets/assets/document.png": "298d0579cf394ba56df36b75ae821d51",
"assets/assets/icon_arrow_orange.png": "c54b36bb63c078b32a5cd35bc83a1d9a",
"assets/assets/ATtask.png": "ff1df1fb8d8a9465e8021894de02f9ab",
"assets/assets/icon_menu_M0106.png": "df6d0629b42cbecf00a0fc4e1e961b8c",
"assets/assets/login_background.png": "ab0dad8c3870af54f19c55824fd98643",
"assets/assets/icon_menu_M0112.png": "cf30a2169f3eb8f74d4a76213746038f",
"assets/assets/icon_menu_M0113.png": "aa56012b0149fa3dc6b4e5033858b778",
"assets/assets/icon_menu_M0107.png": "c71c146bc2d1dd7147f4ab076ed07b65",
"assets/assets/M0112.png": "4d71181a02a1898c62557be65451c04b",
"assets/assets/leaderboard.png": "40bff677e0bd5e89796ae749f173b6a3",
"assets/assets/filter_white.png": "0f0728d1c2119ecf5e0a4c3cf28ea2c3",
"assets/assets/tab_person.png": "39bf93cd2431eb2b24d7619a7803d423",
"assets/assets/login_logo.png": "1730fd2de69a0b7a188852394ee6f4e3",
"assets/assets/icon_menu_M0103.png": "ac312bc26b94c1a0f18915e764d6e5fc",
"assets/assets/icon_message_clear.png": "a9adfb366017df19e34c4b5538d76404",
"assets/assets/icon_menu_M0102.png": "3a0384e2a97f39cedb8e37521bd3d25e",
"assets/assets/login_microsoft.png": "650bfe7565d2950262032d3d82749354",
"assets/assets/row_dropdown.png": "5de5b0889c13f44487ff02dc977bc0f0",
"assets/assets/icon_mark_orange.png": "1be2fa7b92df58db9d017886e83c2e8e",
"assets/assets/oclicon.png": "98d680bcd94258e3f4ad12cc11d29cc7",
"assets/assets/select_photo.png": "6115e2a0143da25bc05e075ca2fb4b12",
"assets/assets/icon_menu_M0114.png": "cd0ea5117df7f58ee70204b118f61c1b",
"assets/assets/icon_menu_M0101.png": "00fa0168cd896bbaae50db42b2a7b960",
"assets/assets/icon_sop_train_delay.png": "5a3e24842c36afa656b20a138ffdaec2",
"assets/assets/icon_5w_eye.png": "63a4aba05cf2213d610246c4cf44c45b",
"assets/assets/login_password.png": "dcc1a2006140526bcd1caf039606241d",
"assets/assets/icon_edit_orange.png": "0d4924ffa2d6fa1626cdb6b4a27ca69e",
"assets/assets/icon_video_5s.png": "49270e51bfd2526c29c39f408b333be3",
"assets/assets/icon_menu_M0172.png": "c50b1d15ea7c5ee71a60805b3b6bccbe",
"assets/assets/badge_01.png": "c032cf29509d4742ad68e27dec052896",
"assets/assets/icon_menu_M0173.png": "10d9aad19b4dbf97fd968139672b8216",
"assets/assets/cosmic_mcl_done.png": "5e0eee6007e7b910d4269f107ee1f55d",
"assets/assets/OWDtask.png": "d9d8ea5fe655ac0c6d1e1b7c78f2906a",
"assets/assets/icon_message.png": "43b132ff7484d13d7816448cf3947899",
"assets/assets/icon_rectarrow.png": "0fd40d8547a1366992fe473d039a7297",
"assets/assets/icon_menu_M0171.png": "7c248393a4da33641c1bcf19e08fe601",
"assets/assets/icon_menu_M0170.png": "4616e00a0ea50b6dbbf92e03fb32e064",
"assets/assets/icon_plan_time.png": "9e766609909d0c2169b09a1c2c4e7a4d",
"assets/assets/standard_card_right.png": "b4ff970f2694afd91d2bc87c631c052c",
"assets/assets/sopt.png": "0d82752f822b744c3ab7a834cd37a09c",
"assets/assets/next-%2520progress.png": "4083177b289aa4b8d2d20e8464b45f73",
"assets/assets/tab_home.png": "795b666a6d5b3e9e7fc803ad5a388e65",
"assets/assets/huang.png": "5e77fc99dbefad0e488e8bc388d9f505",
"assets/assets/icon_menu_M0160.png": "f87ebe32da25c259cd1597a3533e1b9b",
"assets/assets/icon_menu_M0174.png": "e0cc7c13b69ae5d969cfd948c6b2e6a8",
"assets/assets/tab_message.png": "9b08517cfe050556dd6d41fab232478c",
"assets/assets/icon_menu_M0175.png": "78ff376713b1e0c12f0de137fc627186",
"assets/assets/icon_menu_M0161.png": "5cfb9ca5e298cd789de51be4085a5562",
"assets/assets/icon_mark_green.png": "704465744153083b74ac3d9988dc065f",
"assets/assets/down_no.png": "7fc6f5ed2abf6dac90190e4a0159f3c9",
"assets/assets/login_eye_close.png": "2c638bdf026f84c99703e7a8949e59df",
"assets/assets/home_header_user.png": "12c811a6cf5b4b2929ac8872d62317df",
"assets/assets/soptest.png": "c2bce6edf5f45236912c77007c5a9335",
"assets/assets/icon_menu_M0188.png": "0d2e8acec7fecdee29e9d23260071bc0",
"assets/assets/icon_delete_red.png": "e25631793fd894b26999552c683efbc6",
"assets/assets/icon_menu_M0176.png": "5fc1869ba6462b1a5c8f4ce0e8f4f510",
"assets/assets/icon_menu_M0189.png": "2abee36a58dc0b132d8793e19276a412",
"assets/assets/icon_reopen.png": "0a174cbc52d0668ddd8ca958e44a599a",
"assets/assets/home_header_bg.png": "d1db13e1674f965c5c6a546f17f84df8",
"assets/assets/icon_pi.png": "5970642d703d0acf33af969c52a67729",
"assets/assets/icon_menu_M0190.png": "9c3a60e7d59d5b78f88c911e63c850f2",
"assets/assets/wenjian.png": "9390ebe859514c3a0f5b7e752738473f",
"assets/assets/icon_menu_M0184.png": "b5b301d6a2b61597ebf74e8acec1120d",
"assets/assets/icon_menu_M0191.png": "59e03df5a9248eb4825dd77173ff5ccb",
"assets/assets/logo_new.png": "f2efc2e1bfe50d0f68d14d98c1d2bb78",
"assets/assets/arrow_black.png": "cdaa1c397de68f66a9c7ef530c9d43c1",
"assets/assets/rate_arrow.png": "3da191710d7bec5f81befced7808325f",
"assets/assets/cosmic_mcl_file.png": "eb09d6b6ee90472d93f3dacb0898e22f",
"assets/assets/icon_menu_M0187.png": "7858df582f9dd4b606865e6f8d65590b",
"assets/assets/icon_menu_M0193.png": "c50b1d15ea7c5ee71a60805b3b6bccbe",
"assets/assets/help.png": "127af8c05a184760085ceea5e0e085cf",
"assets/assets/icon_menu_M0192.png": "3bbc028013ad384d597ac83d1fb786e5",
"assets/assets/icon_menu_M0186.png": "6973a5e385dab8fbcef5651fb53ecc24",
"assets/assets/rocket.png": "a01124dcdc921a262a5c4af4a1fbdcc2",
"assets/assets/arrow_gray.png": "184a094d565ad3220d7edf7bd5ffcac1",
"assets/assets/login_center.png": "cb0193a5306b3814a60c96e300fb3991",
"assets/assets/down_yes.png": "aafef86b9693c2b8498838c9a7fe2315",
"assets/assets/check_box.png": "da1a1347cab4ee4c51501b4c18cd8797",
"assets/assets/icon_menu_M0182.png": "413653004d8f25308eaf40fa61359a3a",
"assets/assets/cosmic_mcl_add.png": "1eb6ef1088fabd6ce839cb4c1eeabdad",
"assets/assets/filter.png": "b1d8d492c5c356cd1fb0fb38c00da156",
"assets/assets/icon_5w_app.png": "97d8f469fea760ead030a110743c7582",
"assets/assets/icon_menu_M0183.png": "b635ff153167096d867ea5f235f1059d",
"assets/assets/mcl_done.png": "f09e8c899f8d2523bdf0dba97cfe9e4f",
"assets/assets/dropdown.png": "f1e3da798c770dab0463200d475671d4",
"assets/assets/down_img.png": "97df9e4a5b3855407059b3e78260a90d",
"assets/assets/icon_menu_M0181.png": "17acd9f62efd89cba0102c2f196b0876",
"assets/assets/login_check.png": "7deaed4dc478b4b13361b98f5b36dc0a",
"assets/assets/icon_menu_M0180.png": "4acf9ce201e544acc31e198bfb5f83d1",
"assets/assets/icon_menu_M0194.png": "714b2e89374a53df7921c54c6845d9ac",
"assets/assets/login_eye.png": "b3155412836ef1dab11163e5dbd3af81",
"assets/assets/tab_home_select.png": "09e928bd03f75d6cc1b1c53b7850647e",
"assets/assets/check-box.png": "d6e1ea0297ef1e678c8b06c30cbeeb80",
"assets/assets/icon_tache.png": "61a3780b4ba8accf213655feb58e16a0",
"assets/assets/launch_bg.png": "02a5d9b03336046df1845421c69405c0",
"assets/assets/icon_rect_orange.png": "a786032f49a89e409eb7f984cd098344",
"assets/assets/icon_menu_M0124.png": "c794136a0c3bc740fd21ddba4cc48380",
"assets/assets/icon_menu_M0125.png": "5a962d22824370b5feef6d988e0abd9a",
"assets/assets/lightRed.png": "f4ecca91cb96e83c26fda26dda95ac4b",
"assets/assets/icon_menu_.png": "9a16c0dc31bcf83a4d7fa2acae4253bc",
"assets/assets/MCLtask.png": "e0917af69c6f1135d31ed2650c5f4124",
"assets/assets/lan.png": "58da999ce3be099bd1e7c0fce3b80029",
"assets/assets/appbar_logo.png": "99ee5d9c4e751ffef2f356ab146fd374",
"assets/assets/tab_person_select.png": "33764bfbb20bbaf6cd8ad8d9117c9bca",
"assets/assets/login_user.png": "25b46f46b7dbec78a845f9bf3f6b6509",
"assets/assets/next_arrow.png": "59d873b77b1fdeb11a5577b3d6f58dbb",
"assets/assets/APtask.png": "f22b7b1af6639770af48449ecb94d480",
"assets/assets/tip.png": "6d8652a9239ad72a8b24341cd2f50bfb",
"assets/assets/photos.png": "00eb9e96ff0d7e4c2bcd62aaaad42700",
"assets/assets/icon_menu_M0136.png": "76974b1f54f37ea6afef5b3fb005a8cf",
"assets/assets/icon_menu_M0123.png": "939172dd55f44a65de18089305fe3c7b",
"assets/assets/sopicon.png": "5f316d44626c448e3b046d270007885c",
"assets/assets/right.png": "af21cdcc743ebe1fe5f2962fb9d32da2",
"assets/assets/icon_eye_orange.png": "f174671ad5a941db975a8bfed57cda30",
"assets/assets/icon_address_item.png": "cbe69d14e61bdfe0f75e50c85aa987bf",
"assets/assets/icon_menu_M0109.png": "77623e7b53ce249c197ffb74d688a929",
"assets/assets/icon_menu_M0108.png": "258d5d77c166f9cf6b2b508538ee57d5",
"assets/assets/icon_menu_M0120.png": "5a962d22824370b5feef6d988e0abd9a",
"assets/assets/home_header_scan.png": "39bada10325b4412b955ac9e155b3406",
"assets/assets/icon_arrow_down.png": "a588b3fec9ed481373aeb24b9b779e24",
"assets/assets/shengji.png": "58a4392987209677693ec6b4f9fe7467",
"assets/assets/close.png": "b784a38cb0b0dfad331ca16ca8b376fc",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
