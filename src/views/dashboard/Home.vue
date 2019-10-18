<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
			  <span class="text-uppercase page-subtitle">Escritorio</span>
			  <h3 class="page-title">Visión general</h3>
		  </div>
	  </div>
  <div class="row">
    <!-- MENSAJES -->
    <div class="col-lg-5 col-md-12 col-sm-12 mb-4">
      <div class="card card-small blog-comments">
        <div class="card-header border-bottom">
          <h6 class="m-0">Mensajes</h6>
        </div>
        <div class="card-body p-0">
          <div class="blog-comments__item d-flex p-3">
            <div class="blog-comments__content">
              <div class="blog-comments__meta text-muted">
                <a class="text-secondary" href="#">Sergey Brin</a> – Hace 3 días
              </div>
              <p class="m-0 my-1 mb-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida malesuada massa...</p>
              <div class="blog-comments__actions">
                <div class="btn-group btn-group-sm">
                  <button type="button" class="btn btn-white">
                    Leer más 
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="blog-comments__item d-flex p-3">
            <div class="blog-comments__content">
              <div class="blog-comments__meta text-muted">
                <a class="text-secondary" href="#">Jeff Bezos</a> <span class="text-muted">– Hace 4 días</span>
              </div>
              <p class="m-0 my-1 mb-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida malesuada massa...</p>
              <div class="blog-comments__actions">
                <div class="btn-group btn-group-sm">
                  <button type="button" class="btn btn-white">
                    Leer más
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="blog-comments__item d-flex p-3">
            <div class="blog-comments__content">
              <div class="blog-comments__meta text-muted">
                <a class="text-secondary" href="#">Jack Dorsey</a> on <a class="text-secondary" href="#">Hello World!</a> <span class="text-muted">– Hace 5 días</span>
              </div>
              <p class="m-0 my-1 mb-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida malesuada massa...</p>
              <div class="blog-comments__actions">
                <div class="btn-group btn-group-sm">
                  <button type="button" class="btn btn-white">
                    Leer más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer border-top">
          <div class="row">
            <div class="col text-center view-report">
              <router-link class="btn btn-white" to="/mensajes">Ver todos los mensajes</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- POSTULACIONES -->
    <div class="col-lg-7 col-md-12 col-sm-12 mb-4">
    <div class="card card-small blog-comments">
      <div class="card-header border-bottom">
        <h6 class="m-0">Postulaciones</h6>
      </div>
      <div class="card-body p-0">
        <div class="blog-comments__item d-flex p-3">
          <div class="blog-comments__avatar mr-3">
            <img src="images/avatars/1.jpg" alt="User avatar" />
          </div>
          <div class="blog-comments__content">
            <div class="blog-comments__meta text-muted">
              <a class="text-secondary" href="#">Michael Faraday</a> – Hace 3 días
            </div>
            <p class="m-0 my-1 mb-2 text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed orci viverra augue interdum dictum quis et velit. Nulla vitae volutpat elit. Sed erat est, placerat a dui et, venenatis rhoncus tortor. Fusce venenatis, augue vitae euismod lacinia, est nibh rutrum arcu, vitae gravida nunc lectus in ipsum.
            </p>
            <div class="blog-comments__actions">
              <div class="btn-group btn-group-sm">
                <button type="button" class="btn btn-white">
                  Leer más 
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="blog-comments__item d-flex p-3">
          <div class="blog-comments__avatar mr-3">
            <img src="images/avatars/2.jpg" alt="User avatar" />
          </div>
          <div class="blog-comments__content">
            <div class="blog-comments__meta text-muted">
              <a class="text-secondary" href="#">Alan Turing</a> on <a class="text-secondary" href="#">Hello World!</a> <span class="text-muted">– Hace 4 días</span>
            </div>
            <p class="m-0 my-1 mb-2 text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed orci viverra augue interdum dictum quis et velit. Nulla vitae volutpat elit. Sed erat est, placerat a dui et, venenatis rhoncus tortor. Fusce venenatis, augue vitae euismod lacinia, est nibh rutrum arcu, vitae gravida nunc lectus in ipsum.
            </p>
            <div class="blog-comments__actions">
              <div class="btn-group btn-group-sm">
                <button type="button" class="btn btn-white">
                  Leer más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer border-top">
        <div class="row">
          <div class="col text-center view-report">
            <button type="submit" class="btn btn-white">Ver todas las postulaciones</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

	</div>
</template>