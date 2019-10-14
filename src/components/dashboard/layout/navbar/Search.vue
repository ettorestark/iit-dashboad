<template>
    <form action="#" class=" visibility-hidden main-navbar__search w-100 d-none d-md-flex d-lg-flex">
      <div class="input-group input-group-seamless ml-3">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <i class="fas fa-search"></i>
          </div>
        </div>
        <input class="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search">
      </div>
    </form>
</template>

<style>
	.visibility-hidden {
		visibility: hidden;
	}
</style>