import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    
    { path: "/", component: () => import("@/pages/SignIn.vue") },
    { path: "/chat", component: () => import("@/pages/Chat.vue") },
   
  ]
})

// ✅ 每次切换页面后执行旧模板逻辑
router.afterEach(() => {
  setTimeout(() => {
    // 模板初始化（菜单、动画、计数器）
    // @ts-ignore
    window.TemplateInit && window.TemplateInit();

    // 图表绘制
    // @ts-ignore
    window.RenderCharts && window.RenderCharts();

    // 表格（如果有 DataTable）
    // @ts-ignore
    window.InitTables && window.InitTables();

  }, 600); // 给 Vue 一点时间完成 DOM 渲染
});


export default router
