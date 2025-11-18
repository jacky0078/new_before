<template>
   <!-- <div class="legacy-page"> -->

   <!-- Wrapper Start -->
   <!-- <div class="wrapper"> -->
   <!-- Sidebar  -->
   <!-- 引入Font Awesome图标库 -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
   <!-- Page Content  -->
   <div id="content-page" class="content-page">
      <!-- TOP Nav Bar -->
      <div class="iq-top-navbar header-top-sticky">
         <div class="iq-navbar-custom">


            <nav class="navbar navbar-expand-lg navbar-light p-0">
               <!-- 引入Font Awesome图标库 -->
               <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">


               <!-- Step 1: 填写图标 -->
               <span
                  :style="{
                     display: 'inline-flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     width: '30px',
                     height: '30px',
                     borderRadius: '50%',
                     backgroundColor: '#089bab',
                     position: 'relative',
                     left: '1%',
                     cursor: 'pointer'
                  }"
                  @click="showDialog()" title="请保存病人信息">
                  <i class="fas fa-pen-to-square" style="color: white; font-size: 16px;"></i>
               </span>
               <span style="color: #089bab;position: relative;left:1.5%"> Step 1:</span>
               <span style="position: relative;left:2%">保存病人信息</span>

               <!-- Step 2: 手指选择图标 -->
               <span
                  :style="{
                     display: 'inline-flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     width: '30px',
                     height: '30px',
                     borderRadius: '50%',
                     backgroundColor: '#089bab',
                     position: 'relative',
                     left: '15%',
                     cursor: 'pointer',
                     opacity: '1'
                  }"
                  @click="showExpertDialog()" 
                  title="选择医生专家">
                  <i class="fas fa-hand-pointer" style="color: white; font-size: 16px;"></i>
               </span>
               <span style="color: #089bab;position: relative;left:15.5%"> Step 2:</span>
               <span style="position: relative;left:16%">选择医生专家</span>

               <!-- Step 3: 加号图标 -->
               <span
                  style="display: inline-flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 50%; background-color: #089bab; position: relative; left: 30%; cursor: pointer;">
                  <i class="fas fa-plus" style="color: white; font-size: 16px;"></i>
               </span>
               <span style="color: #089bab;position: relative;left:30.5%"> Step 3:</span>
               <span style="position: relative;left:31%">开启会诊</span>


               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i class="ri-menu-3-line"></i>
               </button>

               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto navbar-list">
                     <li class="nav-item iq-full-screen">
                        <a href="#" class="iq-waves-effect" id="btnFullscreen" @click="newView"><i
                              class="ri-fullscreen-line"></i></a>
                     </li>

                     <!-- 信息图标代码结束 -->
                  </ul>
               </div>
               <ul class="navbar-list">
                  <li>
                     <a href="#" class="search-toggle iq-waves-effect d-flex align-items-center">

                        <img src="/assets/images/user/1.jpg" class="img-fluid rounded mr-3" alt="user">
                        <div class="caption">
                           <h6 class="mb-0 line-height">Bini Jets</h6>
                           <span class="font-size-12">Available</span>
                        </div>
                     </a>
                     <div class="iq-sub-dropdown iq-user-dropdown">
                        <div class="iq-card shadow-none m-0">
                           <div class="iq-card-body p-0 ">
                              <div class="bg-primary p-3">
                                 <h5 class="mb-0 text-white line-height">Hello Bini Jets</h5>
                                 <span class="text-white font-size-12">Available</span>
                              </div>
                              <a href="#" @click.prevent="$router.push('/profile')"
                                 class="iq-sub-card iq-bg-primary-hover">
                                 <div class="media align-items-center">
                                    <div class="rounded iq-card-icon iq-bg-primary">
                                       <i class="ri-file-user-line"></i>
                                    </div>
                                    <div class="media-body ml-3">
                                       <h6 class="mb-0 ">My Profile</h6>
                                       <p class="mb-0 font-size-12">View personal profile details.</p>
                                    </div>
                                 </div>
                              </a>
                              <a href="#" @click.prevent="$router.push('/profile-edit')"
                                 class="iq-sub-card iq-bg-primary-hover">
                                 <div class="media align-items-center">
                                    <div class="rounded iq-card-icon iq-bg-primary">
                                       <i class="ri-profile-line"></i>
                                    </div>
                                    <div class="media-body ml-3">
                                       <h6 class="mb-0 ">Edit Profile</h6>
                                       <p class="mb-0 font-size-12">Modify your personal details.</p>
                                    </div>
                                 </div>
                              </a>
                              <a href="#" class="iq-sub-card iq-bg-primary-hover">
                                 <div class="media align-items-center">
                                    <div class="rounded iq-card-icon iq-bg-primary">
                                       <i class="ri-account-box-line"></i>
                                    </div>
                                    <div class="media-body ml-3">
                                       <h6 class="mb-0 ">Account settings</h6>
                                       <p class="mb-0 font-size-12">Manage your account parameters.</p>
                                    </div>
                                 </div>
                              </a>
                              <a href="#" class="iq-sub-card iq-bg-primary-hover">
                                 <div class="media align-items-center">
                                    <div class="rounded iq-card-icon iq-bg-primary">
                                       <i class="ri-lock-line"></i>
                                    </div>
                                    <div class="media-body ml-3">
                                       <h6 class="mb-0 ">Privacy Settings</h6>
                                       <p class="mb-0 font-size-12">Control your privacy parameters.</p>
                                    </div>
                                 </div>
                              </a>
                              <div class="d-inline-block w-100 text-center p-3">
                                 <a class="bg-primary iq-sign-btn" href="#" @click.prevent="$router.push('/sign-in')"
                                    role="button">Sign out<i class="ri-login-box-line ml-2"></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </li>
               </ul>
            </nav>

         </div>
      </div>
      <!-- TOP Nav Bar END -->
      <div class="container-fluid">
         <div class="row">
            <!-- 初始状态下隐藏左侧聊天数据区域 -->
            <div class="col-lg-3 chat-data-left" v-if="conversationStarted" style="min-height: calc(100vh - 250px);">
               <div class="chat-sidebar-channel scroller pl-3 h-100" style="scrollbar-width: thin; scrollbar-color: #089bab #f1f1f1;">

                  <!-- 新建对话按钮 -->
                  <div class="my-4">
                     <button @click="newConversation" class="btn btn-primary btn-block"
                        style="background-color: #089bab; border: none; padding: 12px 0;">
                        <i class="fas fa-plus mr-2"></i>新建对话
                     </button>
                  </div>
                  
                  <!-- 历史对话区域 -->
                  <div class="p-4 bg-white rounded-lg border border-gray-200 mt-4">
                     <h5 class="text-center mb-3" style="color: #089bab;">历史对话</h5>
                     <div v-if="conversation_today.length > 0" class="history-conversation-list">
                        <div v-for="item in conversation_today.slice(0, 5)" :key="item.id" class="history-item p-2 border-b border-gray-100">
                           <div class="d-flex justify-content-between items-center">
                              <span class="message-role text-sm">{{ item.role }}:</span>
                              <span class="message-content text-sm text-gray-600">{{ item.content.substring(0, 20) }}...</span>
                           </div>
                        </div>
                     </div>
                     <div v-else class="text-center text-gray-500 text-sm">
                        暂无历史对话
                     </div>
                  </div>
               </div>
            </div>


            <!-- 初始状态下，聊天内容区域占据整个宽度 -->
            <div :class="['chat-data', 'p-0', 'd-flex', 'flex-column', { 'col-lg-9': conversationStarted, 'col-lg-12': !conversationStarted }]" :style="conversationStarted ? { 'min-height': 'calc(100vh - 250px)', 'position': 'relative' } : { 'min-height': 'calc(100vh - 250px)' }">
               <div class="tab-content">
                  

                  <div class="tab-pane fade active show" id="chatbox1" role="tabpanel" style="display: flex; flex-direction: column; height: 100%;">
                     <!-- 上部分：专家选择 -->
                     <div class="chat-head">
                        <header class="d-flex justify-content-between align-items-center pt-3 pr-3 pb-3">
                           <div class="d-flex align-items-center flex-wrap">
                              <!-- 动态显示选中的专家 -->
                              <div v-if="selectedExperts.length > 0" class="d-flex flex-wrap h-100 align-items-center">
                                 <div v-for="expert in selectedExperts" :key="expert.id"
                                    class="mr-4 h-100 flex items-center">
                                    <img :src="expert.avatar" :alt="expert.name" class="avatar-40 rounded mr-2">
                                    <span class="expert-department">{{ expert.name.replace('专家', '') }}</span>
                                 </div>
                              </div>
                              <!-- 当没有选中专家时显示默认标题 -->
                           </div>
                        </header>
                     </div>
                     
                     <!-- 中间部分：聊天内容区域 -->
                     <div class="chat-content flex-grow-1 overflow-auto" v-if="conversationStarted">
                        <!-- 聊天消息将显示在这里 -->
                     </div>
                     
                     <!-- 开始聊天按钮 -->
                     <div class="chat-start flex-grow-1 d-flex flex-column justify-center items-center" v-if="!conversationStarted">
                        <span class="iq-start-icon text-primary"><i class="ri-message-3-line"></i></span>
                        <button id="chat-start" class="btn bg-primary mt-3" @click="startConversation">Start Conversation!</button>
                     </div>



                     <!-- 底部：发送消息框架 -->
                    <div class="chat-footer p-3 bg-white mb-0" v-if="conversationStarted" style="position: absolute; bottom: 0; left: 0; right: 0; z-index: 100; margin-bottom: 0;">
                        <form class="d-flex align-items-center" action="javascript:void(0);">
                           <div class="chat-attagement d-flex">
                              <a href="javascript:void();"><i class="fa fa-smile-o pr-3" aria-hidden="true"></i></a>
                              <a href="javascript:void();"><i class="fa fa-paperclip pr-3" aria-hidden="true"></i></a>
                           </div>
                           <input type="text" class="form-control mr-3" placeholder="Type your message">
                           <button type="submit" class="btn btn-primary d-flex align-items-center p-2"><i
                                 class="fa fa-paper-plane-o" aria-hidden="true"></i><span
                                 class="d-none d-lg-block ml-1">Send</span></button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>




      <!-- Footer -->
      <footer class="bg-white iq-footer mt-4">
         <div class="container-fluid">
            <div class="row">
               <div class="col-lg-6">
                  <ul class="list-inline mb-0">
                     <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
                     <li class="list-inline-item"><a href="#">Terms of Use</a></li>
                  </ul>
               </div>
               <div class="col-lg-6 text-right">
                  Copyright 2020 更多模板：<a href="https://www.uimaker.com/" target="_blank">uimaker</a> All Rights
                  Reserved.
               </div>
            </div>
         </div>
      </footer>
      <!-- Footer END -->

   </div>
   <el-dialog v-model="dialogVisible" title="填写病人信息">
      <el-form :model="patient" style="margin-top:3%">
         <el-form-item label="主诉症状:">
            <el-input v-model="patient.main_complaint" placeholder="例如:左眼红,眼痛,流泪3天" type="textarea"></el-input>
         </el-form-item>
         <el-form-item label="持续时间:">
            <el-select v-model="patient.duration" placeholder="请选择持续时间">
               <el-option label="3天内" value="三天内"></el-option>
               <el-option label="3天至7天" value="三天至七天"></el-option>
               <el-option label="7天以上30天以内" value="七天至三十天"></el-option>
               <el-option label="30天以上" value="三十天以上"></el-option>
            </el-select>
         </el-form-item>
         <el-form-item label="眼部手术:">
            <el-input v-model="patient.eye_operation" placeholder="例如:白内障手术,一年前" type="textarea"></el-input>
         </el-form-item>
         <el-form-item label="慢性疾病:">
            <el-checkbox-group v-model="patient.chronic_disease">
               <el-checkbox label="高血压">高血压</el-checkbox>
               <el-checkbox label="糖尿病">糖尿病</el-checkbox>
               <el-checkbox label="心脏病">心脏病</el-checkbox>
               <el-checkbox label="自身免疫性疾病">自身免疫性疾病</el-checkbox>
               <el-checkbox label="甲状腺疾病">甲状腺疾病</el-checkbox>
            </el-checkbox-group>
         </el-form-item>
         <el-form-item label="药物过敏:">
            <el-input v-model="patient.drug_allergy" placeholder="例如:青霉素,青霉素类" type="textarea"></el-input>
         </el-form-item>
         <el-form-item label="长期用药:">
            <el-input v-model="patient.long_term_drug" placeholder="例如:阿司匹林,阿司匹林类" type="textarea"></el-input>
         </el-form-item>
         <el-form-item style="margin-top:4%">
            <el-button type="primary" style="position:relative;left:85%" @click="savePatient()">保存病例</el-button>
         </el-form-item>
      </el-form>
   </el-dialog>
   <el-dialog v-model="dialogVisibleForHistory" title="历史对话" :fullscreen="false" :before-close="handleClose"
      width="50%">
      <div style="max-height: 500px; overflow-y: auto; padding: 10px;">
         <div v-for="item in conversation_today" :key="item.id">
            <div class="conversation-item">
               <span class="message-role">{{ item.role }}:</span>
               <span class="message-content">{{ item.content }}</span>
            </div>
         </div>
      </div>

   </el-dialog>
   
   <!-- 专家选择对话框 -->
   <el-dialog v-model="dialogVisibleForExperts" title="选择医生专家" :fullscreen="false" width="80%">
      <div class="expert-selection-container">
         <h3 style="margin-bottom: 20px; color: #089bab;">请选择您需要咨询的专家</h3>
         <div class="expert-grid">
            <div 
               v-for="expert in experts" 
               :key="expert.id"
               class="expert-card"
               :class="{ 'selected': isExpertSelected(expert.id) }"
               @click="selectExpert(expert.id)"
            >
               <div class="expert-avatar">
                  <img :src="expert.avatar" :alt="expert.name" class="avatar-80 rounded">
                  <span class="avatar-status"><i class="ri-checkbox-blank-circle-fill text-success"></i></span>
               </div>
               <div class="expert-info">
                  <h4 class="expert-name">{{ expert.name }}</h4>
                  <p class="expert-english-name">{{ expert.englishName }}</p>
               </div>
               <div v-if="isExpertSelected(expert.id)" class="selected-indicator">
                  <i class="fas fa-check-circle" style="color: #089bab; font-size: 24px;"></i>
               </div>
            </div>
         </div>
      </div>
      <template #footer>
         <span class="dialog-footer">
            <el-button @click="dialogVisibleForExperts = false">取消</el-button>
            <el-button type="primary" @click="confirmExpertSelection()" :disabled="selectedExperts.length === 0">
               确认选择
            </el-button>
         </span>
      </template>
   </el-dialog>
