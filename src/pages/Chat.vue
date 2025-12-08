<template>
   <!-- Sidebar 左栏-->
   <div class="iq-sidebar" style="display: flex; flex-direction: column; height: 100vh;background-color: white;">
      <!-- 最上面：Logo图片 -->
      <div class="iq-sidebar-logo d-flex justify-content-center ">
         <a href="#">
            <img src="/assets/images/logo.png" class="img-fluid" alt="" style="width: 200px;height: 90px;">
         </a>
      </div>
      
      <!-- 中间：新对话按钮 -->
      <div class="p-3">
         <button class="btn w-100 py-3 iq-waves-effect" style="border-radius: 50px !important;background-color: white; color: #089bab; border: 1px solid #089bab" @click="resetChatPage">
            <i class="ri-message-fill mr-2"></i>新对话
         </button>
      </div>
      
      <!-- 下面：历史对话（占据剩余空间） -->
      <div class="chat-sidebar-channel flex-grow-1" style="scrollbar-width: thin; scrollbar-color: #fafafa #f1f1f1; padding: 10px; overflow-y: auto;">
         <h5 class=" mb-2 p-1" style="color: black; font-size: 14px;">
            历史对话
            <i class="fas fa-sync-alt ml-1" @click="refreshConversations"
               style="cursor: pointer; font-size: 12px;" title="刷新会话列表"></i>
         </h5>
         <div v-loading="loadingConversation" element-loading-text="加载中..."
            element-loading-spinner="el-icon-loading">
            <!-- 今天的对话 -->
            <div v-if="conversation_today.length > 0" class="history-group">
               <h6 class="history-group-title" style="font-size: 12px;">
                  <i class="fas fa-clock mr-1"></i>
                  今天 <span class="conversation-count">({{ conversation_today.length }})</span>
               </h6>
               <div v-for="(item, index) in conversation_today" :key="`today-${index}`"
                  class="doubao-history-item conversation-item p-2 mb-1 rounded-lg" style="font-size: 12px;"
                  @click="loadConversationDetail(item)">
                  <div class="conversation-content line-clamp-2">{{ item.overview }}</div>
                  <div class="conversation-actions" style="font-size: 10px;">
                     <i class="fas fa-edit text-blue-500 mr-2" @click.stop="renameConversation(item)"
                        title="重命名会话"></i>
                     <i class="fas fa-trash-alt text-red-500" @click.stop="deleteConversation(item.session_id)"
                        title="删除会话"></i>
                  </div>
               </div>
            </div>
            <!-- 最近7天的对话 -->
            <div v-if="conversation_last_7_days.length > 0" class="history-group">
               <h6 class="history-group-title" style="font-size: 12px;">
                  <i class="fas fa-calendar-alt mr-1"></i>
                  最近7天 <span class="conversation-count">({{ conversation_last_7_days.length }})</span>
               </h6>
               <div v-for="(item, index) in conversation_last_7_days" :key="`week-${index}`"
                  class="doubao-history-item conversation-item p-2 mb-1 rounded-lg" style="font-size: 12px;"
                  @click="loadConversationDetail(item)">
                  <div class="conversation-content line-clamp-2">{{ item.overview }}</div>
                  <div class="conversation-actions" style="font-size: 10px;">
                     <i class="fas fa-edit text-blue-500 mr-2" @click.stop="renameConversation(item)"
                        title="重命名会话"></i>
                     <i class="fas fa-trash-alt text-red-500" @click.stop="deleteConversation(item.session_id)"
                        title="删除会话"></i>
                  </div>
               </div>
            </div>
            <!-- 最近30天的对话 -->
            <div v-if="conversation_last_30_days.length > 0" class="history-group">
               <h6 class="history-group-title" style="font-size: 12px;">
                  <i class="fas fa-calendar-week mr-1"></i>
                  最近30天 <span class="conversation-count">({{ conversation_last_30_days.length }})</span>
               </h6>
               <div v-for="(item, index) in conversation_last_30_days" :key="`month-${index}`"
                  class="doubao-history-item conversation-item p-2 mb-1 rounded-lg" style="font-size: 12px;"
                  @click="loadConversationDetail(item)">
                  <div class="conversation-content line-clamp-2">{{ item.overview }}</div>
                  <div class="conversation-actions" style="font-size: 10px;">
                     <i class="fas fa-edit text-blue-500 mr-2" @click.stop="renameConversation(item)"
                        title="重命名会话"></i>
                     <i class="fas fa-trash-alt text-red-500" @click.stop="deleteConversation(item.session_id)"
                        title="删除会话"></i>
                  </div>
               </div>
            </div>
            <!-- 30天前的对话 -->
            <div v-if="conversation_before_30_days.length > 0" class="history-group">
               <h6 class="history-group-title" style="font-size: 12px;">
                  <i class="fas fa-history mr-1"></i>
                  30天前 <span class="conversation-count">({{ conversation_before_30_days.length }})</span>
               </h6>
               <div v-for="(item, index) in conversation_before_30_days" :key="`before-${index}`"
                  class="doubao-history-item conversation-item p-2 mb-1 rounded-lg" style="font-size: 12px;"
                  @click="loadConversationDetail(item)">
                  <div class="conversation-content line-clamp-2">{{ item.overview }}</div>
                  <div class="conversation-actions" style="font-size: 10px;">
                     <i class="fas fa-edit text-blue-500 mr-2" @click.stop="renameConversation(item)"
                        title="重命名会话"></i>
                     <i class="fas fa-trash-alt text-red-500" @click.stop="deleteConversation(item.session_id)"
                        title="删除会话"></i>
                  </div>
               </div>
            </div>
            <!-- 暂无历史对话记录提示 -->
            <div
               v-if="!loadingConversation && conversation_today.length === 0 && conversation_last_7_days.length === 0 && conversation_last_30_days.length === 0 && conversation_before_30_days.length === 0"
               class=" text-gray-500 py-3">
               <i class="fas fa-comments-slash text-xl mb-1 text-gray-300"></i>
               <p style="font-size: 11px;">暂无历史对话记录</p>
               <p style="font-size: 10px; color: #999;">开始新的对话，与专家交流您的健康问题</p>
            </div>
         </div>
      </div>
   </div>
   <!-- 引入Font Awesome图标库 -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
   <!-- Page Content  即sidebar右边内容-->
   <div id="content-page" class="content-page">
      <!-- TOP Nav Bar -->
      <div class="iq-top-navbar header-top-sticky">
         <div class="iq-navbar-custom">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
               <!-- Step 1: 点击新对话 -->
               <span :style="{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: '#089bab',
                  position: 'relative',
                  left: '1%',
                  cursor: 'default'
               }" title="点击新对话">
                  <i class="fas fa-comment-alt" style="color: white; font-size: 16px;"></i>
               </span>
               <span style="color: #089bab;position: relative;left:1.5%"> Step 1:</span>
               <span style="position: relative;left:2%">点击新对话</span>
               <!-- Step 2: 填写图标 -->
               <span :style="{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: '#089bab',
                  position: 'relative',
                  left: '15%',
                  cursor: 'default'
               }" title="请保存病人信息">
                  <i class="fas fa-pen-to-square" style="color: white; font-size: 16px;"></i>
               </span>
               <span style="color: #089bab;position: relative;left:15.5%"> Step 2:</span>
               <span style="position: relative;left:16%">保存病人信息</span>
               <!-- Step 3: 手指选择图标 -->
               <span :style="{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: '#089bab',
                  position: 'relative',
                  left: '30%',
                  cursor: 'default',
                  opacity: '1'
               }" title="选择医生专家">
                  <i class="fas fa-hand-pointer" style="color: white; font-size: 16px;"></i>
               </span>
               <span style="color: #089bab;position: relative;left:30.5%"> Step 3:</span>
               <span style="position: relative;left:31%">选择医生专家</span>
               <!-- 全屏图标 -->
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto navbar-list">
                     <li class="nav-item iq-full-screen">
                        <a href="#" class="iq-waves-effect" id="btnFullscreen"><i class="ri-fullscreen-line"></i></a>
                     </li>
                  </ul>
               </div>
               <!-- 退出登录 -->
               <div class="dropdown">
                  <a href="#" class="search-toggle iq-waves-effect d-flex align-items-center" data-toggle="dropdown">
                     <img src="/assets/images/user/1.jpg" class="img-fluid rounded mr-3 align-items-center" alt="user"
                        style="width: 52px; height: 52px;  margin: auto;">
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                     <a class="dropdown-item text-gray" href="#" @click.prevent="$router.push('/')">
                        退出<i class="ri-login-box-line ml-2"></i>
                     </a>
                  </div>
               </div>

            </nav>
         </div>
      </div>
      <!-- TOP Nav Bar END -->
      <div class="container-fluid">
         <div class="row">
            <!-- 初始状态下，聊天内容区域只占据聊天内容区域 -->
            <div :class="['chat-data', 'p-0', 'd-flex', 'flex-column', 'col-12']"
               :style="conversationStarted ? { 'min-height': 'calc(100vh - 150px)', 'position': 'relative' } : { 'min-height': 'calc(100vh - 150px)' }">
               <div class="tab-content">
                  <div class="tab-pane fade active show" id="chatbox1" role="tabpanel"
                     style="display: flex; flex-direction: column; height: 100%;">
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
                           <!-- 加号按钮，点击跳转到专家选择框 -->
                           <button class="btn p-2 shadow-sm d-flex align-items-center justify-content-center"
                              style="background-color: #ceebee; border-radius: 4px; border: 1px solid #91d5ff;"
                              @click="show()" title="选择专家">
                              <i class="fas fa-plus" style="font-size: 26px; margin: 0; color: #089bab;"></i>
                           </button>
                        </header>
                     </div>
                     <!--聊天内容区域  聊天内容显示-->
                     <div class="chat-content flex-grow-1 overflow-auto" v-if="conversationStarted" style="height:70vh">
                        <!-- 等待专家回答的动画 -->
                        <div v-if="showWaitingAnimation" class="waiting-animation-wrapper" style="display: flex; justify-content: center; align-items: center; padding: 20px;">
                          <div id="waiting-animation-container" style="width: 200px; height: 200px;"></div>
                        </div>
                        <div v-for="message in messages" :key="message.id"
                           :class="['message-item', 
                                     message.speaker === 'user' ? 'user-message' : 
                                     message.speaker === 'report' ? 'report-message' : 'expert-message']">
                           <!-- 用户消息 -->
                           <div v-if="message.speaker === 'user'" class="message-wrapper user-wrapper">
                              <img src="/assets/images/user/1.jpg" alt="用户头像" class="message-avatar user-avatar">
                              <div class="message-content-container">
                                 <div class="message-header1"> <span class="message-role">用户</span>
                                 </div>
                                 <div class="message-body" v-html="message.content"></div>
                              </div>
                           </div>
                           <!-- 专家消息 -->
                           <div v-else-if="message.speaker !== 'report'" class="message-wrapper expert-wrapper"> <img
                                 :src="getExpertAvatar(message.speaker)" alt="专家头像"
                                 class="message-avatar expert-avatar">
                              <div class="message-content-container">
                                 <div class="message-header"> <span class="message-role">{{
                                    getExpertName(message.speaker) }}</span>
                                 </div>
                                 <div class="message-body" v-html="message.content"></div>
                              </div>
                           </div>
                           <!-- 会诊报告消息 -->
                           <div v-else class="message-wrapper report-wrapper">
                               
                              <div class="message-content-container">
                                 <div class="message-header" style="text-align: center; margin-bottom: 10px;"> <span class="message-role" style="color: #089bab; font-size: 18px; font-weight: bold;">会诊报告</span>
                                 </div>
                                 <div class="message-body report-body" 
                                      style="background-color: #e6f7f8; border-color: #089bab;">
                                    <span v-html="message.content"></span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <!-- 开始聊天按钮 -->
                     <div class="chat-start flex-grow-1 d-flex flex-column justify-center items-center"
                        v-if="!conversationStarted">
                        <span class="iq-start-icon text-primary"><i class="ri-message-3-line"></i></span>
                        <button id="chat-start" class="btn bg-primary mt-3" @click="startConversation">Start
                           Conversation!</button>
                     </div>
                     <!-- 底部：发送消息框架 -->
                  </div>
               </div>
               <div class="chat-footer  bg-white mb-0" v-if="conversationStarted" style="padding: 10px 10px 10px 10px;">
                  <form class="d-flex align-items-center" action="javascript:void(0);"style="padding: 10px 10px 10px 10px;">
                     <div class="chat-attagement d-flex">
                        <a href="javascript:void();"><i class="fa fa-paperclip pr-3" aria-hidden="true"></i></a>
                     </div>
                     <textarea class="form-control mr-3" placeholder="请添加补充信息" v-model="messageInput" rows="1"></textarea>
                     <button type="button" class="btn btn-primary d-flex align-items-center justify-content-center p-3 mr-2" style="min-width: 48px; height: 48px; font-size: 18px;" @click="hasStarted ? handleButtonClick() : sendMessage()" :disabled="!messageInput && !hasStarted">
                        <i :class="{
                           'fa fa-paper-plane-o': !hasStarted,
                           'fa fa-pause': hasStarted && !isPaused,
                           'fa fa-play': hasStarted && isPaused
                        }" style="font-size: 20px;" aria-hidden="true"></i>
                     </button>

                  </form>
               </div>
            </div>
         </div>
      </div>

   </div>
   <el-dialog v-model="dialogVisible" title="填写病人信息" :show-close="false">
      <el-form :model="patient" style="margin-top:3%">
          <el-form-item label="患者姓名:">
            <el-input v-model="patient.name" placeholder="请输入患者姓名" aria-required="true"></el-input>
         </el-form-item>
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
               <el-checkbox label="高血压" value="高血压">高血压</el-checkbox>
               <el-checkbox label="糖尿病" value="糖尿病">糖尿病</el-checkbox>
               <el-checkbox label="心脏病" value="心脏病">心脏病</el-checkbox>
               <el-checkbox label="自身免疫性疾病" value="自身免疫性疾病">自身免疫性疾病</el-checkbox>
               <el-checkbox label="甲状腺疾病" value="甲状腺疾病">甲状腺疾病</el-checkbox>
               <el-checkbox label="其他" value="其他">其他</el-checkbox>
            </el-checkbox-group>
            <!-- 当'其他'被选中时显示输入框 -->
            <el-input v-if="patient.chronic_disease && patient.chronic_disease.includes('其他')"
               v-model="patient.other_chronic_disease" placeholder="请输入其他慢性疾病" style="margin-top: 10px;"></el-input>
         </el-form-item>
         <el-form-item label="药物过敏:">
            <el-input v-model="patient.drug_allergy" placeholder="例如:青霉素,青霉素类" type="textarea"></el-input>
         </el-form-item>
         <el-form-item label="长期用药:">
            <el-input v-model="patient.long_term_drug" placeholder="例如:阿司匹林,阿司匹林类" type="textarea"></el-input>
         </el-form-item>
         <el-form-item style="margin-top:4%; display: flex; justify-content: flex-end;">
            <el-button type="primary"
               style="background-color: #089bab; border-color: #089bab;position: relative;left: 85%;"
               @click="savePatient()">下一步</el-button>
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
   <el-dialog v-model="dialogVisibleForExperts" title="选择医生专家" :fullscreen="false" width="80%" :show-close="false">
      <div class="expert-selection-container">
         <h3 style="margin-bottom: 20px; color: #089bab;">请选择您需要咨询的专家</h3>
         <div class="expert-grid">
            <div v-for="expert in experts" :key="expert.id" class="expert-card"
               :class="{ 'selected': isExpertSelected(expert.id), 'gold-border': expert.required, 'not-selectable': expert.required && isExpertSelected(expert.id) }" 
               @click="selectExpert(expert.id)">
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
            <el-button @click="backToCase()" v-if="!visibility"
               style="background-color: #089bab; border-color: #089bab;color: #f1f1f1;">上一步</el-button>
            <el-button type="primary" @click="confirmExpertSelection()"
               style="background-color: #089bab; border-color: #089bab;" :disabled="selectedExperts.length === 0">
               {{ visibility ? '确认' : '确认开启会诊' }}
            </el-button>
         </span>
      </template>
   </el-dialog>


   <!-- 重命名会话对话框 -->
   <el-dialog v-model="renameDialogVisible" title="重命名会话" width="40%">
      <el-form>
         <el-form-item label="新标题:">
            <el-input v-model="newOverview" placeholder="请输入新的会话标题" type="textarea"></el-input>
         </el-form-item>
      </el-form>
      <template #footer>
         <span class="dialog-footer">
            <el-button @click="renameDialogVisible = false">取消</el-button>
            <el-button type="primary" style="background-color: #089bab; border-color: #089bab;" @click="saveRename">确认</el-button>
         </span>
      </template>
   </el-dialog>
   
   <!-- 会诊报告对话框 -->
   <el-dialog v-model="dialogVisibleForReport" title="会诊报告" width="90%" fullscreen>
      <div class="report-container" v-html="reportHtml"></div>
      <template #footer>
         <el-button @click="dialogVisibleForReport = false">关闭</el-button>
         <el-button type="primary" @click="exportToPdf" style="background-color: #089bab; border-color: #089bab;">
            导出PDF
         </el-button>
      </template>
   </el-dialog>

