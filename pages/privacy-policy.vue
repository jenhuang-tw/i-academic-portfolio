<!-- pages/privacy-policy.vue -->
 
<script setup>
const baseUrl = 'https://jenhuang-tw.github.io/i-academic-portfolio/';
const route = 'privacy-policy';
const fullUrl = `${baseUrl}${route}`;

const pageTitle = '隱私權政策';
const pageDescription = '本站保護您的隱私權。';
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
	<h1>隱私權政策</h1>
</header>

<nav class="w3-container">
	<ul class="breadcrumb">
		<li><NuxtLink to="/">首頁</NuxtLink></li>
		<li><NuxtLink :to="`/${route}`">{{pageTitle}}</NuxtLink></li>
	</ul>
</nav>

<main class="w3-container">
	
  
  <p>歡迎您瀏覽「i 學檔：學習歷程檔案資訊統整網站」（以下簡稱本站），為了讓您能夠安心使用本站的各項服務與資訊，向您說明本站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：</p>
    
<h2>一、隱私權保護政策的適用範圍</h2>

<p>隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。</p>

<h2>二、個人資料的蒐集、處理及利用方式</h2>

<p>除了 GitHub Pages 可能蒐集訪客瀏覽資訊外，我們不蒐集其他資訊。上述蒐集資訊僅做營運團隊內部研究使用，非經您書面同意，不會對外公開可識別個人身分之資訊。有關 GitHub Pages 的運作機制，請自行參考 GitHub 網站。</p>

<h2>三、資料之保護</h2>

<p>本網站使用 GitHub Pages 服務，設有必要的資安防護措施，加以保護網站及您的個人資料，只由經過授權的人員才能接觸您的個人資料。</p>

<p>如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。</p>

<h2>四、網站對外的相關連結</h2>

<p>本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。</p>

<h2>五、與第三人共用個人資料之政策</h2>

<p>本網站不提供任何您的個人資料給其他個人、團體、私人企業或公務機關，但有下列情形之一者，不在此限：</p>

<p>一、經由您書面同意。</p>
<p>二、法院或司法警察機關依法令要求。</p>
<p>三、與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集後，依其揭露方式無從識別特定個人身分者。</p>
<p>四、當您在網站的行為，違反服務條款、可能損害或妨礙網站與其他使用者權益，或導致任何人遭受損害時，經本站研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。</p>

<h2>六、本站未使用 Cookie 功能。</h2>

<h2>七、隱私權保護政策之修正</h2>

<p>本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。</p>

<p class="w3-smaller">本頁最後更新日期：{{ pageRefreshDate}}</p>

<h2>八、聯繫管道</h2>

<p>對於本站之隱私權政策有任何疑問，或者想提出變更、移除個人資料之請求，請<a href="https://tw.piliapp.com/email-html/show/?text=jen.huang%40tuta.com&title=聯絡整理人">聯絡本站</a>。</p>
</main>
  </div>
</template>