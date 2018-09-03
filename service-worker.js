/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ae0a3012a69fea99a5c22ec476c33fe2"
  },
  {
    "url": "assets/css/0.styles.6d705697.css",
    "revision": "8b3aa1318b4a9f6efd7633fd356e9b40"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7cc731fc.js",
    "revision": "fb0ca287c6d9ed03b986098c3ee68483"
  },
  {
    "url": "assets/js/11.ee3ef6c6.js",
    "revision": "59f49b86f702e51c14b2ae233a8729b4"
  },
  {
    "url": "assets/js/12.e9543cb5.js",
    "revision": "0c696e00c60a3f2bd0a87eeca5bc89df"
  },
  {
    "url": "assets/js/13.0f14096c.js",
    "revision": "cf95bb2598524007a2d825600b186491"
  },
  {
    "url": "assets/js/14.74cc4030.js",
    "revision": "1f41de113ae8fa242ce67cb13409731b"
  },
  {
    "url": "assets/js/15.2d2024ad.js",
    "revision": "d4adf8d5db659d38706873561aa2fa9e"
  },
  {
    "url": "assets/js/2.2166b12e.js",
    "revision": "2962ae2eff44bfba4addb49507a655d1"
  },
  {
    "url": "assets/js/3.d0a87521.js",
    "revision": "f3bf01ef414723ac6d0d73db07be4a71"
  },
  {
    "url": "assets/js/4.816c5836.js",
    "revision": "d4eb12895a3bcf165b929a891bdcfa5e"
  },
  {
    "url": "assets/js/5.0c2117a9.js",
    "revision": "99852758f60c36deabcbde66644b9b6a"
  },
  {
    "url": "assets/js/6.d6f1f98b.js",
    "revision": "1d077bfad862441da78620ea63554005"
  },
  {
    "url": "assets/js/7.03ac3186.js",
    "revision": "6cabdd1fe6f8b0c6ce54d4681fba854b"
  },
  {
    "url": "assets/js/8.a4330633.js",
    "revision": "1dd417da86770e0a43a69bd9e36e9b12"
  },
  {
    "url": "assets/js/9.1686c228.js",
    "revision": "12a28a1190e65bbd9ddf002e2ce5e353"
  },
  {
    "url": "assets/js/app.01c0109e.js",
    "revision": "fbda45a212ecaf0ec8599f17837cebe8"
  },
  {
    "url": "blog/class1.html",
    "revision": "34244b1f860482b219bfc2b352d0925f"
  },
  {
    "url": "blog/class2.html",
    "revision": "00bfc8cb13d06960277a8709135e0f3d"
  },
  {
    "url": "blog/class3.html",
    "revision": "83db7fc3c423e4ed4868b962739d811b"
  },
  {
    "url": "blog/index.html",
    "revision": "a36b132a28090db31c8af3c5b61528a8"
  },
  {
    "url": "index.html",
    "revision": "def3c0c6e10637794a54375821501197"
  },
  {
    "url": "javascript/es5/class1.html",
    "revision": "a426d3bb07f2478893ce1a962cac7ea4"
  },
  {
    "url": "javascript/es5/class2.html",
    "revision": "0310e282402cbc15fd2fd0002c645620"
  },
  {
    "url": "javascript/es5/class3.html",
    "revision": "127d46c5b0ef48c7d11c60beb3177085"
  },
  {
    "url": "javascript/es5/class4.html",
    "revision": "283cc4ddc9eb72a7052335b54d71560f"
  },
  {
    "url": "javascript/es5/index.html",
    "revision": "466c6e6417a375b87add4f256dd11321"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "91ae33266f0ca3fd5ed037147680e625"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