</template>

<script setup>
// static migration: original JS (if any) loads globally via index.html
import { io } from 'socket.io-client'
import { ref, reactive, computed, onMounted, nextTick } from 'vue'
import { Plus, Document, DArrowRight, List } from '@element-plus/icons-vue'
import axios from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import he from 'he'
import lottie from 'lottie-web'
const io_url = 'http://127.0.0.1:5000'
const socket = io(io_url)
const dialogVisible = ref(false)//填写病人信息
const dialogVisibleForHistory = ref(false)
const dialogVisibleForExperts = ref(false) // 专家选择对话框
const patient = reactive({})
const event1 = ref(false)
const event2 = ref(false)
const event3 = ref(false)
const conversationStarted = ref(false)
const dialogVisibleForChat = ref(false)//填写对话信息
const userInput = ref('')
const current_session_id = ref('')
const token = ref('')
//token里面存储的是username
const activeTab = ref('today') // 历史对话标签页，默认选中今天
//用于存储信息
const messages = ref([])
const id = ref(0)
// 历史会话数据 - 初始为空数组，将从后端获取
const conversation_today = ref([])
const conversation_last_7_days = ref([])
const conversation_last_30_days = ref([])
const conversation_before_30_days = ref([])
// 等待动画显示状态
const showWaitingAnimation = ref(false)

