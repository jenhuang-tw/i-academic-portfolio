<!-- pages/copyright.vue -->
 
<script setup>
const baseUrl = 'https://jenhuang-tw.github.io/i-academic-portfolio/';
const route = 'copyright';
const fullUrl = `${baseUrl}${route}`;

const pageTitle = '著作權聲明';
const pageDescription = '學檔資訊統整網採用 CC BY 授權，歡迎利用本站資料。';
const pageKeywords = '創用 CC';
const pageRefreshDate = '2022-08-09';

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
    { name: 'x-refresh-date', content: pageRefreshDate }
  ]
});
</script>

<template>
  <div>
<header class="w3-container">
	<h1>著作權聲明</h1>
</header>

<nav class="w3-container">
	<ul class="breadcrumb">
		<li><NuxtLink to="/">首頁</NuxtLink></li>
		<li><NuxtLink :to="`/${route}`">{{pageTitle}}</NuxtLink></li>
	</ul>
</nav>

<main class="w3-container">
	<p class="w3-smaller">本頁最後更新日期：{{ pageRefreshDate}}</p>
    <h2>1 本站內容授權條款</h2>
	<p>除非另有標示，「i 學檔：學習歷程檔案資訊統整網站」 ({{baseUrl}}*) 擁有著作權之內容以創用 CC 姓名標示 4.0 國際版 (CC BY 4.0) 提供，轉載時無須取得本站同意。但是，使用時應註明【本站之名稱或簡稱】及【該內容出處連結】。</p>
	<h3>1.1 不在授權範圍的內容</h3>
	<p>請注意，部分影音、圖像、樂譜、專人專案撰文或其他著作，標示非本站版權所有，或聲明須經同意才可以使用的內容，不在此授權範圍內。</p>
	<h2>2 本站的網頁原始碼</h2>
	<p>本站的網頁原始碼使用 MIT 授權。但 <a href="https://www.w3schools.com/w3css/">W3.CSS</a> 框架、JavaScript  <a href="https://sweetalert2.github.io/">sweetalert2</a> 函式庫各依其授權條款使用。</p>
</main>
  </div>
</template>