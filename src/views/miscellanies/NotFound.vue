<template>
	<div class="error">
		<div class="error__content">
			<h2 class="font-weight-bold text-dark">404</h2>
			<h3>Página no encontrada</h3>
			<p>Este enlace está roto o la página ha sido movida.</p>
			<button type="button" class="btn btn-accent btn-pill" @click.prevent="goBack">
				&larr; Regresar
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			goBack() {
				this.$router.go(-1);
			}
		}
	}
</script>