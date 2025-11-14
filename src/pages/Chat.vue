<template>
<!-- <div class="legacy-page"> -->

      <!-- Wrapper Start -->
      <!-- <div class="wrapper"> -->
         <!-- Sidebar  -->
         
         <!-- Page Content  -->
         <div id="content-page" class="content-page">
            <!-- TOP Nav Bar -->
         <div class="iq-top-navbar header-top-sticky">
            <div class="iq-navbar-custom">
               <!-- <div class="iq-sidebar-logo">
                  <div class="top-logo">
                     <a href="#" @click.prevent="$router.push('/')" class="logo">
                     <img src="/assets/images/logo.png" class="img-fluid" alt="">
                     <span>XRay</span>
                     </a>
                  </div>
               </div> -->
               <nav class="navbar navbar-expand-lg navbar-light p-0">
                  <div class="iq-search-bar">
                     <form action="#" class="searchbox">
                        <input type="text" class="text search-input" placeholder="Type here to search...">
                        <a class="search-link" href="#"><i class="ri-search-line"></i></a>
                     </form>
                  </div>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i class="ri-menu-3-line"></i>
                  </button>
                  <!-- <div class="iq-menu-bt align-self-center">
                     <div class="wrapper-menu">
                        <div class="main-circle"><i class="ri-more-fill"></i></div>
                           <div class="hover-circle"><i class="ri-more-2-fill"></i></div>
                     </div>
                  </div> -->
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul class="navbar-nav ml-auto navbar-list">     
                        <li class="nav-item iq-full-screen">
                           <a href="#" class="iq-waves-effect" id="btnFullscreen" @click="newView"><i class="ri-fullscreen-line"></i></a>
                        </li>
                        <!-- 信息图标代码 -->
                        <!-- <li class="nav-item dropdown">
                           <a href="#" class="search-toggle iq-waves-effect">
                              <i class="ri-mail-open-fill"></i>
                              <span class="bg-primary count-mail"></span>
                           </a>
                           <div class="iq-sub-dropdown">
                              <div class="iq-card shadow-none m-0">
                                 <div class="iq-card-body p-0 ">
                                    <div class="bg-primary p-3">
                                       <h5 class="mb-0 text-white">All Messages<small class="badge  badge-light float-right pt-1">5</small></h5>
                                    </div>
                                    <a href="#" class="iq-sub-card" >
                                       <div class="media align-items-center">
                                          <div class="">
                                             <img class="avatar-40 rounded" src="/assets/images/user/01.jpg" alt="">
                                          </div>
                                          <div class="media-body ml-3">
                                             <h6 class="mb-0 ">Bini Emma Watson</h6>
                                             <small class="float-left font-size-12">13 Jun</small>
                                          </div>
                                       </div>
                                    </a>
                                    <a href="#" class="iq-sub-card" >
                                       <div class="media align-items-center">
                                          <div class="">
                                             <img class="avatar-40 rounded" src="/assets/images/user/02.jpg" alt="">
                                          </div>
                                          <div class="media-body ml-3">
                                             <h6 class="mb-0 ">Lorem Ipsum Watson</h6>
                                             <small class="float-left font-size-12">20 Apr</small>
                                          </div>
                                       </div>
                                    </a>
                                    <a href="#" class="iq-sub-card" >
                                       <div class="media align-items-center">
                                          <div class="">
                                             <img class="avatar-40 rounded" src="/assets/images/user/03.jpg" alt="">
                                          </div>
                                          <div class="media-body ml-3">
                                             <h6 class="mb-0 ">Why do we use it?</h6>
                                             <small class="float-left font-size-12">30 Jun</small>
                                          </div>
                                       </div>
                                    </a>
                                    <a href="#" class="iq-sub-card" >
                                       <div class="media align-items-center">
                                          <div class="">
                                             <img class="avatar-40 rounded" src="/assets/images/user/04.jpg" alt="">
                                          </div>
                                          <div class="media-body ml-3">
                                             <h6 class="mb-0 ">Variations Passages</h6>
                                             <small class="float-left font-size-12">12 Sep</small>
                                          </div>
                                       </div>
                                    </a>
                                    <a href="#" class="iq-sub-card" >
                                       <div class="media align-items-center">
                                          <div class="">
                                             <img class="avatar-40 rounded" src="/assets/images/user/05.jpg" alt="">
                                          </div>
                                          <div class="media-body ml-3">
                                             <h6 class="mb-0 ">Lorem Ipsum generators</h6>
                                             <small class="float-left font-size-12">5 Dec</small>
                                          </div>
                                       </div>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </li> -->
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
                                 <a href="#" @click.prevent="$router.push('/profile')" class="iq-sub-card iq-bg-primary-hover">
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
                                 <a href="#" @click.prevent="$router.push('/profile-edit')" class="iq-sub-card iq-bg-primary-hover">
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
                                    <a class="bg-primary iq-sign-btn" href="#" @click.prevent="$router.push('/sign-in')" role="button">Sign out<i class="ri-login-box-line ml-2"></i></a>
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
                  <div class="col-lg-3 chat-data-left scroller">
                     <div class="chat-sidebar-channel scroller pl-3">
                        <h5 class="">Public Channels</h5>
                        <ul class="iq-chat-ui nav flex-column nav-pills">
                           <li>
                              <a  data-toggle="pill" href="#chatbox1">
                              <div class="d-flex align-items-center">
                                 <div class="avatar mr-3">
                                    <img src="/assets/images/user/05.jpg" alt="chatuserimage" class="avatar-50 rounded">
                                    <span class="avatar-status"><i class="ri-checkbox-blank-circle-fill text-success"></i></span>
                                 </div>
                                 <div class="chat-sidebar-name">
                                    <h6 class="mb-0">眼科专家</h6>
                                    <span>Ophthalmologist</span>
                                 </div>
                              </div>
                          </a>
                           </li>
                           <li>
                              <a  data-toggle="pill" href="#chatbox2">
                              <div class="d-flex align-items-center">
                                 <div class="avatar mr-3">
                                    <img src="/assets/images/user/06.jpg" alt="chatuserimage" class="avatar-50 rounded">
                                    <span class="avatar-status"><i class="ri-checkbox-blank-circle-fill text-success"></i></span>
                                 </div>
                                 <div class="chat-sidebar-name">
                                    <h6 class="mb-0">心内科专家</h6>
                                    <span>This Sunday we</span>
                                 </div>
                                 <div class="chat-meta float-right text-center mt-2">
                                    <div class="chat-msg-counter bg-primary text-white">10</div>
                                    <span class="text-nowrap">10 min</span>
                                 </div>
                              </div>
                          </a>
                          </li>
                        </ul>
                     </div>
                  </div>
                  <div class="col-lg-9 chat-data p-0 chat-data-right">
                     <div class="tab-content">
                        <div class="tab-pane fade active show" id="default-block" role="tabpanel">
                           <div class="chat-start">
                              <span class="iq-start-icon text-primary"><i class="ri-message-3-line"></i></span>
                              <button id="chat-start" class="btn bg-primary mt-3">Start
                                 Conversation!</button>
                           </div>
                        </div>
                        <div class="tab-pane fade" id="chatbox1" role="tabpanel">
                           <div class="chat-head">
                              <header class="d-flex justify-content-between align-items-center pt-3 pr-3 pb-3">
                                <div class="d-flex align-items-center">
                                
                                  <div class="avatar chat-user-profile m-0 mr-3">
                                    <img src="/assets/images/user/05.jpg" alt="avatar" class="avatar-50 rounded">
                                    <span class="avatar-status"><i class="ri-checkbox-blank-circle-fill text-success"></i></span>
                                  </div>
                                  <h5 class="mb-0">MDT会诊</h5>
                                </div>
                                <!-- <div style="width:60%;">
                                   <span style="position:relative;left:15%;font-size:18px;">Step1</span>
                                   <el-Tooltip content="请保存病人信息" placement="left" class="box-item" effect="dark">
                                      <el-button :color="event1?'green':'red'" style="border-radius: 50%;position:relative;left:20%;width: 50px;height: 50px;"></el-button>
                                   </el-Tooltip>
                                   <el-icon style="position:relative;left:30%;top:9px;" size="30"><DArrowRight /></el-icon>
                                   <span style="position:relative;left:40%;font-size:18px;">Step2</span>
                                    <el-Tooltip content="请选择医生" placement="left" class="box-item" effect="dark">
                                      <el-button :color="event2?'green':'red'" style="position:relative;left:45%;width:50px;height:50px;" circle></el-button>
                                   </el-Tooltip>
                                </div> -->
                                 <div class="chat-header-icons d-flex">
                                  <a  @click="getHistory()" style="position: relative;left:23vw;">
                                    <el-tooltip content="历史对话" placement="left" class="box-item" effect="dark">
                                         <el-icon size="40"><Document /></el-icon>
                                    </el-tooltip>
                                  </a> 
                                </div>
                                <div class="chat-header-icons d-flex">
                                  <a  @click="showDialog()">
                                    <el-tooltip content="添加病人" placement="left" class="box-item" effect="dark">
                                         <el-icon size="40"><List /></el-icon>
                                    </el-tooltip>
                                  </a> 
                                </div>
                              </header>
                            </div>
                            <!-- 聊天内容 -->
                           <div class="chat-content scroller">
                              <div style="width: 100%;background-color: #E0F7FA;border-radius: 15px;height:15%;display: flex;align-items: center;margin-bottom: 2%;">
                                 <span class="chat-msg-counter bg-primary" style="position: relative;left:1.5%"></span>
                                 <span style="color: #26A69A;position: relative;left:2%">Step 1:</span>
                                 <span style="position: relative;left:2.5%">请保存病人信息</span>
                                 <span class="chat-msg-counter bg-primary" style="position: relative;left:15.5%"></span>
                                 <span style="position: relative;left:15%">
                                 <span style="color: #26A69A;position: relative;left:6%">Step 2:</span>
                                 <span style="position: relative;left:6.5%">请选择医生专家</span>
                                 </span>
                                 <!-- <span style="position: relative;left:7%"><el-button circle></el-button></span> -->
                                   <span class="chat-msg-counter bg-primary" style="position: relative;left:31%"></span>
                                 <span style="position: relative;left:30%">
                                 <span class="chat-msg-counter bg-primary" style="position: relative;left:10%"></span>
                                 <span style="color: #26A69A;position: relative;left:10%">Step 3:</span>
                                 <span style="position: relative;left:10.5%">启动多智能体会诊</span>
                                 </span>
                              </div>
                              <div v-for="value in message" :key="value.id">
                              <!-- 患者信息 -->
                              <div class="chat" v-if="value.role=='user'">
                                <div class="chat-user">
                                  <a class="avatar m-0">
                                    <img src="/assets/images/user/1.jpg" alt="avatar" class="avatar-35 rounded ">
                                  </a>
                                    <span class="chat-time mt-1">6:45</span>
                                </div>
                                <div class="chat-detail">
                                  <div class="chat-message">
                                    <p>{{ value.content }}</p>
                                  </div>
                                </div>
                              </div>
                              <!-- 医生信息 -->
                              <div class="chat chat-left" v-if="value.role=='assistant'">
                                <div class="chat-user">
                                  <a class="avatar m-0">
                                    <img src="/assets/images/user/05.jpg" alt="avatar" class="avatar-35 rounded ">
                                  </a>
                                    <span class="chat-time mt-1">6:48</span>
                                </div>
                                <div class="chat-detail">
                                  <div class="chat-message">
                                    <p>{{ value.content }}</p>
                                  </div>
                                </div>
                              </div>
                              </div>
                           </div>
                           <div class="chat-footer p-3 bg-white">
                              <form class="d-flex align-items-center" action="javascript:void(0);">
                               <div class="chat-attagement d-flex">
                                  <a href="javascript:void();"><i class="fa fa-smile-o pr-3" aria-hidden="true"></i></a>
                                  <a href="javascript:void();"><i class="fa fa-paperclip pr-3" aria-hidden="true"></i></a>
                              </div>
                               <input type="text" class="form-control mr-3" placeholder="Type your message">
                               <button type="submit" class="btn btn-primary d-flex align-items-center p-2"><i class="fa fa-paper-plane-o" aria-hidden="true"></i><span class="d-none d-lg-block ml-1">Send</span></button>
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
                        Copyright 2020 更多模板：<a href="https://www.uimaker.com/" target="_blank">uimaker</a> All Rights Reserved.
                     </div>
                  </div>
               </div>
            </footer>
            <!-- Footer END -->
         <!-- </div> -->
      <!-- </div> -->
      <!-- Wrapper END -->
     
      
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      
      
      
      <!-- Appear JavaScript -->
      
      <!-- Countdown JavaScript -->
      
      <!-- Counterup JavaScript -->
      
      
      <!-- Wow JavaScript -->
      
      <!-- Apexcharts JavaScript -->
      
      <!-- Slick JavaScript -->
      
      <!-- Select2 JavaScript -->
      
      <!-- Owl Carousel JavaScript -->
      
      <!-- Magnific Popup JavaScript -->
      
      <!-- Smooth Scrollbar JavaScript -->
      
      <!-- lottie JavaScript -->
      
      <!-- Chart Custom JavaScript -->
      
      <!-- Custom JavaScript -->
      
  </div>
  <el-dialog 
      v-model="dialogVisible"
      title="填写病人信息"
  >  
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
  <el-dialog
      v-model="dialogVisibleForHistory"
      title="历史对话" 
      :fullscreen="false"
      :before-close="handleClose"
      width="50%"
  >
   <div style="max-height: 500px; overflow-y: auto; padding: 10px;">
    <div v-for="item in conversation_today" :key="item.id">
        <div class="conversation-item">
            <span class="message-role">{{ item.role }}:</span> 
            <span class="message-content">{{ item.content }}</span>
        </div>
    </div>
   </div>

  </el-dialog>