// 重命名会话相关状态
const renameDialogVisible = ref(false)
const currentRenameItem = ref(null)
const newOverview = ref('')

// 会话加载状态
const loadingConversation = ref(false)

// 会诊报告相关
const dialogVisibleForReport = ref(false)
const reportHtml = ref('')

// 合并所有对话记录为一个数组，按时间倒序排列（最新的在前）
const allConversations = computed(() => {
   // 合并所有时间段的对话
   const all = [...(conversation_today.value || []),
   ...(conversation_last_7_days.value || []),
   ...(conversation_last_30_days.value || []),
   ...(conversation_before_30_days.value || [])]

   // 按ID排序（假设ID越大越新）
   return all.sort((a, b) => b.id - a.id)
})
const messageInput = ref('')
const isPaused = ref(false)
const visibility = ref(false)
let lottieInstance = null

// 专家数据
const experts = ref([
   { id: 'attending_physician', name: '眼科专家', englishName: 'attending_physician', avatar: '/assets/images/user/05.jpg', required: true },
   { id: 'radiologist', name: '放射科专家', englishName: 'radiologist', avatar: '/assets/images/user/06.jpg' },
   { id: 'infectiologist', name: '感染科专家', englishName: 'infectiologist', avatar: '/assets/images/user/07.jpg' },
   { id: 'neurologist', name: '神经科专家', englishName: 'neurologist', avatar: '/assets/images/user/08.jpg' },
   { id: 'endocrinologist', name: '内分泌科专家', englishName: 'endocrinologist', avatar: '/assets/images/user/09.jpg' }
   // 总结医生已隐藏
])

