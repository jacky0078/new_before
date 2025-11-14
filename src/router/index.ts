import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/Siderbar.vue'),
      children: [
        {
          path: 'chat',
          name: 'home-index',
          component: () => import('@/pages/Chat.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/SignUp.vue')
    },
    { path: "/", component: () => import("@/pages/Index.vue") },
    { path: "/add-doctor", component: () => import("@/pages/AddDoctor.vue") },
    { path: "/blank-page", component: () => import("@/pages/BlankPage.vue") },
    { path: "/calendar", component: () => import("@/pages/Calendar.vue") },
    { path: "/chart-am", component: () => import("@/pages/ChartAm.vue") },
    { path: "/chart-apex", component: () => import("@/pages/ChartApex.vue") },
    { path: "/chart-high", component: () => import("@/pages/ChartHigh.vue") },
    { path: "/chart-morris", component: () => import("@/pages/ChartMorris.vue") },
    { path: "/chat", component: () => import("@/pages/Chat.vue") },
    { path: "/dashboard-1", component: () => import("@/pages/Dashboard1.vue") },
    { path: "/dashboard-2", component: () => import("@/pages/Dashboard2.vue") },
    { path: "/dashboard-3", component: () => import("@/pages/Dashboard3.vue") },
    { path: "/data-table", component: () => import("@/pages/DataTable.vue") },
    { path: "/doctor-list", component: () => import("@/pages/DoctorList.vue") },
    { path: "/form-chechbox", component: () => import("@/pages/FormChechbox.vue") },
    { path: "/form-layout", component: () => import("@/pages/FormLayout.vue") },
    { path: "/form-radio", component: () => import("@/pages/FormRadio.vue") },
    { path: "/form-switch", component: () => import("@/pages/FormSwitch.vue") },
    { path: "/form-validation", component: () => import("@/pages/FormValidation.vue") },
    { path: "/form-wizard-validate", component: () => import("@/pages/FormWizardValidate.vue") },
    { path: "/form-wizard-vertical", component: () => import("@/pages/FormWizardVertical.vue") },
    { path: "/form-wizard", component: () => import("@/pages/FormWizard.vue") },
    { path: "/icon-dripicons", component: () => import("@/pages/IconDripicons.vue") },
    { path: "/icon-fontawesome-5", component: () => import("@/pages/IconFontawesome5.vue") },
    { path: "/icon-lineawesome", component: () => import("@/pages/IconLineawesome.vue") },
    { path: "/icon-remixicon", component: () => import("@/pages/IconRemixicon.vue") },
    { path: "/icon-unicons", component: () => import("@/pages/IconUnicons.vue") },
    { path: "/pages-comingsoon", component: () => import("@/pages/PagesComingsoon.vue") },
    { path: "/pages-confirm-mail", component: () => import("@/pages/PagesConfirmMail.vue") },
    { path: "/pages-error-500", component: () => import("@/pages/PagesError500.vue") },
    { path: "/pages-error", component: () => import("@/pages/PagesError.vue") },
    { path: "/pages-faq", component: () => import("@/pages/PagesFaq.vue") },
    { path: "/pages-invoice", component: () => import("@/pages/PagesInvoice.vue") },
    { path: "/pages-lock-screen", component: () => import("@/pages/PagesLockScreen.vue") },
    { path: "/pages-maintenance", component: () => import("@/pages/PagesMaintenance.vue") },
    { path: "/pages-map", component: () => import("@/pages/PagesMap.vue") },
    { path: "/pages-pricing-one", component: () => import("@/pages/PagesPricingOne.vue") },
    { path: "/pages-pricing", component: () => import("@/pages/PagesPricing.vue") },
    { path: "/pages-recoverpw", component: () => import("@/pages/PagesRecoverpw.vue") },
    { path: "/pages-timeline", component: () => import("@/pages/PagesTimeline.vue") },
    { path: "/profile-edit", component: () => import("@/pages/ProfileEdit.vue") },
    { path: "/profile", component: () => import("@/pages/Profile.vue") },
    { path: "/sign-in", component: () => import("@/pages/SignIn.vue") },
    { path: "/sign-up", component: () => import("@/pages/SignUp.vue") },
    { path: "/table-editable", component: () => import("@/pages/TableEditable.vue") },
    { path: "/tables-basic", component: () => import("@/pages/TablesBasic.vue") },
    { path: "/ui-alerts", component: () => import("@/pages/UiAlerts.vue") },
    { path: "/ui-badges", component: () => import("@/pages/UiBadges.vue") },
    { path: "/ui-breadcrumb", component: () => import("@/pages/UiBreadcrumb.vue") },
    { path: "/ui-buttons", component: () => import("@/pages/UiButtons.vue") },
    { path: "/ui-cards", component: () => import("@/pages/UiCards.vue") },
    { path: "/ui-carousel", component: () => import("@/pages/UiCarousel.vue") },
    { path: "/ui-colors", component: () => import("@/pages/UiColors.vue") },
    { path: "/ui-embed-video", component: () => import("@/pages/UiEmbedVideo.vue") },
    { path: "/ui-grid", component: () => import("@/pages/UiGrid.vue") },
    { path: "/ui-images", component: () => import("@/pages/UiImages.vue") },
    { path: "/ui-list-group", component: () => import("@/pages/UiListGroup.vue") },
    { path: "/ui-media-object", component: () => import("@/pages/UiMediaObject.vue") },
    { path: "/ui-modal", component: () => import("@/pages/UiModal.vue") },
    { path: "/ui-notifications", component: () => import("@/pages/UiNotifications.vue") },
    { path: "/ui-pagination", component: () => import("@/pages/UiPagination.vue") },
    { path: "/ui-popovers", component: () => import("@/pages/UiPopovers.vue") },
    { path: "/ui-progressbars", component: () => import("@/pages/UiProgressbars.vue") },
    { path: "/ui-tabs", component: () => import("@/pages/UiTabs.vue") },
    { path: "/ui-tooltips", component: () => import("@/pages/UiTooltips.vue") },
    { path: "/ui-typography", component: () => import("@/pages/UiTypography.vue") },
    { path: "/email-compose", component: () => import("@/pages/EmailCompose.vue") }
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
