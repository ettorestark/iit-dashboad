<template>
  <li class="nav-item border-right dropdown notifications">
    <a class="nav-link nav-link-icon text-center" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <div class="nav-link-icon__wrapper">
        <i class="fas fa-bell"></i>
        <!-- <span class="badge badge-pill badge-danger">1</span>  -->
      </div>
    </a>
    <div class="dropdown-menu dropdown-menu-small" aria-labelledby="dropdownMenuLink">
      <a class="dropdown-item" href="#">
        <div class="notification__icon-wrapper">
          <div class="notification__icon">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
        </div>
        <div class="notification__content">
          <span class="notification__category">Advertencia</span>
          <p>Aún no tienes notificaciones.</p>
        </div>
      </a>
      <a class="dropdown-item notification__all text-center" href="#"> Ver todas las notificaciones</a>
    </div>
  </li>
</template>