// 根据专家名称获取头像
const getExpertAvatar = (speakerName) => {
   // 尝试通过name或englishName匹配专家
   const expert = experts.value.find(e => e.name === speakerName || e.englishName === speakerName);
   // 如果找到专家，返回其头像，否则返回默认头像
   return expert ? expert.avatar : '/assets/images/user/05.jpg';
}

// 根据专家英文名称获取中文名称
const getExpertName = (speakerName) => {
   // 尝试通过name或englishName匹配专家
   const expert = experts.value.find(e => e.name === speakerName || e.englishName === speakerName);
   // 如果找到专家，返回其中文名称，否则返回原始名称
   return expert ? expert.name : speakerName;
}
const show = () => {
   visibility.value = true
   dialogVisibleForExperts.value = true
}
const chat = ref({
   chat_content: ''
})
const backToCase = () => {
   dialogVisibleForExperts.value = false
   dialogVisible.value = true
}
// 存储选中的专家
const selectedExperts = ref([])
// 获取会诊报告
const fetchMdtReport = () => {
   if (!current_session_id.value) return;
   
   axios.get('/api/get_mdt_report_html', {
      params: { session_id: current_session_id.value }
   })
   .then(response => {
      reportHtml.value = response.data;
      dialogVisibleForReport.value = true;
   })
   .catch(error => {
      console.error('获取会诊报告失败:', error);
      ElMessage.error('获取会诊报告失败');
   });
};

