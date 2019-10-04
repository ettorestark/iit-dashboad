<template>
    <nav class="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
      <search/>
      <profile/>
      <nav class="nav">
        <a href="#" class="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left" data-toggle="collapse" data-target=".header-navbar" aria-expanded="false" aria-controls="header-navbar">
          <i class="fas fa-bars"></i>
        </a>
      </nav>
    </nav>
</template>

<script>
  import Search from './Search.vue'
  import Profile from './Profile.vue'
  export default {
    components: {
      'search': Search,
      'profile': Profile
    }
  }
</script>