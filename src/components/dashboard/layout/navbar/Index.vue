<template>
  <nav class="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
    <search/>
    <ul class="navbar-nav border-left flex-row ">
      <notifications/>
      <profile/>
    </ul>
    <nav class="nav">
      <a href="#" class="nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-none text-center border-left" data-toggle="collapse" data-target=".header-navbar" aria-expanded="false" aria-controls="header-navbar">
        <i class="fas fa-bars"></i>
      </a>
    </nav>
  </nav>
</template>

<script>
  import Search from './Search.vue'
  import Notifications from './Notifications.vue'
  import Profile from './Profile.vue'
  export default {
    components: {
      'search': Search,
      'notifications': Notifications,
      'profile': Profile
    }
  }
</script>