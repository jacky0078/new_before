<template>

   <!-- Sidebar  -->
   <div class="iq-sidebar">
      <div class="iq-sidebar-logo d-flex justify-content-between">
         <a href="#" @click.prevent="$router.push('/')">
            <img src="/assets/images/logo.png" class="img-fluid" alt="">
            <span>XRay</span>
         </a>
      </div>
      <div id="sidebar-scrollbar">
         <nav class="iq-sidebar-menu">
            <ul class="iq-menu">
               <li>
                  <a href="#" @click.prevent="$router.push('/DoctorList')" class="iq-waves-effect"><i
                        class="ri-user-3-fill"></i><span>医生</span></a>
               </li>
               <li>
                  <a href="javascript:void(0);" class="iq-waves-effect"><i
                        class="ri-user-3-fill"></i><span>患者</span></a>
               </li>
               <li class="active"><a href="#" @click.prevent="$router.push('/chat')" class="iq-waves-effect"><i
                        class="ri-message-fill"></i><span>聊天</span></a>
               </li>
            </ul>
         </nav>
         <div class="p-3"></div>
      </div>
   </div>

   <!-- Page Content  -->
   <div id="content-page" class="content-page">
      <!-- TOP Nav Bar -->
      <div class="iq-top-navbar">
         <div class="iq-navbar-custom">
            <div class="iq-sidebar-logo">
               <div class="top-logo">
                  <a href="#" @click.prevent="$router.push('/')" class="logo">
                     <img src="/assets/images/logo.png" class="img-fluid" alt="">
                     <span>XRay</span>
                  </a>
               </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light p-0">
               <div class="iq-search-bar">
                  <form action="#" class="searchbox">
                     <input type="text" class="text search-input" placeholder="Type here to search...">
                     <a class="search-link" href="#"><i class="ri-search-line"></i></a>
                  </form>
               </div>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i class="ri-menu-3-line"></i>
               </button>
               <div class="iq-menu-bt align-self-center">
                  <div class="wrapper-menu">
                     <div class="main-circle"><i class="ri-more-fill"></i></div>
                     <div class="hover-circle"><i class="ri-more-2-fill"></i></div>
                  </div>
               </div>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto navbar-list">

                     <li class="nav-item iq-full-screen">
                        <a href="#" class="iq-waves-effect" id="btnFullscreen"><i class="ri-fullscreen-line"></i></a>
                     </li>

                     <li class="nav-item dropdown">

                        <div class="iq-sub-dropdown">
                           <div class="iq-card shadow-none m-0">
                              <div class="iq-card-body p-0 ">
                                 <div class="bg-primary p-3">
                                    <h5 class="mb-0 text-white">All Messages<small
                                          class="badge  badge-light float-right pt-1">5</small></h5>
                                 </div>
                                 <a href="#" class="iq-sub-card">
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
                                 <a href="#" class="iq-sub-card">
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
                                 <a href="#" class="iq-sub-card">
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
                                 <a href="#" class="iq-sub-card">
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
                                 <a href="#" class="iq-sub-card">
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
                     </li>
                  </ul>
               </div>
               <ul class="navbar-list">
                  <li>
                     <a href="#" class="search-toggle iq-waves-effect d-flex align-items-center">
                        <img src="/assets/images/user/1.jpg" class="img-fluid rounded mr-3" alt="user">

                     </a>
                  </li>
               </ul>
            </nav>
         </div>
      </div>
      <!-- TOP Nav Bar END -->
      <div class="container-fluid">
         <div class="row">

            <div class="col-sm-6 col-md-3">
               <div class="iq-card">
                  <div class="iq-card-body text-center">
                     <div class="doc-profile">
                        <img class="rounded-circle img-fluid avatar-80" src="/assets/images/user/05.jpg" alt="profile">
                     </div>
                     <div class="iq-doc-info mt-3">
                        <h4>眼科专家（主治）</h4>
                        <p class="mb-0">attending_physician</p>

                     </div>
                     <div class="iq-doc-description mt-2">
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non
                           gravida. In id ipsum consequat</p>
                     </div>

                  </div>
               </div>
            </div>
            <div class="col-sm-6 col-md-3">
               <div class="iq-card">
                  <div class="iq-card-body text-center">
                     <div class="doc-profile">
                        <img class="rounded-circle img-fluid avatar-80" src="/assets/images/user/06.jpg" alt="profile">
                     </div>
                     <div class="iq-doc-info mt-3">
                        <h4>放射科专家</h4>
                        <p class="mb-0">radiologist</p>

                     </div>
                     <div class="iq-doc-description mt-2">
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non
                           gravida. In id ipsum consequat</p>
                     </div>

                  </div>
               </div>
            </div>
            <div class="col-sm-6 col-md-3">
               <div class="iq-card">
                  <div class="iq-card-body text-center">
                     <div class="doc-profile">
                        <img class="rounded-circle img-fluid avatar-80" src="/assets/images/user/07.jpg" alt="profile">
                     </div>
                     <div class="iq-doc-info mt-3">
                        <h4> 感染科专家</h4>
                        <p class="mb-0">infectiologist</p>

                     </div>
                     <div class="iq-doc-description mt-2">
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non
                           gravida. In id ipsum consequat</p>
                     </div>

                  </div>
               </div>
            </div>
            <div class="col-sm-6 col-md-3">
               <div class="iq-card">
                  <div class="iq-card-body text-center">
                     <div class="doc-profile">
                        <img class="rounded-circle img-fluid avatar-80" src="/assets/images/user/08.jpg" alt="profile">
                     </div>
                     <div class="iq-doc-info mt-3">
                        <h4>神经科专家</h4>
                        <p class="mb-0">neurologist</p>

                     </div>
                     <div class="iq-doc-description mt-2">
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non
                           gravida. In id ipsum consequat</p>
                     </div>

                  </div>
               </div>
            </div>
            <div class="col-sm-6 col-md-3">
               <div class="iq-card">
                  <div class="iq-card-body text-center">
                     <div class="doc-profile">
                        <img class="rounded-circle img-fluid avatar-80" src="/assets/images/user/09.jpg" alt="profile">
                     </div>
                     <div class="iq-doc-info mt-3">
                        <h4> 内分泌科专家</h4>
                        <p class="mb-0">endocrinologist</p>

                     </div>
                     <div class="iq-doc-description mt-2">
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non
                           gravida. In id ipsum consequat</p>
                     </div>

                  </div>
               </div>
            </div>
            <div class="col-sm-6 col-md-3">
               <div class="iq-card">
                  <div class="iq-card-body text-center">
                     <div class="doc-profile">
                        <img class="rounded-circle img-fluid avatar-80" src="/assets/images/user/10.jpg" alt="profile">
                     </div>
                     <div class="iq-doc-info mt-3">
                        <h4> 总结医生</h4>
                        <p class="mb-0">supervisor</p>

                     </div>
                     <div class="iq-doc-description mt-2">
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non
                           gravida. In id ipsum consequat</p>
                     </div>

                  </div>
               </div>
            </div>






         </div>
      </div>
      <!-- Footer -->
      
      <!-- Footer END -->
   </div>

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


</template>

<script setup lang="ts">
// static migration: original JS (if any) loads globally via index.html
</script>