</template>

<script setup>
// static migration: original JS (if any) loads globally via index.html
import { io } from 'socket.io-client'
import { ref, reactive } from 'vue'
import { onMounted } from 'vue'
import { Plus, Document, DArrowRight, List } from '@element-plus/icons-vue'
import axios from 'axios'
const io_url = 'http://127.0.0.1:5000'
const socket = io(io_url)
const session_id = ref('')
const dialogVisible = ref(false)
const dialogVisibleForHistory = ref(false)
const dialogVisibleForExperts = ref(false) // 专家选择对话框
const patient = reactive({})
const event1 = ref(false)
const event2 = ref(false)
const event3 = ref(false)
const conversationStarted = ref(false)
//用于存储信息
const message = ref([])
const conversation_today = ref([
   { id: 1, role: 'user', content: '你好' },
   { id: 2, role: 'assistant', content: '你好，我是心内科专家' },
   { id: 3, role: 'user', content: '我想知道心跳率的正常范围' },
   { id: 4, role: 'assistant', content: '心跳率的正常范围是60次/分至100次/分' },
   { id: 5, role: 'user', content: '我想知道血压的正常范围' },
   { id: 6, role: 'assistant', content: '血压的正常范围是120/80至140/90' },
   { id: 7, role: 'user', content: '我想知道心率的正常范围' },
   { id: 8, role: 'assistant', content: '心率的正常范围是60次/分至100次/分' },
   { id: 9, role: 'assistant', content: '心率的正常范围是60次/分至100次/分' }
])
const conversation_last_7_days = ref([])
const conversation_last_30_days = ref([])
const conversation_before_30_days = ref([])

