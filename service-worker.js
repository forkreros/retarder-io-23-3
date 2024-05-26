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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "531f6677ea5870b3cedaaeb7a27e1a65"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "api/index.html",
    "revision": "8ec027ea2fbaf01949572e6afff81bc5"
  },
  {
    "url": "assets/css/0.styles.361ad7c5.css",
    "revision": "3bde6daf48297b57ecae22b68f54052b"
  },
  {
    "url": "assets/img/image-1.50db9d57.png",
    "revision": "50db9d57a6e59d72416890feea7bd336"
  },
  {
    "url": "assets/img/image-2.f73c10a1.png",
    "revision": "f73c10a16cff0a0c83635faca2ae204a"
  },
  {
    "url": "assets/img/image-3.6947c4cf.png",
    "revision": "6947c4cfbb1a1072dc22533b5a8fa359"
  },
  {
    "url": "assets/img/image-4.b7d56168.png",
    "revision": "b7d561683204ecdb0ec64bd58ee3921d"
  },
  {
    "url": "assets/img/image-5.7de91754.png",
    "revision": "7de9175482581a9dc4e78a216050449c"
  },
  {
    "url": "assets/img/image-6.4d244c86.png",
    "revision": "4d244c86751120efc782eddd98a80ca2"
  },
  {
    "url": "assets/img/image.c4ece2ce.png",
    "revision": "c4ece2ce9154cd7525e21b585ba1e114"
  },
  {
    "url": "assets/img/Relation.235c8aaa.svg",
    "revision": "235c8aaa4816a3294299154ff94df419"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.35d89b73.js",
    "revision": "0f40f6c197dd3d5e3f2618dc66746103"
  },
  {
    "url": "assets/js/11.c9062d18.js",
    "revision": "83e078e4f83e514706b03b5abfeafbc1"
  },
  {
    "url": "assets/js/12.9a82e5ab.js",
    "revision": "669b3599ad6274169364ffc97b28fbb6"
  },
  {
    "url": "assets/js/13.08fb9497.js",
    "revision": "65fa6b5754f7edaa633170722357af4e"
  },
  {
    "url": "assets/js/14.36796f7d.js",
    "revision": "50df2bba4e7f9272ff6d717f924b6732"
  },
  {
    "url": "assets/js/15.9c6bcc86.js",
    "revision": "b0f69eb1e82c25a6e39404b17100d6bf"
  },
  {
    "url": "assets/js/16.56faf7ac.js",
    "revision": "98f8bfefc8fd54fd579a30ea90974f32"
  },
  {
    "url": "assets/js/17.f5989579.js",
    "revision": "42ff713f998014017452c358af190d60"
  },
  {
    "url": "assets/js/18.1b39916c.js",
    "revision": "c68fa21e245a6a5dd81e8a41df3549e8"
  },
  {
    "url": "assets/js/19.7781cf99.js",
    "revision": "d63c13aca86e139f89cb659481b7c7cf"
  },
  {
    "url": "assets/js/2.aa0d8c00.js",
    "revision": "63318108ce286da836d2a38584f50182"
  },
  {
    "url": "assets/js/20.68e14de0.js",
    "revision": "863534f6d53f5d3f3b959b4144b90731"
  },
  {
    "url": "assets/js/21.0f0d3f4e.js",
    "revision": "9531ac8f6a0e977fdb5d9c8879fb8a5e"
  },
  {
    "url": "assets/js/22.fafa6b3d.js",
    "revision": "38a873ad16401c47e80cccdb8d97ca6f"
  },
  {
    "url": "assets/js/23.fd47adea.js",
    "revision": "9a4ffd21279833813eb5c8bd7f76dbb8"
  },
  {
    "url": "assets/js/24.e747fd50.js",
    "revision": "b244ead92c26304f4c2e209122be0e98"
  },
  {
    "url": "assets/js/25.43664adb.js",
    "revision": "926e02fda4f3e1576b2f74091cdf7145"
  },
  {
    "url": "assets/js/27.9a1f882a.js",
    "revision": "2cfd2d40a7d1e99299514d0125139a89"
  },
  {
    "url": "assets/js/3.17550815.js",
    "revision": "d030771dabce8502bfc32b50def4d289"
  },
  {
    "url": "assets/js/4.c00382d6.js",
    "revision": "0aaaea3e6e9e90f8774eb11940557cdf"
  },
  {
    "url": "assets/js/5.22a8c3cd.js",
    "revision": "859d0d25ceb8cd189fa6450460efe1db"
  },
  {
    "url": "assets/js/6.3f464bcd.js",
    "revision": "0d39fa19172e4d47ec36f82abeb34c07"
  },
  {
    "url": "assets/js/7.d760a0f6.js",
    "revision": "91853f31d936ac14cdc687d508519b57"
  },
  {
    "url": "assets/js/8.acae36a2.js",
    "revision": "ec8f43b9878e92b5af70faee022ec4c9"
  },
  {
    "url": "assets/js/9.2e26f8b0.js",
    "revision": "ca1ee0f65168061be63e2ceaea08d5f3"
  },
  {
    "url": "assets/js/app.16e6d1e3.js",
    "revision": "401eddcefc36f71b1d6ffdb550c9f9d2"
  },
  {
    "url": "conclusion/index.html",
    "revision": "475d126579d3b75ed109c052c5599bff"
  },
  {
    "url": "design/index.html",
    "revision": "6be5cca4f81064d31dc963b196269345"
  },
  {
    "url": "index.html",
    "revision": "101a8a18384d13b995676ace44bac9f8"
  },
  {
    "url": "intro/index.html",
    "revision": "5be81d3200dc81d4ecf7719a2904b9cc"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "08a987c1d04fb7b27804e9ccb48530df"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "46351f79d4c8e04ad0ca80daa004c9f2"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "81008fbdc972c3f0c95bdd615d7e2847"
  },
  {
    "url": "software/index.html",
    "revision": "0b37c1b123842350e8b0eff5aa0978e3"
  },
  {
    "url": "test/index.html",
    "revision": "f8c91fa6e9bc693884c693ef4a03f6d6"
  },
  {
    "url": "use cases/index.html",
    "revision": "905a68a2bc47a79fb18bb5bcbecc1e4b"
  }
].concat(self.__precacheManifest || []);
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
