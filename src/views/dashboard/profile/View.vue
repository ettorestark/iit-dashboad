<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
				<span class="text-uppercase page-subtitle">Perfil de usuario</span>
				<h3 class="page-title">Visión general</h3>
			</div>
		</div>
    <div class="row mt-4">

      <div class="col-sm-12 col-lg-4">
        <div class="card card-small user-details mb-4">
          <div class="card-header p-0">
            <div class="user-details__bg">
              <img src="images/user-profile/up-user-details-background.jpg" alt="User Details Background Image">
            </div>
          </div>
          <div class="card-body p-0">
            <div class="user-details__avatar mx-auto">
              <img src="images/avatars/0.jpg" alt="User Avatar">
            </div>
            <h4 class="text-center m-0 mt-2">Juan Carlos Paredes Bruno</h4>
            <p class="text-center text-light m-0 mb-2">CEO & FOUNDER</p>
            <ul class="user-details__social user-details__social--primary d-table mx-auto mb-4">
              <li class="mx-1"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
              <li class="mx-1"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
              <li class="mx-1"><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li class="mx-1"><a href="#"><i class="fab fa-github"></i></a></li>
            </ul>
            <div class="user-details__user-data border-top border-bottom p-4">
              <div class="row mb-3">
                <div class="col w-50">
                  <span>Correo electrónico</span>
                  <span>jcpared@integralit.com.pe</span>
                </div>
                <div class="col w-50">
                  <span>Ubicación</span>
                  <span>La libertad, Trujillo</span>
                </div>
              </div>
              <div class="row">
                <div class="col w-50">
                  <span>Celular</span>
                  <span>+51 943 772 148</span>
                </div>
              </div>
            </div>
            <div class="user-details__tags p-4">
              <span class="badge badge-pill badge-light text-light text-uppercase mb-2 border">Administración</span>
              <span class="badge badge-pill badge-light text-light text-uppercase mb-2 border">Informática</span>
            
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card card-small user-activity mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Actividad del usuario</h6>
            <div class="block-handle"></div>
          </div>
          <div class="card-body p-0">
            <div class="user-activity__item pr-3 py-3">
              <div class="user-activity__item__icon">
                <i class="fas fa-plus-circle"></i>
              </div>
              <div class="user-activity__item__content">
                <span class="text-light">Hace 3 días</span>
                <p>Agregaste una nueva solución.</p>
              </div>
            </div>
            <div class="user-activity__item pr-3 py-3">
              <div class="user-activity__item__icon">
                <i class="fas fa-user-plus"></i>
              </div>
              <div class="user-activity__item__content">
                <span class="text-light">Hace 7 días</span>
                <p>Agregaste a un nuevo usuario.</p>
              </div>
            </div>
            <div class="user-activity__item pr-3 py-3">
              <div class="user-activity__item__icon">
                <i class="fas fa-user-plus"></i>
              </div>
              <div class="user-activity__item__content">
                <span class="text-light">Hace 10 días</span>
                <p>Agregaste a un nuevo usuario.</p>
              </div>
            </div>
            <div class="user-activity__item pr-3 py-3">
              <div class="user-activity__item__icon">
                <i class="fas fa-plus-circle"></i>
              </div>
              <div class="user-activity__item__content">
                <span class="text-light">Hace 12 días</span>
                <p>Agregaste una nueva publicación.</p>
              </div>
            </div>
          </div>
          <div class="card-footer border-top">
            <button class="btn btn-sm btn-white d-table mx-auto">Ver más</button>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>