// 专家数据
const experts = ref([
   { id: 'ophthalmologist', name: '眼科专家', englishName: 'Ophthalmologist', avatar: '/assets/images/user/05.jpg' },
   { id: 'radiology', name: '放射科专家', englishName: 'Radiologist', avatar: '/assets/images/user/06.jpg' },
   { id: 'infectious', name: '感染科专家', englishName: 'Infectious Specialist', avatar: '/assets/images/user/07.jpg' },
   { id: 'neuroscience', name: '神经科专家', englishName: 'Neurology Specialist', avatar: '/assets/images/user/08.jpg' },
   { id: 'endocrinology', name: '内分泌科专家', englishName: 'Endocrinologist', avatar: '/assets/images/user/09.jpg' }
])

// 存储选中的专家
const selectedExperts = ref([])
onMounted(() => {
   if (localStorage.getItem('session_id') != null) {
      session_id.value = localStorage.getItem('session_id')
   } else {
      axios.get(io_url + '/api/get_session_id', { params: { username: 'user1' } }).then(res => {
         session_id.value = res.data.session_id
         localStorage.setItem('session_id', res.data.session_id)
      })
   }
})
const getHistory = () => {
   dialogVisibleForHistory.value = true
   axios.get(io_url + '/api/user_conversation', { params: { username: 'user1' } }).then(res => {
      conversation_today.value = res.data.conversation_today
      conversation_last_7_days.value = res.data.conversation_last_7_days
      conversation_last_30_days.value = res.data.conversation_last_30_days
      conversation_before_30_days.value = res.data.conversation_before_30_days
   })
}