</template>

<script setup>
// static migration: original JS (if any) loads globally via index.html
import {io} from 'socket.io-client'
import {ref,reactive} from 'vue'
import {onMounted} from 'vue'
import {Plus,Document,DArrowRight,List} from '@element-plus/icons-vue'
import axios from 'axios'
const io_url = 'http://127.0.0.1:5000'
const socket = io(io_url)
const session_id = ref('')
const dialogVisible = ref(false)
const dialogVisibleForHistory = ref(false)
const patient = reactive({})
const event1 = ref(false)
const event2 = ref(false)
const event3 = ref(false)
//用于存储信息
const message = ref([
   // {   
   //     id:1,
   //     role:'user',
   //     content:'你好'
   // },
   // {  
   //     id:2,
   //     role:'assistant',
   //     content:'你好，我是心内科专家'
   // },
   // {
   //    id:3,
   //    role:'user',
   //    content:'我想知道心跳率的正常范围'
   // },
   // {
   //    id:4,
   //    role:'assistant',
   //    content:'心跳率的正常范围是60次/分至100次/分'
   // },
   // {
   //    id:4,
   //    role:'assistant',
   //    content:'心跳率的正常范围是60次/分至100次/分'
   // },
   // {
   //    id:4,
   //    role:'assistant',
   //    content:'心跳率的正常范围是60次/分至100次/分'
   // },
   // {
   //    id:4,
   //    role:'assistant',
   //    content:'心跳率的正常范围是60次/分至100次/分'
   // }
   
])
const conversation_today = ref([
   {id:1,role:'user',content:'你好'},
   {id:2,role:'assistant',content:'你好，我是心内科专家'},
   {id:3,role:'user',content:'我想知道心跳率的正常范围'},
   {id:4,role:'assistant',content:'心跳率的正常范围是60次/分至100次/分'},
   {id:5,role:'user',content:'我想知道血压的正常范围'},
   {id:6,role:'assistant',content:'血压的正常范围是120/80至140/90'},
   {id:7,role:'user',content:'我想知道心率的正常范围'},
   {id:8,role:'assistant',content:'心率的正常范围是60次/分至100次/分'},
   {id:9,role:'assistant',content:'心率的正常范围是60次/分至100次/分'}
])
const conversation_last_7_days = ref([])
const conversation_last_30_days = ref([])
const conversation_before_30_days = ref([])
onMounted(() => {
    if(localStorage.getItem('session_id')!=null){
        session_id.value = localStorage.getItem('session_id')
    }else{
        axios.get(io_url+'/api/get_session_id',{params:{username:'user1'}}).then(res =>{
            session_id.value = res.data.session_id
            localStorage.setItem('session_id',res.data.session_id)
        })
    }
})
const getHistory = () =>{
      dialogVisibleForHistory.value = true
      axios.get(io_url+'/api/user_conversation',{params:{username:'user1'}}).then(res =>{
         conversation_today.value = res.data.conversation_today
         conversation_last_7_days.value = res.data.conversation_last_7_days
         conversation_last_30_days.value = res.data.conversation_last_30_days
         conversation_before_30_days.value = res.data.conversation_before_30_days
      })
}

// 对话框关闭前的处理函数
const handleClose = (done) => {
  done();
}
const savePatient = () =>{
    socket.emit
    dialogVisible.value = false
    event1.value = true
}
const newView = () =>{
    // 清空message
    message.value = []
    //获取后端新的的session_id同时写入前端的session_id,移除掉旧的localstorage中的session_id
    
}
const showDialog = () =>{
    dialogVisible.value = true
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