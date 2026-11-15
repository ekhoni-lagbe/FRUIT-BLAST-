/* ===== Adsterra কনফিগ / Adsterra config =====
   Adsterra থেকে পাওয়া কোড নিচের `` (ব্যাকটিক) এর ভেতরে পেস্ট করুন।
   ফাঁকা থাকলে "বিজ্ঞাপনের জায়গা" বক্স দেখাবে।
   গুরুত্বপূর্ণ: Adsterra নিয়ম অনুযায়ী ইউজারকে বিজ্ঞাপনে ক্লিক করতে বলা বা ক্লিকের বিনিময়ে পুরস্কার দেওয়া যাবে না। */
window.ADS={
  top:``,              // হোম পেজের ব্যানার (Adsterra "Banner" কোড)
  topSize:[320,50],
  game:``,             // গেম পেজের উপরের ব্যানার (ফাঁকা রাখলে top-এর কোড ব্যবহার হবে)
  gameSize:[320,50],   // জায়গা কম হলে নিজে থেকে ছোট হয়ে বসবে
  reward:``,           // ৮ সেকেন্ডের আনলক পপআপে দেখানো ৩০০×২৫০ ব্যানার
  display:``,          // প্রতি ১৫ লেভেল পরপর দেখানো বড় ডিসপ্লে বিজ্ঞাপন (ফাঁকা রাখলে reward-এর কোড ব্যবহার হবে)
  displaySize:[300,250],
  siteScripts:`
    <script>(function(s){s.dataset.zone='12269267',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>
    <script>(function(s){s.dataset.zone='12269258',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>
  `,      // Monetag-এর Vignette / In-Page Push / Interstitial ট্যাগ (পুরো <script ...></script> লাইনটা এখানে পেস্ট করুন)
  socialBar:'',        // Social Bar স্ক্রিপ্টের URL (ঐচ্ছিক)
  rewardSeconds:8      // আনলকের আগে অপেক্ষার সময় (সেকেন্ড)
};