// 新建对话，清空聊天框
const newConversation = () => {
   message.value = []
   // 可以添加其他逻辑，比如通知用户对话已重置等
}


// 对话框关闭前的处理函数
const handleClose = (done) => {
   done();
}
const savePatient = () => {
   socket.emit
   dialogVisible.value = false
   event1.value = true
}
const newView = () => {
   // 清空message
   message.value = []
   //获取后端新的的session_id同时写入前端的session_id,移除掉旧的localstorage中的session_id

}
const showDialog = () => {
   dialogVisible.value = true
}

const showExpertDialog = () => {
   dialogVisibleForExperts.value = true
}

// 选择专家函数
const selectExpert = (expertId) => {
   // 查找专家是否已经被选中
   const existingIndex = selectedExperts.value.findIndex(expert => expert.id === expertId);

   if (existingIndex > -1) {
      // 如果已选中，则移除（退出）
      selectedExperts.value.splice(existingIndex, 1);
   } else {
      // 如果未选中，则添加
      const expert = experts.value.find(e => e.id === expertId);
      if (expert) {
         selectedExperts.value.push(expert);
      }
   }
}

const isExpertSelected = (expertId) => {
   return selectedExperts.value.some(expert => expert.id === expertId);
}

const confirmExpertSelection = () => {
   // 设置步骤2完成
   event2.value = true;
   // 关闭对话框
   dialogVisibleForExperts.value = false;
   // 可以在这里添加其他逻辑，比如显示选择成功的提示
}