// 导出为PDF
const exportToPdf = () => {
   if (!current_session_id.value) return;
   
   // 创建一个临时链接来下载PDF
   const url = `/api/export_conversation_pdf?session_id=${current_session_id.value}`;
   window.open(url, '_blank');
};

onMounted(() => {
   token.value = localStorage.getItem('token') || ''
   socket.on('response', (data) => {
      ElMessage.error(data.content)
   })
   // 加载用户历史会话
   if (token.value) {
      refreshConversations() // 复用刷新会话列表函数
   }

   // 监听会话结束信号
   socket.on('send_finish', () => {
      // 重置按钮状态为初始发送按钮
      hasStarted.value = false;
      isPaused.value = false;
      
      // 直接获取并显示完整会诊报告
      if (current_session_id.value) {
         axios.get('/api/get_mdt_report_html', {
            params: { session_id: current_session_id.value }
         })
         .then(response => {
            // 添加完整会诊报告到聊天记录
            messages.value.push({
               speaker: 'report',
               content: response.data,
               id: id.value
            });
            id.value++;
            
            // 滚动到底部
            setTimeout(() => {
               const chatContent = document.querySelector('.chat-content');
               if (chatContent) {
                  chatContent.scrollTop = chatContent.scrollHeight;
               }
            }, 0);
         })
         .catch(error => {
            console.error('获取会诊报告失败:', error);
            // 添加错误提示消息
            messages.value.push({
               speaker: 'report',
               content: '会诊报告生成失败，请稍后重试',
               id: id.value
            });
            id.value++;
         });
      }
   });

   socket.on('mdt_response', (data) => {
      // 隐藏等待动画
      showWaitingAnimation.value = false;
      if (lottieInstance) {
         lottieInstance.destroy();
         lottieInstance = null;
      }
      
      // 对内容进行HTML转义，防止XSS攻击，同时保留换行
      const escapedContent = he.encode(data.content).replace(/\n/g, '<br>');
      messages.value.push({
         speaker: data.speaker,
         content: escapedContent,
         id: id.value
      });
      id.value++

      // 滚动到底部
      setTimeout(() => {
         const chatContent = document.querySelector('.chat-content');
         if (chatContent) {
            chatContent.scrollTop = chatContent.scrollHeight;
         }
      }, 0);
   });
   //   console.log(localStorage.getItem('token'))
})
// 是否已开始会话
const hasStarted = ref(false);

// 处理按钮点击事件（发送、暂停、恢复）
const handleButtonClick = () => {
   if (!isPaused.value) {
      isPaused.value = true;
      ElMessage.success("已暂停");
      const data = { "session_id": current_session_id.value }
      socket.emit("pause_reply", data)
   } else {
      isPaused.value = false;
      ElMessage.success("已恢复");
      const data = { "session_id": current_session_id.value, "Authorization": token.value }
      socket.emit("resume_reply", data)
      
   }
}

const sendMessage = () => {
   const escapedUserInput = he.encode(messageInput.value.trim()).replace(/ /g, '&nbsp;');
   messages.value.push({
      speaker: 'user',
      content: escapedUserInput.replace(/\n/g, '<br>'),
      id: id.value
   });
   messageInput.value = ''
   id.value++

   // 滚动到底部
   setTimeout(() => {
      const chatContent = document.querySelector('.chat-content');
      if (chatContent) {
         chatContent.scrollTop = chatContent.scrollHeight;
      }
   }, 0);

   // 标记已开始会话
   hasStarted.value = true;

   // 按照需求的格式构建data对象
   const data = {
      "Authorization": token.value,
      "session id": current_session_id.value,
      "messages": {
         "content": messageInput.value.trim()
         //message用户启动时
      }
   };

   socket.emit("start mdt discussion", data);
   messageInput.value = ''
}
// 加载历史会话详情
const loadConversationDetail = async (item) => {
   try {
      // 从item对象中获取session_id
      const session_id = item.session_id;
      loadingConversation.value = true
      const res = await axios.get(io_url + '/api/conversation_detail', {
         params: { session_id: session_id }
      })

      if (res.data.success) {
         // 清空当前消息
         messages.value = []
         id.value = 0

         // 设置当前会话ID
         current_session_id.value = session_id

         // 加载消息详情
         res.data.detail_list.forEach(msg => {
            const escapedContent = he.encode(msg.content).replace(/\n/g, '<br>')
            messages.value.push({
               speaker: msg.speaker,
               content: escapedContent,
               id: id.value
            })
            id.value++
         })

         // 设置对话已开始
         conversationStarted.value = true
         hasStarted.value = true

         // 滚动到底部
         setTimeout(() => {
            const chatContent = document.querySelector('.chat-content')
            if (chatContent) {
               chatContent.scrollTop = chatContent.scrollHeight
            }
         }, 0)
      } else {
         ElMessage.error(res.data.message || '加载会话详情失败')
      }
   } catch (error) {
      console.error('加载会话详情失败:', error)
      ElMessage.error('加载会话详情失败，请重试')
   } finally {
      loadingConversation.value = false
   }
}

