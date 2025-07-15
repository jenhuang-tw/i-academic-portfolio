<!-- pages/share.vue -->
 
<script setup>
const baseUrl = 'https://jenhuang-tw.github.io/i-academic-portfolio/';
const route = 'share';
const fullUrl = `${baseUrl}${route}`;

const pageTitle = '成品分享';
const pageDescription = '成品分享頁面，收錄各種公開的學習歷程檔案作品連結。';
const pageKeywords = '著作權, 抄襲';
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
    { name: 'x-refresh-date', content: pageRefreshDate }
  ]
});
</script>

<template>
  <div>
<header class="w3-container">
	<h1>成品分享</h1>
</header>

<nav class="w3-container">
	<ul class="breadcrumb">
		<li><NuxtLink to="/">首頁</NuxtLink></li>
		<li><NuxtLink :to="`/${route}`">{{pageTitle}}</NuxtLink></li>
	</ul>
</nav>

<main class="w3-container">
	<p class="w3-smaller">本頁最後更新日期：{{ pageRefreshDate}}</p><p>同學請注意：</p>
	<ol>
		<li>我們只收錄連結，各作品的著作權，仍然是原作者所有。除非得到原作者的同意，您不可以援用本站的授權條款來使用他們的作品。</li>
		<li>基於對他人著作權的尊重以及法律規定，請您不要抄襲網路上的學習歷程檔案。</li>
		<li>學習歷程檔案評分輔助系統有設計「抄襲反制」的功能，當您的文字與其他著作過於類似，將會被標示出來，讓審查者知道檔案有抄襲嫌疑。因此，請勿心存僥倖。</li>
	</ol>
	<p class="w3-hide-small">表格中「access date」是本站最後點擊該連結，確定內容有效的時間，並非所連結網頁內容最後更新的時間。</p>
	<p>如有未及收錄者，您可以回到首頁找到「聯絡本站」連結告知。</p>

<table class="w3-table-all">
    <thead>
        <tr>
			<th>連結</th>
			<th>原作者</th>
			<th class="w3-hide-small">access date</th>
        </tr>
    </thead>
    <tbody>
		<tr>
			<td><a href="https://www.hhsh.tn.edu.tw/ischool/publish_page/128/?cid=4374">新豐高中課程學習成果優秀作品分享</a></td>
			<td>新豐高中學生</td>
			<td class="w3-hide-small">2023-01-16</td>
		</tr>
		<tr>
			<td><a href="https://www.sfsh.tn.edu.tw/ischool/publish_page/248/?cid=5272">新豐高中多元學習表現</a></td>
			<td>新豐高中學生</td>
			<td class="w3-hide-small">2023-01-16</td>
		</tr>
		<tr>
			<td><a href="https://www.hhsh.tn.edu.tw/ischool/publish_page/128/?cid=4374">新化高中優秀課程學習成果示例</a></td>
			<td>新化高中學生</td>
			<td class="w3-hide-small">2022-08-09</td>
		</tr>
		<tr>
			<td><a href="https://www.hhsh.tn.edu.tw/ischool/publish_page/128/?cid=4716">新化高中優秀多元表現與常見樣態指引</a></td>
			<td>新化高中學生與教師團隊</td>
			<td class="w3-hide-small">2022-08-09</td>
		</tr>
		<tr>
			<td><a href="https://www.facebook.com/groups/543769193694934/">雲林縣109 學年度「學習歷程成果及反思聯合發表會」</a></td>
			<td>雲林縣各高中職學生<br />評語回饋：各高中督學、校長、主任共9人</td>
			<td class="w3-hide-small">2022-08-09</td>
		</tr>
	</tbody>
</table>
</main>
  </div>
</template>