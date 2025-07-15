<script setup>
import { ref } from 'vue';

// 控制手機版側邊欄的開關狀態
const mobileSidebarOpen = ref(false);

const w3_mobile_open = () => {
  mobileSidebarOpen.value = true;
};

const w3_mobile_close = () => {
  mobileSidebarOpen.value = false;
};

// 導航列頁面設定
const navPages = [
  // { path: '/university-viewpoint', label: '大學如何看學檔' }, // 如果有啟用
  { path: '/share', label: '成品分享' },
  // { path: '/post', label: '看整理' },
  // { path: '/no-fake', label: '考招消息真實性查核' },
  // { path: '/vocational', label: '技專校院專區' },
  { path: '/info', label: '找資訊' }
];
</script>

<template>
  <div>
    <div class="w3-top">
      <div class="w3-bar w3-theme-d3 w3-top w3-left-align w3-large">
        <a class="w3-bar-item w3-button w3-right w3-hide-medium w3-hide-large w3-hover-theme w3-large w3-theme-l1" href="javascript:void(0)" @click="w3_mobile_open">&#9776;</a>
        <NuxtLink to="/" class="w3-bar-item w3-button w3-hover-theme"><i class="fa fa-home w3-margin-right"></i>i 學檔</NuxtLink>

        <NuxtLink
          v-for="page in navPages"
          :key="page.path"
          :to="page.path"
          class="w3-bar-item w3-button w3-hide-small w3-hover-theme"
        >
          {{ page.label }}
        </NuxtLink>
      </div>
    </div>

    <div class="w3-sidebar w3-bar-block" :style="{ display: mobileSidebarOpen ? 'block' : 'none' }" id="mobileSidebar">
      <button @click="w3_mobile_close" class="w3-bar-item w3-button w3-xlarge w3-theme-l1 w3-right">關閉選單 &times;</button>
      <NuxtLink
        v-for="page in navPages"
        :key="page.path"
        :to="page.path"
        class="w3-large w3-bar-item w3-button"
      >
        {{ page.label }}
      </NuxtLink>
    </div>

    <div class="w3-main w3-row w3-padding-64">
      <div class="w3-col m2 l2 w3-hide-small">　</div>

      <div class="w3-col s12 m8 l8">
        <slot />
      </div>

      <div class="w3-col m2 l2 w3-hide-small">　</div>
    </div>

    <footer id="myFooter">
      <div class="w3-container w3-theme-l2 w3-padding-32">
        <h4>i 學檔：學習歷程檔案資訊統整網站</h4>
        <p>本站由學生自主建置，歡迎您<a href="https://tw.piliapp.com/email-html/show/?text=jen.huang%40tuta.com&title=聯絡整理人">聯絡本站</a>，分享更多資訊或給予指正批評。
        </p>
      </div>

      <div class="w3-container w3-theme-l1">
        <p>
          <NuxtLink to="/copyright">著作權聲明</NuxtLink>．<NuxtLink to="/privacy-policy">隱私權政策</NuxtLink>
        </p>
      </div>
    </footer>
  </div>
</template>