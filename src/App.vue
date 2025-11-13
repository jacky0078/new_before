<template>
  <!-- 统一的全局加载层（仅在首屏显示） -->
  <div v-if="loading" id="loading">
    <div id="loading-center">
      <img src="/assets/images/logo.png" alt="loading" style="width:80px" />
    </div>
  </div>

  <!-- 路由内容 -->
  <router-view v-else />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const loading = ref(true)

onMounted(() => {
  // 1️⃣ 先展示加载动画
  setTimeout(() => {
    loading.value = false

    // 清理旧模板 loading（如果有）
    const legacy = document.getElementById('loading')
    if (legacy) legacy.remove()

    // ----------------------------------------------------
    // ✅ Vue 渲染完成后重新运行旧模板脚本
    // ----------------------------------------------------
    const reRunCustom = () => {
      const el = document.createElement('script')
      // 加时间戳防止缓存
      el.src = '/assets/js/custom.js?t=' + Date.now()
      el.async = false
      document.body.appendChild(el)
    }

    const runChartScripts = () => {
      const el = document.createElement('script')
      el.src = '/assets/js/chart-custom.js?t=' + Date.now()
      el.async = false
      document.body.appendChild(el)
    }


    // WOW.js 动画库重新初始化
    const tryInit = () => {
      // @ts-ignore
      if (window.WOW) new window.WOW().init()
    }

    // 依次执行
    tryInit()
    reRunCustom()
    runChartScripts()
    // 在 reRunCustom() 之后执行：
    setTimeout(() => {
      if (window.jQuery) {
        const $ = window.jQuery;

        // 重新绑定左侧菜单点击事件
        $('.iq-menu li a').off('click').on('click', function (e: any) {
          const checkElement = $(this).next();
          $('.iq-menu li').removeClass('active');
          $(this).closest('li').addClass('active');
          if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');
          }
          if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('.iq-menu ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
          }
        });
      }
    }, 700);

  }, 600) // 保留600ms加载动画
})
</script>

<style scoped>
#loading {
  position: fixed;
  inset: 0;
  background: #fff;
  display: grid;
  place-items: center;
  z-index: 9999;
}

#loading-center img {
  animation: spin 1.6s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); } 
  to   { transform: rotate(360deg); }
}
</style>
