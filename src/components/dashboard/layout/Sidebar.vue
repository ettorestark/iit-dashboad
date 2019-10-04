<template>
	<aside id="sidebar" class="main-sidebar col-12 col-md-3 col-lg-2 px-0">
      <div class="main-navbar">
        <nav class="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
          <a class="navbar-brand w-100 mr-0" href="#" style="line-height: 25px;">
            <div class="d-table m-auto">
              <!-- <img id="main-logo" class="d-inline-block align-top mr-1" style="max-width: 25px;" src="images/shards-dashboards-logo.svg" alt="Shards Dashboard"> -->
              <span class="d-none d-md-inline ml-1">Integral-IT</span>
            </div>
          </a>
          <a class="toggle-sidebar d-sm-inline d-md-none d-lg-none">
            <i class="fas fa-arrow-left"></i>
          </a>
        </nav>
      </div>
      <div class="nav-wrapper">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">
              <i class="fas fa-home"></i>
              <span>Inicio</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/bloguear">
              <i class="fas fa-plus"></i>
              <span>Bloguear</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <i class="fas fa-plus"></i>
              <span>Agregar proyecto</span>
            </router-link>
          </li>
        </ul>
      </div>
    </aside>
</template>

<script>
  console.log(document.querySelectorAll('#sidebar .nav-link').forEach(element => {
    element.addEventListener('click', () => {
      console.log('asd');
    });
  }));
</script>