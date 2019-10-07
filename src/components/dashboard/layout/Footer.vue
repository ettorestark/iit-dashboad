<template>
	<footer class="main-footer d-flex p-2 px-3 bg-white border-top">
		<span class="copyright ml-auto my-auto mr-2">
			Todos los derechos reservados © {{ year }}
		</span>
	</footer>
</template>

<script>
	export default {
		data() {
			return {
				year: new Date().getFullYear()
			}
		}
	}
</script>