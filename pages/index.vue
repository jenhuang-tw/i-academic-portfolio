<!-- pages/index.vue -->
 
<script setup>
const baseUrl = 'https://jenhuang-tw.github.io/i-academic-portfolio/';
const route = '';
const fullUrl = `${baseUrl}${route}`;

const pageTitle = '首頁';
const pageDescription = '學習歷程檔案資訊統整網站，蒐集整理學習歷程檔案各項資訊。';
const pageKeywords = '';
const pageRefreshDate = '2023-03-14';

// 使用 useHead 設定頁面特定的 head 內容
useHead({
  title: pageTitle, // 會與 nuxt.config.ts 中的 titleTemplate 結合
  link: [
    { rel: 'canonical', href: fullUrl }
  ],
  meta: [
    { name: 'description', content: pageDescription },
    { property: 'og:description', content: pageDescription },
    { name: 'DC.Description', content: pageDescription }, // Dublin Core
    { name: 'keywords', content: `學習歷程檔案, 學檔, 108課綱, 108 課綱, 申請入學, 備審資料, ${pageKeywords}` },
    { property: 'og:title', content: `${pageTitle} - i 學檔` }, // Open Graph Title
    { name: 'DC.Title', content: `${pageTitle} - i 學檔` }, // Dublin Core Title
    { property: 'og:url', content: fullUrl }, // Open Graph URL
  ]
});
</script>

<template>
  <div>
<header class="w3-container w3-center">
	<h1 class="w3-wide">i 學檔: 首頁</h1>
	<p>學習歷程檔案資訊混亂無章？我們幫你整理！</p>
  <p class="w3-smaller">本頁最後更新日期：{{ pageRefreshDate}}</p>
</header>

<div class="w3-container w3-round w3-theme-light">
	<h2>認識我們</h2>
	<p style="text-indent:2em;">陳婉琪教授（2022）觀察到：108課綱下的高中學生，認為考招新制資訊混亂，有學生建議由「官方」統一提供資訊。但是，現行考招由大學決定最適合自己的學生，恐怕沒有統一的資訊。依其見解，提供學生資訊的第一線教育工作者應告知學生原始資料來源，並可提供建議參考文獻的來源，說明資訊產生方的性質，落實媒體識讀教育。</p>
	<p style="text-indent:2em;">本計畫出於對上述見解的認同，嘗試提供統整，整理各界資訊。</p>
	<p style="font-weight:bold;">參考資料：</p>
	<p style="text-indent:-2em;margin-left:2em;">陳婉琪（2022年7月25日），〈學習歷程做白工？大學教授：多數輿論只看到「選才」功能〉，《親子天下》，<a href="https://www.parenting.com.tw/article/5093348" target="_blank">https://www.parenting.com.tw/article/5093348</a></p>
</div>

<div class="w3-container w3-round w3-theme-light">
	<h2>聯絡我們</h2>
	<p>請<a href="https://tw.piliapp.com/email-html/show/?text=jen.huang%40tuta.com&title=聯絡整理人">點連結顯示</a>電子信箱（工具邦技術提供）。</p>
</div>
  </div>
</template>