// 删除会话
const deleteConversation = async (session_id) => {

   try {
      // 显示确认对话框
      console.log('准备显示确认对话框');
      ElMessageBox.confirm('确定要删除这个会话吗？此操作不可恢复。', '确认删除', {
         confirmButtonText: '确定',
         cancelButtonText: '取消',
         type: 'warning'
      }).then(async () => {
         // 显示加载中状态
         const res = await axios.get(io_url + '/api/del_conversation', {
            params: { session_id: session_id }
         })
         console.log('删除了接口');
         // 关闭加载提示
         ElMessage.closeAll()

         if (res.data.success) {
            ElMessage.success(res.data.message || '会话删除成功')

            // 如果删除的是当前会话，清空当前聊天
            if (current_session_id.value === session_id) {
               messages.value = []
               conversationStarted.value = false
               hasStarted.value = false
               current_session_id.value = null
            }

            // 调用refreshConversations函数重新从服务器加载最新的对话列表，确保数据一致性和正确渲染
            await refreshConversations()
         } else {
            ElMessage.error(res.data.message || '删除会话失败')
         }
      }).catch(() => {
         // 用户取消删除
      })
   } catch (error) {
      console.error('删除会话失败:', error)
      ElMessage.error('删除会话失败，请重试')
   }
}

// 打开重命名会话对话框
const renameConversation = (item) => {
   currentRenameItem.value = item
   newOverview.value = item.overview
   renameDialogVisible.value = true
}

// 保存重命名
const saveRename = async () => {
   try {
      if (!newOverview.value.trim()) {
         ElMessage.warning('新标题不能为空')
         return
      }


      const res = await axios.get(io_url + '/api/rename_conversation', {
         params: {
            session_id: currentRenameItem.value.session_id,
            overview: newOverview.value.trim()
         }
      })
      if (res.data.success) {
         ElMessage.success(res.data.message || '会话标题已更新')

         // 重置表单状态
         renameDialogVisible.value = false
         currentRenameItem.value = null
         newOverview.value = ''

         // 直接刷新会话列表
         await refreshConversations()
      } else {
         ElMessage.error(res.data.message || '更新会话标题失败')
      }
   } catch (error) {
      ElMessage.closeAll()
      console.error('更新会话标题失败:', error)
      ElMessage.error('更新会话标题失败，请重试')
   }
}

// 刷新会话列表
const refreshConversations = async () => {
   try {
      loadingConversation.value = true
      const res = await axios.get(io_url + '/api/user_conversations', {
         params: { username: token.value }
      })

      if (res.data.success) {
         conversation_today.value = res.data.conversations_today || []
         conversation_last_7_days.value = res.data.conversations_last_7_days || []
         conversation_last_30_days.value = res.data.conversations_last_30_days || []
         conversation_before_30_days.value = res.data.conversations_before_30_days || []
        
      } else {
         ElMessage.error(res.data.message || '加载会话列表失败')
      }
   } catch (error) {
      console.error('刷新会话列表失败:', error)
      ElMessage.error('加载会话列表失败，请重试')
   } finally {
      loadingConversation.value = false
   }
}

// getHistory函数已由refreshConversations替代
const getHistory = () => {
   dialogVisibleForHistory.value = true
   refreshConversations() // 复用刷新会话列表函数
}
const saveChat = () => {
   dialogVisibleForChat.value = false
   dialogVisible.value = true
}
// 新建对话，清空聊天框
// 不再使用写死的清除功能，而是通过正常的会话管理来控制
const backToChat = () => {
   dialogVisible.value = false
   dialogVisibleForChat.value = true
}

// 对话框关闭前的处理函数
const handleClose = (done) => {
   done();
}
// 保存患者信息
const savePatient = () => {
   axios.post(io_url + '/api/save_case_info', {
      username: token.value,
      session_id: current_session_id.value,
      main_complaint: patient.main_complaint,

      // duration: patient.duration,
      // eye_operation: patient.eye_operation,
      // chronic_disease: patient.chronic_disease,
      // other_chronic_disease: patient.other_chronic_disease,
      // drug_allergy: patient.drug_allergy,
      // long_term_drug: patient.long_term_drug
   }).then(res => {
      if (res.status === 200) {
         ElMessage.success('保存成功')
      } else {
         ElMessage.error(res.data.msg)
      }
   })
   dialogVisible.value = false
   // event1.value = true
   dialogVisibleForExperts.value = true
}

const showDialog = () => {
   dialogVisible.value = true
}

const showExpertDialog = () => {
   dialogVisibleForExperts.value = true
}

// 选择专家函数

