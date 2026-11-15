/* ফল ধামাকার নিজস্ব সার্ভিস ওয়ার্কার: ইনস্টল চালু রাখে, কিন্তু কিছু সেভ/ক্যাশ করে না — তাই অনলাইন ছাড়া খেলা যায় না।
   (Monetag-এর sw.js ফাইলটা আলাদা, ওটা ছোঁয়া হয়নি।) */
self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){
  var r=e.request;
  if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
  e.respondWith(fetch(r).catch(function(){
    if(r.mode==='navigate'){
      return new Response('<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><body style="margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#1a0b3b;color:#fff;font-family:sans-serif;text-align:center;padding:20px"><div><div style="font-size:56px">📶</div><h2>ইন্টারনেট নেই / No internet</h2><p>ফল ধামাকা খেলতে ইন্টারনেট চালু করে আবার খুলুন।<br>Turn on the internet and open the game again.<br>इंटरनेट चालू करके फिर खोलें।</p></div></body>',{headers:{'Content-Type':'text/html; charset=utf-8'}});
    }
    return Response.error();
  }));
});
