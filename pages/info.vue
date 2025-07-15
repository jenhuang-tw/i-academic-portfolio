<!-- pages/info.vue -->
 
<script setup>
const baseUrl = 'https://jenhuang-tw.github.io/i-academic-portfolio/';
const route = 'info';
const fullUrl = `${baseUrl}${route}`;

const pageTitle = '找資訊';
const pageDescription = '啊啊啊！好混亂，為什麼這麼多人各說各話？';
const pageKeywords = '資訊, 指引';
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
<header class="w3-container">
	<h1>資訊來源</h1>
</header>

<nav class="w3-container">
	<ul class="breadcrumb">
		<li><NuxtLink to="/">首頁</NuxtLink></li>
		<li><NuxtLink :to="`/${route}`">{{pageTitle}}</NuxtLink></li>
	</ul>
</nav>

<main class="w3-container">
	 

  <p class="w3-smaller">本頁最後更新日期：{{ pageRefreshDate}}</p>

	 <section>
	 <h2>1 這裡有一批乾貨：網站</h2>
	 
	 <p>本站在此建議幾個網站給同學參考。</p>
	 
	 <article>
	 <h3>1.1 作伙學</h3>
	 <p>連結: <a href="https://www.108epo.com/" target="_blank">https://www.108epo.com/</a></p>
	 <p>「作伙學」團隊是教育部委託台大社會系辦理學習歷程檔案審議，邀請大學教授與高中老師、學生坐下來談，聊聊心目中理想的學檔，還有可能的困境與解方。</p>
	 <p>在他們的網站中，有各種關於學習歷程檔案呈現的指引。尤其是新課綱時代才有的「課程學習成果」，更是產出了一本手冊給大家參考，電子書也有掛在網路上。本站十分推薦同學們多多瀏覽「作伙學」網站。</p>
	 <p>上述手冊，《作伙做學檔：課程學習成果呈現建議》提到了：</p>
	 <ol>
		<li>學習歷程檔案的一般性審查指引： (1) 素養、過程、真實； (2) 三重二不</li>
		<li>課程學習成果六大指引、理想作品架構</li>
		<li>如何呈現學習過程、素養能力</li>
		<li>如何撰寫作品摘要、脈絡</li>
		<li>什麼是獨特性、真實性？如何呈現？</li>
		<li>六大類型（學習單、課堂活動、實驗記錄、實作作品、專題報告與小論文、綜整紀錄）課程成果呈現建議</li>
		<li>常見 Q&A（內容、格式）</li>
	 </ol>
	 
	 <div class="w3-panel w3-leftbar w3-theme-light">
	  <p class="w3-large w3-serif">
	  這本書所介紹的指引與具體建議，固然可以讓高中師生們，了解大學教授審查時希望看到的重點，但這本手冊不全然是從入學審查的角度出發。有人或許會將這本手冊，看成如何做課程成果的武功秘笈，不過我們的目的並非指導高中生作出符合形式要求的「完美」作品，而是希望協助高中端了解大學端審查原則，也能對高中教學與學習有所助益。</p>
	  <p>林國明（審議計畫主持人），《作伙做學檔》手冊序言</p>
	</div> 
	</article>
	
	 <article>
	 <h3>1.2 ColleGo</h3>
	 <p>連結: <a href="https://collego.edu.tw/" target="_blank">https://collego.edu.tw/</a></p>
	 
	 <p>ColleGo 全稱「大學選才與高中育才輔助系統」，最主要功能是讓高中學生找到適合自己的學群學類與學系。</p>
	 <p>ColleGo 編輯團隊也有邀請一些代表性的高中老師（如陳光鴻老師、洪逸文老師）、大學教授（如唐俊華老師）分享對學習歷程檔案的指引，都放在「焦點話題」專區，非常推薦同學可以前去觀看。</p>
	 </article>
	 
	 <article>
	 <h3>1.3 108課綱配套宣導資料 (含學生學習歷程檔案)</h3>
	 <p>連結: <a href="https://www.ttvs.ntct.edu.tw/ischool/publish_page/192/" target="_blank">https://www.ttvs.ntct.edu.tw/ischool/publish_page/192/</a></p>
	 
	 <p>這是教育部委託草屯商工承辦的「108課綱配套宣導資料 (含學生學習歷程檔案)」資料庫。</p>
	 </article>
	 
	 </section>
	 
	 <section>
	 <h2>2 找主管機關/負責單位聊聊</h2>
	 </section>
	 
	<p>依照您想討論的事項，尋找正確的主管機關，有助於事情迅速解決（否則他們還要跨機關幫助您轉傳訊息）。</p>
	<p>如果您真的不知道要找哪個機關，可以直接寄信到「教育部部長信箱」，他們會幫您轉傳到正確的地方，或是指示您可以怎麼做。</p>
	<ul>
		<li>「教育部」<a href="https://email.moe.gov.tw/Home.aspx">部長信箱</a>：整體高等教育（大學、專科以上）政策</li>
		<li>「教育部國民及學前教育署」<a href="https://www.k12ea.gov.tw/Tw/Mail/MailExplain">署長信箱</a>：<br /><strong>國立</strong>高中校內制度問題（例如 有老師堅持不認證課程中產出的學習歷程檔案）。除了聯絡國教署，也可以進行校內申訴。<br /><strong>縣市立高中：找「各縣市政府教育局（處）」。</strong></li>
		<li>大學招生委員會聯合會（招聯會）<a href="https://www.jbcrc.edu.tw/contact.html">聯絡方式</a>：繁星推薦、個人申請、分發入學等<strong>招生與大學入學制度</strong></li>
		<li>大學入學考試中心（大考中心）<a href="https://www.ceec.edu.tw/xmdoc/cont?xsmsid=0J018559180686000251">聯絡方式</a>（沒有電子信箱功能，請打電話或寄信）：學測、分科等<strong>考試</strong></li>
	</ul>

</main>
  </div>
</template>