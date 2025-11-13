<template>
<div class="legacy-page">

      <!-- Wrapper Start -->
      <div class="wrapper">
         <!-- Sidebar  -->
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
                        <a href="#" @click.prevent="$router.push('/')" class="iq-waves-effect"><i class="ri-hospital-fill"></i><span>Doctor Dashboard</span></a>
                     </li>                     
                     <li>
                        <a href="#" @click.prevent="$router.push('/dashboard-1')" class="iq-waves-effect"><i class="ri-home-8-fill"></i><span>Hospital Dashboard 1 </span></a>
                     </li>
                     <li>
                        <a href="#" @click.prevent="$router.push('/dashboard-2')" class="iq-waves-effect"><i class="ri-briefcase-4-fill"></i><span>Hospital Dashboard 2</span></a>
                     </li>
                     <li>
                        <a href="#" @click.prevent="$router.push('/dashboard-3')" class="iq-waves-effect"><i class="ri-group-fill"></i><span>Patient Dashboard</span></a>
                     </li>
                     <li class="iq-menu-title"><i class="ri-subtract-line"></i><span>Apps</span></li>
                     <li>
                        <a href="javascript:void(0);" class="iq-waves-effect"><i class="ri-mail-open-fill"></i><span>Email</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                        <ul class="iq-submenu">
                           <li><a href="#" @click.prevent="$router.push('/')"><i class="ri-inbox-fill"></i>Inbox</a></li>
                           <li><a href="#" @click.prevent="$router.push('/email-compose')"><i class="ri-edit-2-fill"></i>Email Compose</a></li>
                        </ul>
                     </li>
                     <li>
                        <a href="javascript:void(0);" class="iq-waves-effect"><i class="ri-user-3-fill"></i><span>Doctors</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                        <ul class="iq-submenu">
                           <li><a href="#" @click.prevent="$router.push('/doctor-list')"><i class="ri-file-list-fill"></i>All Doctors</a></li>
                           <li><a href="#" @click.prevent="$router.push('/add-doctor')"><i class="ri-user-add-fill"></i> Add Doctor</a></li>
                           <li><a href="#" @click.prevent="$router.push('/profile')"><i class="ri-profile-fill"></i>Doctor Profile</a></li>
                           <li><a href="#" @click.prevent="$router.push('/profile-edit')"><i class="ri-file-edit-fill"></i> Edit Doctor</a></li>
                        </ul>
                     </li>
                     <li><a href="#" @click.prevent="$router.push('/calendar')" class="iq-waves-effect"><i class="ri-calendar-event-fill"></i><span>Calendar</span></a></li>
                    
                    <li><a href="#" @click.prevent="$router.push('/chat')" class="iq-waves-effect"><i class="ri-message-fill"></i><span>Chat</span></a></li>
                     <li class="iq-menu-title"><i class="ri-subtract-line"></i><span>Components</span></li>
                     <li>
                        <a href="javascript:void(0);" class="iq-waves-effect"><i class="ri-apps-fill"></i><span>UI Elements</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                        <ul class="iq-submenu">
                           <li><a href="#"><i class="ri-font-color"></i>colors</a></li>
                           <li><a href="#" @click.prevent="$router.push('/ui-typography')"><i class="ri-text"></i>Typography</a></li>
                           <li><a href="#" @click.prevent="$router.push('/ui-alerts')"><i class="ri-alert-fill"></i>Alerts</a></li>
                           <li><a href="#" @click.prevent="$router.push('/ui-badges')"><i class="ri-building-3-fill"></i>Badges</a></li>
                           <li><a href="#" @click.prevent="$router.push('/ui-breadcrumb')"><i class="ri-guide-fill"></i>Breadcrumb</a></li>
                           <li><a href="#" @click.prevent="$router.push('/ui-buttons')"><i class="ri-checkbox-blank-fill"></i>Buttons</a></li>
                           <li><a href="#" @click.prevent="$router.push('/ui-cards')"><i class="ri-bank-card-fill"></i>Cards</a></li>
                           <li><a href="#" @click.prevent="$router.push('/ui-carousel')"><i class="ri-slideshow-4-fill"></i>Carousel</a></li>
                           <li><a href="#" @click.prevent="$router.push('/ui-embed-video')"><i class="ri-movie-fill"></i>Video</a></li>
                           <li><a href="#" @click.prevent="$router.push('/ui-grid')"><i class="ri-grid-fill"></i>Grid</a></li>
                           <li><a href="#" @click.prevent="$router.push('/ui-images')"><i class="ri-image-fill"></i>Images</a></li>
                           <li><a href="#" @click.prevent="$router.push('/ui-list-group')"><i class="ri-file-list-fill"></i>list Group</a></li>
                           <li><a href="#" @click.prevent="$router.push('/ui-media-object')"><i class="ri-camera-fill"></i>Media</a></li>
                           <li><a href="#" @click.prevent="$router.push('/ui-modal')"><i class="ri-checkbox-blank-fill"></i>Modal</a></li>
                           <li><a href="#" @click.prevent="$router.push('/ui-notifications')"><i class="ri-notification-3-fill"></i>Notifications</a></li>
                           <li><a href="#" @click.prevent="$router.push('/ui-pagination')"><i class="ri-more-fill"></i>Pagination</a></li>
                           <li><a href="#" @click.prevent="$router.push('/ui-popovers')"><i class="ri-folder-shield-fill"></i>Popovers</a></li>
                           <li><a href="#" @click.prevent="$router.push('/ui-progressbars')"><i class="ri-battery-low-fill"></i>Progressbars</a></li>
                           <li><a href="#" @click.prevent="$router.push('/ui-tabs')"><i class="ri-database-fill"></i>Tabs</a></li>
                           <li><a href="#" @click.prevent="$router.push('/ui-tooltips')"><i class="ri-record-mail-fill"></i>Tooltips</a></li>
                        </ul>
                     </li>
                     <li>
                        <a href="javascript:void(0);" class="iq-waves-effect"><i class="ri-device-fill"></i><span>Forms</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                        <ul class="iq-submenu">
                           <li><a href="#"><i class="ri-tablet-fill"></i>Form Elements</a></li>
                           <li><a href="#"><i class="ri-device-fill"></i>Form Validation</a></li>
                           <li><a href="#"><i class="ri-toggle-fill"></i>Form Switch</a></li>
                           <li><a href="#"><i class="ri-chat-check-fill"></i>Form Checkbox</a></li>
                           <li><a href="#"><i class="ri-radio-button-fill"></i>Form Radio</a></li>
                        </ul>
                     </li>
                     <li>
                        <a href="javascript:void(0);" class="iq-waves-effect"><i class="ri-file-word-fill"></i><span>Forms Wizard</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                        <ul class="iq-submenu">
                           <li><a href="#"><i class="ri-anticlockwise-fill"></i>Simple Wizard</a></li>
                           <li><a href="#"><i class="ri-anticlockwise-2-fill"></i>Validate Wizard</a></li>
                           <li><a href="#"><i class="ri-clockwise-fill"></i>Vertical Wizard</a></li>
                        </ul>
                     </li>
                     <li class="active">
                        <a href="javascript:void(0);" class="iq-waves-effect"><i class="ri-table-fill"></i><span>Table</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                        <ul class="iq-submenu">
                           <li class="active"><a href="#" @click.prevent="$router.push('/tables-basic')"><i class="ri-table-fill"></i>Basic Tables</a></li>
                           <li><a href="#" @click.prevent="$router.push('/data-table')"><i class="ri-table-2"></i>Data Table</a></li>
                           <li><a href="#" @click.prevent="$router.push('/table-editable')"><i class="ri-archive-drawer-fill"></i>Editable Table</a></li>
                        </ul>
                     </li>
                     <li>
                        <a href="javascript:void(0);" class="iq-waves-effect"><i class="ri-bar-chart-2-fill"></i><span>Charts</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                        <ul class="iq-submenu">
                           <li><a href="#" @click.prevent="$router.push('/chart-morris')"><i class="ri-file-chart-fill"></i>Morris Chart</a></li>
                           <li><a href="#" @click.prevent="$router.push('/chart-high')"><i class="ri-bar-chart-fill"></i>High Charts</a></li>
                           <li><a href="#" @click.prevent="$router.push('/chart-am')"><i class="ri-bar-chart-box-fill"></i>Am Charts</a></li>
                           <li><a href="#" @click.prevent="$router.push('/chart-apex')"><i class="ri-pie-chart-box-fill"></i>Apex Chart</a></li>
                        </ul>
                     </li>
                     <li>
                        <a href="javascript:void(0);" class="iq-waves-effect"><i class="ri-copper-coin-fill"></i><span>Icons</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                        <ul class="iq-submenu">
                           <li><a href="#" @click.prevent="$router.push('/icon-dripicons')"><i class="ri-stack-fill"></i>Dripicons</a></li>
                           <li><a href="#" @click.prevent="$router.push('/icon-fontawesome-5')"><i class="ri-facebook-fill"></i>Font Awesome 5</a></li>
                           <li><a href="#" @click.prevent="$router.push('/icon-lineawesome')"><i class="ri-keynote-fill"></i>line Awesome</a></li>
                           <li><a href="#" @click.prevent="$router.push('/icon-remixicon')"><i class="ri-remixicon-fill"></i>Remixicon</a></li>
                           <li><a href="#" @click.prevent="$router.push('/icon-unicons')"><i class="ri-underline"></i>unicons</a></li>
                        </ul>
                     </li>
                     <li class="iq-menu-title"><i class="ri-subtract-line"></i><span>Pages</span></li>
                     <li>
                        <a href="javascript:void(0);" class="iq-waves-effect"><i class="ri-server-fill"></i><span>Authentication</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                        <ul class="iq-submenu">
                           <li><a href="#" @click.prevent="$router.push('/sign-in')"><i class="ri-login-box-fill"></i>Login</a></li>
                           <li><a href="#" @click.prevent="$router.push('/sign-up')"><i class="ri-logout-box-fill"></i>Register</a></li>
                           <li><a href="#" @click.prevent="$router.push('/pages-recoverpw')"><i class="ri-record-mail-fill"></i>Recover Password</a></li>
                           <li><a href="#" @click.prevent="$router.push('/pages-confirm-mail')"><i class="ri-chat-check-fill"></i>Confirm Mail</a></li>
                           <li><a href="#" @click.prevent="$router.push('/pages-lock-screen')"><i class="ri-file-lock-fill"></i>Lock Screen</a></li>
                        </ul>
                     </li>
                     <li>
                        <a href="javascript:void(0);" class="iq-waves-effect"><i class="ri-map-pin-2-fill"></i><span>Maps</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                        <ul class="iq-submenu">
                           <li><a href="#" @click.prevent="$router.push('/pages-map')"><i class="ri-google-fill"></i>Google Map</a></li>
                           <li><a href="#"><i class="ri-map-pin-range-line"></i>Vector Map</a></li>
                        </ul>
                     </li>
                     <li>
                        <a href="javascript:void(0);" class="iq-waves-effect"><i class="ri-folders-fill"></i><span>Extra Pages</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                        <ul class="iq-submenu">
                           <li><a href="#" @click.prevent="$router.push('/pages-timeline')"><i class="ri-map-pin-time-fill"></i>Timeline</a></li>
                           <li><a href="#" @click.prevent="$router.push('/pages-invoice')"><i class="ri-question-answer-fill"></i>Invoice</a></li>
                           <li><a href="#"><i class="ri-checkbox-blank-fill"></i>Blank Page</a></li>
                           <li><a href="#" @click.prevent="$router.push('/pages-error')"><i class="ri-error-warning-fill"></i>Error 404</a></li>
                           <li><a href="#" @click.prevent="$router.push('/pages-error-500')"><i class="ri-error-warning-fill"></i>Error 500</a></li>
                           <li><a href="#" @click.prevent="$router.push('/pages-pricing')"><i class="ri-price-tag-3-fill"></i>Pricing</a></li>
                           <li><a href="#" @click.prevent="$router.push('/pages-pricing-one')"><i class="ri-price-tag-2-fill"></i>Pricing 1</a></li>
                           <li><a href="#" @click.prevent="$router.push('/pages-maintenance')"><i class="ri-git-repository-commits-fill"></i>Maintenance</a></li>
                           <li><a href="#" @click.prevent="$router.push('/pages-comingsoon')"><i class="ri-run-fill"></i>Coming Soon</a></li>
                           <li><a href="#" @click.prevent="$router.push('/pages-faq')"><i class="ri-compasses-2-fill"></i>Faq</a></li>
                        </ul>
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
                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                           <li class="nav-item">
                              <a class="search-toggle iq-waves-effect language-title" href="#"><img src="/assets/images/small/flag-01.png" alt="img-flaf" class="img-fluid mr-1" style="height: 16px; width: 16px;" /> English <i class="ri-arrow-down-s-line"></i></a>
                              <div class="iq-sub-dropdown">
                                 <a class="iq-sub-card" href="#"><img src="/assets/images/small/flag-02.png" alt="img-flaf" class="img-fluid mr-2" />French</a>
                                 <a class="iq-sub-card" href="#"><img src="/assets/images/small/flag-03.png" alt="img-flaf" class="img-fluid mr-2" />Spanish</a>
                                 <a class="iq-sub-card" href="#"><img src="/assets/images/small/flag-04.png" alt="img-flaf" class="img-fluid mr-2" />Italian</a>
                                 <a class="iq-sub-card" href="#"><img src="/assets/images/small/flag-05.png" alt="img-flaf" class="img-fluid mr-2" />German</a>
                                 <a class="iq-sub-card" href="#"><img src="/assets/images/small/flag-06.png" alt="img-flaf" class="img-fluid mr-2" />Japanese</a>
                              </div>
                           </li>
                           <li class="nav-item iq-full-screen">
                              <a href="#" class="iq-waves-effect" id="btnFullscreen"><i class="ri-fullscreen-line"></i></a>
                           </li>
                           <li class="nav-item">
                              <a href="#" class="search-toggle iq-waves-effect">
                                 <i class="ri-notification-3-fill"></i>
                                 <span class="bg-danger dots"></span>
                              </a>
                              <div class="iq-sub-dropdown">
                                 <div class="iq-card shadow-none m-0">
                                    <div class="iq-card-body p-0 ">
                                       <div class="bg-primary p-3">
                                          <h5 class="mb-0 text-white">All Notifications<small class="badge  badge-light float-right pt-1">4</small></h5>
                                       </div>
                                       <a href="#" class="iq-sub-card" >
                                          <div class="media align-items-center">
                                             <div class="">
                                                <img class="avatar-40 rounded" src="/assets/images/user/01.jpg" alt="">
                                             </div>
                                             <div class="media-body ml-3">
                                                <h6 class="mb-0 ">Emma Watson Bini</h6>
                                                <small class="float-right font-size-12">Just Now</small>
                                                <p class="mb-0">95 MB</p>
                                             </div>
                                          </div>
                                       </a>
                                       <a href="#" class="iq-sub-card" >
                                          <div class="media align-items-center">
                                             <div class="">
                                                <img class="avatar-40 rounded" src="/assets/images/user/02.jpg" alt="">
                                             </div>
                                             <div class="media-body ml-3">
                                                <h6 class="mb-0 ">New customer is join</h6>
                                                <small class="float-right font-size-12">5 days ago</small>
                                                <p class="mb-0">Jond Bini</p>
                                             </div>
                                          </div>
                                       </a>
                                       <a href="#" class="iq-sub-card" >
                                          <div class="media align-items-center">
                                             <div class="">
                                                <img class="avatar-40 rounded" src="/assets/images/user/03.jpg" alt="">
                                             </div>
                                             <div class="media-body ml-3">
                                                <h6 class="mb-0 ">Two customer is left</h6>
                                                <small class="float-right font-size-12">2 days ago</small>
                                                <p class="mb-0">Jond Bini</p>
                                             </div>
                                          </div>
                                       </a>
                                       <a href="#" class="iq-sub-card" >
                                          <div class="media align-items-center">
                                             <div class="">
                                                <img class="avatar-40 rounded" src="/assets/images/user/04.jpg" alt="">
                                             </div>
                                             <div class="media-body ml-3">
                                                <h6 class="mb-0 ">New Mail from Fenny</h6>
                                                <small class="float-right font-size-12">3 days ago</small>
                                                <p class="mb-0">Jond Bini</p>
                                             </div>
                                          </div>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </li>
                           <li class="nav-item dropdown">
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
                           </li>
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
                  <div class="col-sm-12 col-lg-6">
                     <div class="iq-card">
                        <div class="iq-card-header d-flex justify-content-between">
                           <div class="iq-header-title">
                              <h4 class="card-title">Tables</h4>
                           </div>
                        </div>
                        <div class="iq-card-body">
                           <p>The <code>.table </code> class adds basic styling to a table.</p>
                           <table class="table">
                              <thead>
                                 <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                     <div class="iq-card">
                        <div class="iq-card-header d-flex justify-content-between">
                           <div class="iq-header-title">
                              <h4 class="card-title">Table Head Options</h4>
                           </div>
                        </div>
                        <div class="iq-card-body">
                           <p>Similar to tables and dark tables, use the modifier classes <code class="highlighter-rouge">.thead-light</code> or <code class="highlighter-rouge">.thead-dark</code> to make <code class="highlighter-rouge">&lt;thead&gt;</code>s appear light or dark gray.</p>
                           <table class="table">
                              <thead class="thead-dark">
                                 <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                 </tr>
                              </tbody>
                           </table>
                           <table class="table">
                              <thead class="thead-light">
                                 <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                     <div class="iq-card">
                        <div class="iq-card-header d-flex justify-content-between">
                           <div class="iq-header-title">
                              <h4 class="card-title">Borderless table</h4>
                           </div>
                        </div>
                        <div class="iq-card-body">
                           <p>Add <code class="highlighter-rouge">.table-borderless</code> for a table without borders.</p>
                           <table class="table table-borderless">
                              <thead>
                                 <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                 </tr>
                              </tbody>
                           </table>
                           <p><code class="highlighter-rouge">.table-borderless</code> can also be used on dark tables.</p>
                           <table class="table table-borderless table-dark">
                              <thead>
                                 <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                     <div class="iq-card">
                        <div class="iq-card-header d-flex justify-content-between">
                           <div class="iq-header-title">
                              <h4 class="card-title">Small table</h4>
                           </div>
                        </div>
                        <div class="iq-card-body">
                           <p>Add <code class="highlighter-rouge">.table-sm</code> to make tables more compact by cutting cell padding in half.</p>
                           <table class="table table-sm">
                              <thead>
                                 <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                 </tr>
                              </tbody>
                           </table>
                           <table class="table table-sm table-dark">
                              <thead>
                                 <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                     <div class="iq-card">
                        <div class="iq-card-header d-flex justify-content-between">
                           <div class="iq-header-title">
                              <h4 class="card-title">Captions</h4>
                           </div>
                        </div>
                        <div class="iq-card-body">
                           <p>A <code class="highlighter-rouge">&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.</p>
                           <table class="table">
                              <caption>List of users</caption>
                              <thead>
                                 <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-12 col-lg-6">
                     <div class="iq-card">
                        <div class="iq-card-header d-flex justify-content-between">
                           <div class="iq-header-title">
                              <h4 class="card-title">Table Dark</h4>
                           </div>
                        </div>
                        <div class="iq-card-body">
                           <p>You can also invert the colors—with light text on dark backgrounds—with <code class="highlighter-rouge">.table-dark</code>.</p>
                           <table class="table table-dark">
                              <thead>
                                 <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                     <div class="iq-card">
                        <div class="iq-card-header d-flex justify-content-between">
                           <div class="iq-header-title">
                              <h4 class="card-title">Striped Rows</h4>
                           </div>
                        </div>
                        <div class="iq-card-body">
                           <p>Use <code class="highlighter-rouge">.table-striped</code> to add zebra-striping to any table row within the <code class="highlighter-rouge">&lt;tbody&gt;</code>.</p>
                           <table class="table table-striped">
                              <thead>
                                 <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                 </tr>
                              </tbody>
                           </table>
                           <table class="table table-striped table-dark">
                              <thead>
                                 <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                     <div class="iq-card">
                        <div class="iq-card-header d-flex justify-content-between">
                           <div class="iq-header-title">
                              <h4 class="card-title">Hoverable rows</h4>
                           </div>
                        </div>
                        <div class="iq-card-body">
                           <p>Add <code class="highlighter-rouge">.table-hover</code> to enable a hover state on table rows within a <code class="highlighter-rouge">&lt;tbody&gt;</code>.</p>
                           <table class="table table-hover">
                              <thead>
                                 <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                 </tr>
                              </tbody>
                           </table>
                           <table class="table table-hover table-dark">
                              <thead>
                                 <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                     <div class="iq-card">
                        <div class="iq-card-header d-flex justify-content-between">
                           <div class="iq-header-title">
                              <h4 class="card-title">Contextual classes</h4>
                           </div>
                        </div>
                        <div class="iq-card-body">
                           <p>Use contextual classes to color table rows or individual cells.</p>
                           <table class="table">
                              <thead>
                                 <tr>
                                    <th scope="col">Class</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr class="table-active">
                                    <th scope="row">Active</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">Default</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                 </tr>
                                 <tr class="table-primary">
                                    <th scope="row">Primary</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                 </tr>
                                 <tr class="table-secondary">
                                    <th scope="row">Secondary</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                 </tr>
                                 <tr class="table-success">
                                    <th scope="row">Success</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                 </tr>
                                 <tr class="table-danger">
                                    <th scope="row">Danger</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                 </tr>
                                 <tr class="table-warning">
                                    <th scope="row">Warning</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                 </tr>
                                 <tr class="table-info">
                                    <th scope="row">Info</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                 </tr>
                              </tbody>
                           </table>
                           <p>Regular table background variants are not available with the dark table, however, you may use <a href="https://getbootstrap.com/" target="_blank">text or background utilities</a> to achieve similar styles.</p>
                           <table class="table table-dark">
                              <thead>
                                 <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr class="bg-primary">
                                    <th scope="row">1</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">2</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                 </tr>
                                 <tr class="bg-success">
                                    <th scope="row">3</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">4</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                 </tr>
                                 <tr class="bg-info">
                                    <th scope="row">5</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">6</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                 </tr>
                                 <tr class="bg-warning">
                                    <th scope="row">7</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">8</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                 </tr>
                                 <tr class="bg-danger">
                                    <th scope="row">9</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-12">
                     <div class="iq-card">
                        <div class="iq-card-header d-flex justify-content-between">
                           <div class="iq-header-title">
                              <h4 class="card-title">Responsive tables</h4>
                           </div>
                        </div>
                        <div class="iq-card-body">
                           <p>Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a <code class="highlighter-rouge">.table</code> with <code class="highlighter-rouge">.table-responsive</code>. Or, pick a maximum breakpoint with which to have a responsive table up to by using <code class="highlighter-rouge">.table-responsive{-sm|-md|-lg|-xl}</code>.</p>
                           <div class="table-responsive">
                              <table class="table">
                                 <thead>
                                    <tr>
                                       <th scope="col">#</th>
                                       <th scope="col">Heading</th>
                                       <th scope="col">Heading</th>
                                       <th scope="col">Heading</th>
                                       <th scope="col">Heading</th>
                                       <th scope="col">Heading</th>
                                       <th scope="col">Heading</th>
                                       <th scope="col">Heading</th>
                                       <th scope="col">Heading</th>
                                       <th scope="col">Heading</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <th scope="row">1</th>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                    </tr>
                                    <tr>
                                       <th scope="row">2</th>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                    </tr>
                                    <tr>
                                       <th scope="row">3</th>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                       <td>Cell</td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <!-- Footer -->
            <footer class="bg-white iq-footer">
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
         </div>
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
      
  </div>
</template>

<script setup lang="ts">
// static migration: original JS (if any) loads globally via index.html
</script>


