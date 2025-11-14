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

                    <li class="active"><a href="#" @click.prevent="$router.push('/chat')" class="iq-waves-effect"><i class="ri-message-fill"></i><span>Chat</span></a></li>
                     
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
                     <li>
                        <a href="javascript:void(0);" class="iq-waves-effect"><i class="ri-table-fill"></i><span>Table</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                        <ul class="iq-submenu">
                           <li><a href="#" @click.prevent="$router.push('/tables-basic')"><i class="ri-table-fill"></i>Basic Tables</a></li>
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
            <router-view></router-view>
         </div>
   </div>
</template>
<script setup>
</script>