const startConversation = () => {
   // 设置对话已开始
   conversationStarted.value = true;
   // 直接显示Step 1的病人信息对话框
   showDialog();
}

</script>
<style>
.box-item {
   width: 110px;
   margin-top: 10px;
}

/* Dialog字体放大全局样式 */
.el-dialog {
   font-size: 18px !important;
}

/* Dialog标题样式 */
.el-dialog__title {
   font-size: 22px !important;
   font-weight: bold !important;
}

/* 表单标签样式 */
.el-form-item__label {
   font-size: 18px !important;
   font-weight: 500 !important;
}

/* 输入框样式 */
.el-input__inner,
.el-textarea__inner,
.el-select__input {
   font-size: 18px !important;
   padding: 12px !important;
}

/* 复选框和选项样式 */
.el-checkbox__label,
.el-option__label {
   font-size: 18px !important;
}

/* 按钮样式 */
.el-button {
   font-size: 18px !important;
   padding: 12px 24px !important;
}

/* 确保Dialog内容区域所有文本都被放大 */
.el-dialog__body * {
   font-size: inherit !important;
}

/* 专家列表项样式 */
.expert-item {
   transition: all 0.2s ease;
   border: 2px solid transparent;
}

.expert-item:hover {
   background-color: rgba(0, 0, 0, 0.05);
   transform: translateY(-1px);
}

