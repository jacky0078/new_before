<template>
   <div>
      <div class="wrapper">
         <div class="iq-sidebar">
            <div class="iq-sidebar-logo d-flex justify-content-between">
               <a href="#" @click.prevent="$router.push('/')">
                  <img src="/assets/images/logo.png" class="img-fluid" alt="">
                  <span>XRay</span>
               </a>
               <div class="iq-menu-bt-sidebar">
                  <div class="iq-menu-bt align-self-center">
                     <div class="wrapper-menu">
                        <div class="main-circle"><i class="ri-more-fill"></i></div>
                        <div class="hover-circle"><i class="ri-more-2-fill"></i></div>
                     </div>
                  </div>
               </div>
            </div>
            <div id="sidebar-scrollbar">
               <nav class="iq-sidebar-menu">
                  <ul class="iq-menu">
                     <li class="iq-menu-title"><i class="ri-subtract-line"></i><span>Dashboard</span></li>
                     <li>
                        <a href="#" @click.prevent="$router.push('/')" class="iq-waves-effect"><i
                              class="ri-hospital-fill"></i><span>医生仪表板</span></a>
                     </li>

                     <li>
                        <a href="#" @click.prevent="$router.push('/dashboard-3')" class="iq-waves-effect"><i
                              class="ri-group-fill"></i><span>患者仪表板</span></a>
                     </li>



                     <li>
                        <a href="javascript:void(0);" class="iq-waves-effect"><i
                              class="ri-user-3-fill"></i><span>医生</span><i
                              class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                        <ul class="iq-submenu">
                           <li><a href="#" @click.prevent="$router.push('/doctor-list')"><i
                                    class="ri-file-list-fill"></i>所有医生</a></li>
                           <li><a href="#" @click.prevent="$router.push('/add-doctor')"><i class="ri-user-add-fill"></i>
                                 添加医生</a></li>
                           <li><a href="#" @click.prevent="$router.push('/profile')"><i
                                    class="ri-profile-fill"></i>医生个人资料</a></li>
                           <li><a href="#" @click.prevent="$router.push('/profile-edit')"><i
                                    class="ri-file-edit-fill"></i> 编辑医生</a></li>
                        </ul>
                     </li>
                     <li>
                        <a href="javascript:void(0);" class="iq-waves-effect"><i
                              class="ri-user-3-fill"></i><span>患者</span><i
                              class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                        <ul class="iq-submenu">
                           <li><a href="#" @click.prevent="$router.push('/patient-list')"><i
                                    class="ri-file-list-fill"></i>所有患者</a></li>
                           <li><a href="#" @click.prevent="$router.push('/add-patient')"><i
                                    class="ri-user-add-fill"></i> 添加患者</a></li>
                           <li><a href="#" @click.prevent="$router.push('/profile')"><i
                                    class="ri-profile-fill"></i>患者个人资料</a></li>
                           <li><a href="#" @click.prevent="$router.push('/profile-edit')"><i
                                    class="ri-file-edit-fill"></i> 编辑患者</a></li>
                        </ul>
                     </li>

                     <li class="active"><a href="#" @click.prevent="$router.push('/home/chat')" class="iq-waves-effect"><i
                              class="ri-message-fill"></i><span>聊天</span></a></li>

                  </ul>
               </nav>
               <div class="p-3"></div>
            </div>
         </div>
         <router-view></router-view>
      </div>
   </div>
</template>
<script setup>
</script>