const selectExpert = (expertId) => {
   // 获取专家信息
   const tempExpert = experts.value.find(e => e.id === expertId);
   
   // 如果是必选专家（眼科医生），不允许取消选择
   if (tempExpert && tempExpert.required) {
      // 检查是否已经选中
      const existingIndex = selectedExperts.value.findIndex(expert => expert.id === expertId);
      if (existingIndex === -1) {
         // 如果未选中，则添加
         selectedExperts.value.push(tempExpert);
         axios.post(io_url + '/api/add_expert', {
            username: token.value,
            session_id: current_session_id.value,
            name: tempExpert.id,
            specialty: tempExpert.name
         }).then(res => {
            if (res.data.success === true) {
               ElMessage.success('专家加入成功')
            }
         }).catch(err => {
            ElMessage.error(err.message)
         })
      }
      return; // 必选专家不允许取消，直接返回
   }
   
   // 非必选专家的处理逻辑
   const existingIndex = selectedExperts.value.findIndex(expert => expert.id === expertId);
   if (existingIndex > -1) {
      // 如果已选中，则移除（退出）
      selectedExperts.value.splice(existingIndex, 1);
      axios.post(io_url + '/api/remove_expert', {
         session_id: current_session_id.value,
         name: tempExpert.id,
      }).then(res => {
         if (res.data.success === true) {
            ElMessage.success('专家退出成功')
         }
      }).catch(err => {
         ElMessage.error(err.message)
      })
   } else {
      // 如果未选中，则添加
      const expert = experts.value.find(e => e.id === expertId);
      if (expert) {
         selectedExperts.value.push(expert);
      }
      axios.post(io_url + '/api/add_expert', {
         username: token.value,
         session_id: current_session_id.value,
         name: tempExpert.id,
         specialty: tempExpert.name
      }).then(res => {
         if (res.data.success === true) {
            ElMessage.success('专家加入成功')
         }
      }).catch(err => {
         ElMessage.error(err.message)
      })
   }
}

const isExpertSelected = (expertId) => {
   return selectedExperts.value.some(expert => expert.id === expertId);
}
//直接开始对话，展开交流，无需再传递专列家表
const confirmExpertSelection = () => {
   // 标记已开始会话
   hasStarted.value = true;

   const data = {
      "Authorization": token.value,
      "session_id": current_session_id.value,
      "messages": {
         "content": messageInput.value.trim()
         //message用户启动时
      }
   };

   socket.emit("start_mdt_discussion", data);
   messageInput.value = ''
   dialogVisibleForExperts.value = false;

   // 滚动到底部
   setTimeout(() => {
      const chatContent = document.querySelector('.chat-content');
      if (chatContent) {
         chatContent.scrollTop = chatContent.scrollHeight;
      }
   }, 0);

   // 显示正在讨论的提示
   ElMessage.success('MDT讨论已开始，专家正在分析病例...');
   
   // 显示等待动画
   showWaitingAnimation.value = true;
   // 延迟一点时间初始化动画，确保DOM已更新
   setTimeout(() => {
      initWaitingAnimation();
   }, 100);
}

const startConversation = () => {
   // 此函数已被禁用，用户应通过点击左侧新对话按钮开始对话
   ElMessage.warning('请通过左侧新对话按钮开始对话')
}

// 初始化等待动画
const initWaitingAnimation = () => {
  const container = document.getElementById('waiting-animation-container');
  if (container && !lottieInstance) {
    lottieInstance = lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/assets/images/lottie/Search Doctor.json' // 使用相对路径指向静态资源
    });
  }
};