.expert-item.selected {
   background-color: rgba(0, 86, 179, 0.1);
   /* 深蓝色背景 */
   border-color: hsl(189, 100%, 35%);
   /* 医生专用深蓝色 */
   border-width: 2px;
   border-style: solid;
}

/* 头像悬停提示样式 */
.relative {
   position: relative;
}

.tooltip {
   position: relative;
   display: inline-block;
}

.tooltip .tooltiptext {
   visibility: hidden;
   background-color: #555;
   color: white;
   text-align: center;
   border-radius: 6px;
   padding: 5px 10px;
   position: absolute;
   z-index: 1;
   bottom: 125%;
   left: 50%;
   margin-left: -60px;
   opacity: 0;
   transition: opacity 0.3s;
   font-size: 12px;
   white-space: nowrap;
}

.tooltip:hover .tooltiptext {
   visibility: visible;
   opacity: 1;
}

/* 专家头像样式 */
.expert-avatar {
   display: inline-flex;
   align-items: center;
   margin-right: 15px;
   padding: 8px;
   border: 1px solid #e9ecef;
   border-radius: 5px;
   cursor: pointer;
   transition: all 0.3s ease;
}

.expert-info {
   display: flex;
   flex-direction: column;
   margin-left: 8px;
   gap: 2px;
}

.expert-name {
   font-size: 14px;
   font-weight: 500;
}

.expert-department {
   font-size: 12px;
   color: #6c757d;
}

/* 头像大小调整 */
.avatar-40 {
   width: 40px;
   height: 40px;
}

.cursor-pointer {
   cursor: pointer;
}

/* 发亮脉冲动画 */
@keyframes pulse-glow {
   0% {
      box-shadow: 0 0 0 0 rgba(226, 43, 10, 0.7);
   }
   70% {
      box-shadow: 0 0 0 10px rgba(8, 155, 171, 0);
   }
   100% {
      box-shadow: 0 0 0 0 rgba(8, 155, 171, 0);
   }
}

/* 专家选择对话框样式 */
.expert-selection-container {
   padding: 20px;
}

.expert-grid {
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
   gap: 20px;
   margin-top: 20px;
}

.expert-card {
   border: 2px solid #e9ecef;
   border-radius: 12px;
   padding: 20px;
   text-align: center;
   cursor: pointer;
   transition: all 0.3s ease;
   position: relative;
}

.expert-card:hover {
   transform: translateY(-5px);
   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
   border-color: #089bab;
}

.expert-card.selected {
   border-color: #089bab;
   background-color: rgba(8, 155, 171, 0.05);
   box-shadow: 0 0 0 3px rgba(8, 155, 171, 0.2);
}

.expert-avatar {
   display: inline-block;
   position: relative;
   margin-bottom: 15px;
}

.avatar-80 {
   width: 80px;
   height: 80px;
}

.expert-info h4 {
   margin: 10px 0 5px 0;
   font-size: 18px;
   color: #333;
}

.expert-info p {
   margin: 0;
   color: #6c757d;
   font-size: 14px;
}

.selected-indicator {
   position: absolute;
   top: 10px;
   right: 10px;
}
</style>
<style scoped>
.conversation-item {
   padding: 12px 16px;
   margin: 8px 0;
   border-radius: 8px;
   transition: all 0.3s ease;
   cursor: pointer;
   display: flex;
   align-items: center;
}

.conversation-item:hover {
   transform: translateY(-2px);
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.user-message {
   background-color: #E3F2FD;
   margin-left: auto;
   margin-right: 10px;
   max-width: 80%;
}

.assistant-message {
   background-color: #F1F8E9;
   margin-left: 10px;
   margin-right: auto;
   max-width: 80%;
}

.message-role {
   font-weight: bold;
   margin-right: 8px;
}

.user-message .message-role {
   color: #1976D2;
}

.assistant-message .message-role {
   color: #558B2F;
}

.message-content {
   word-break: break-word;
}
</style>