// 重置聊天页面到初始状态
const resetChatPage = () => {
// 重置会话状态
conversationStarted.value = false;
hasStarted.value = false;
isPaused.value = false;
visibility.value = false;
showWaitingAnimation.value = false;

// 销毁动画实例
if (lottieInstance) {
  lottieInstance.destroy();
  lottieInstance = null;
}

// 清空消息列表
messages.value = [];
id.value = 0;
messageInput.value = '';

// 清空当前会话ID
current_session_id.value = '';

// 清空选中的专家，但保留眼科医生为必选
selectedExperts.value = [];

// 清空患者信息
Object.keys(patient).forEach(key => {
delete patient[key];
});

// 隐藏所有对话框
dialogVisible.value = false;
dialogVisibleForChat.value = false;
dialogVisibleForExperts.value = false;
renameDialogVisible.value = false;

// 刷新会话列表，确保显示最新数据
refreshConversations();

// 创建新会话并显示病人信息对话框
axios.get(io_url + '/api/create_session', { params: { username: token.value } }).then(res => {
  if (res.data.success === true) {
    current_session_id.value = res.data.session_id
    ElMessage.success('对话开始成功')
    // 设置对话已开始
    conversationStarted.value = true;
    // 重置暂停状态
    isPaused.value = false;
    // 直接显示Step 2的病人信息对话框
    dialogVisible.value = true
  }
});

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

/* 金色边框样式 */
.gold-border {
   border-color: #FFD700;
   border-width: 2px;
   border-style: solid;
   background-color: rgba(255, 215, 0, 0.05);
}

/* 不可选中样式 */
.not-selectable {
   cursor: not-allowed;
   opacity: 0.9;
}

.not-selectable:hover {
   transform: none !important;
   box-shadow: none !important;
   border-color: #FFD700 !important;
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

/* 历史对话详情中用户消息样式 */
.dialog-body .conversation-item:nth-child(odd) {
   justify-content: flex-start;
   background-color: #F1F8E9;
}

.dialog-body .conversation-item:nth-child(even) {
   justify-content: flex-end;
   text-align: right;
   background-color: white;
   color: black;
   border: 1px solid #E3F2FD;
}

.conversation-item:hover {
   transform: translateY(-2px);
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.user-message {

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

/* 豆包风格历史对话样式 */
.doubao-history-container {
   scrollbar-width: thin;
   scrollbar-color: #ccc #f5f5f5;
}

.doubao-history-container::-webkit-scrollbar {
   width: 6px;
}

.doubao-history-container::-webkit-scrollbar-track {
   background: #f5f5f5;
   border-radius: 3px;
}

.doubao-history-container::-webkit-scrollbar-thumb {
   background: #ccc;
   border-radius: 3px;
}

.doubao-history-container::-webkit-scrollbar-thumb:hover {
   background: #999;
}

.doubao-history-item {
   background-color: #fafafa;
   border: 1px solid #f0f0f0;
}

.doubao-history-item:hover {
   background-color: #f5f5f5;
   border-color: #e0e0e0;
}

/* 历史会话分组样式 */
.history-group {
   margin-bottom: 20px;
}

.history-group-title {
   font-size: 14px;
   color: #666;
   margin-bottom: 10px;
   padding-left: 5px;
   font-weight: 500;
}

/* 会话内容样式 */
.conversation-content {
   font-size: 14px;
   color: #333;
   margin-bottom: 8px;
   line-height: 1.4;
}

/* 会话操作按钮样式 */
.conversation-actions {
   display: flex;
   justify-content: flex-end;
   opacity: 0;
   transition: opacity 0.2s ease;
}

.conversation-item:hover .conversation-actions {
   opacity: 1;
}

.conversation-actions i {
   font-size: 16px;
   cursor: pointer;
   padding: 5px;
   transition: color 0.2s ease;
}

.conversation-actions i:hover {
   transform: scale(1.1);
}

.conversation-actions i.text-blue-500:hover {
   color: #1976D2;
}

.conversation-actions i.text-red-500:hover {
   color: #D32F2F;
}

.line-clamp-2 {
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   overflow: hidden;
   text-overflow: ellipsis;
}

/* 聊天消息样式 */
.chat-content {
   padding: 20px;
   background-color: #fafafa;
   position: relative;
   min-height: 400px;
}

/* 移除旧的消息项样式，使用新的wrapper样式 */
.message-item {
   width: 100%;
}

.message-role {
   font-weight: bold;
   font-size: 14px;
}

/* 消息容器样式 */
.message-wrapper {
   display: flex;
   align-items: flex-start;
   margin-bottom: 15px;
   max-width: 80%;
}

.user-wrapper {

   flex-direction: row-reverse;
   margin-left: auto;
   margin-right: 10px;
   justify-content: flex-start;
}

.expert-wrapper {
   margin-left: 10px;
   margin-right: auto;
}

.report-wrapper {
   margin-left: auto;
   margin-right: auto;
   justify-content: center;
   max-width: 90%;
}

.report-wrapper .message-content-container {
   text-align: left;
}

/* 报告消息特殊样式 */
.report-body {
   background-color: #e6f7f8 !important;
   border: 1px solid #089bab !important;
   transition: all 0.3s ease !important;
   padding: 15px;
   border-radius: 8px;
}

/* 确保报告内容中的样式合理 */
.report-body h1, .report-body h2, .report-body h3 {
   color: #089bab !important;
   margin-top: 15px !important;
   margin-bottom: 10px !important;
}

.report-body p {
   margin-bottom: 8px !important;
   line-height: 1.5 !important;
}

.report-body ul, .report-body ol {
   margin-left: 20px !important;
   margin-bottom: 10px !important;
}

/* 报告头像样式 */
.report-avatar {
   width: 40px !important;
   height: 40px !important;
   border-radius: 50% !important;
   background-color: #089bab !important;
   display: flex !important;
   align-items: center !important;
   justify-content: center !important;
   color: white !important;
   font-size: 20px !important;
}

/* 头像样式 */
.message-avatar {
   width: 40px;
   height: 40px;
   border-radius: 50%;
   object-fit: cover;
}

.user-avatar {
   margin-left: 10px;
}

.expert-avatar {
   margin-right: 10px;
}

/* 消息内容容器 */
.message-content-container {
   display: flex;
   flex-direction: column;
   align-self: flex-start;
}

/* 消息头部样式 */
.message-header {
   margin-bottom: 5px;
   text-align: left;
}

.message-header1 {
   margin-bottom: 5px;
   text-align: right;
}

.user-message .message-role {
   color: #1976D2;
   text-align: left;
   font-weight: bold;
   font-size: 14px;
}

.expert-message .message-role {
   color: #089bab;
   text-align: left;
   font-weight: bold;
   font-size: 14px;
}

/* 消息体样式 */
.message-body {
   padding: 12px 16px;
   border-radius: 18px;
   font-size: 15px;
   line-height: 1.5;
   word-break: break-word;
   text-align: left;
   align-self: flex-start;
   width: 100%;
}

/* 确保用户消息右对齐内容 */
.user-wrapper .message-body {
   text-align: right;
   align-self: flex-end;
}

.user-wrapper .message-body {
   background-color: white;
   color: black;
   border-bottom-right-radius: 4px;
   border: 1px solid #E3F2FD;
}

.expert-wrapper .message-body {
   color: #FFF;
   background: #089bab;
   border-bottom-left-radius: 4px;
}

.waiting-indicator {
   margin-left: 10px;
   color: #666;
   font-style: italic;
   font-size: 14px;
   animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
   from {
      opacity: 0;
   }

   to {
      opacity: 1;
   }
}

/* 会诊报告样式 */
.report-container {
   width: 100%;
   height: calc(100vh - 200px);
   overflow-y: auto;
   padding: 20px;
   background-color: #fff;
}

/* 滚动条样式优化 */
.chat-content::-webkit-scrollbar {
   width: 6px;
}

.chat-content::-webkit-scrollbar-track {
   background: #f1f1f1;
   border-radius: 3px;
}

.chat-content::-webkit-scrollbar-thumb {
   background: #c1c1c1;
   border-radius: 3px;
}

.chat-content::-webkit-scrollbar-thumb:hover {
   background: #a8a8a8;
}
</style>