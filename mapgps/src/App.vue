<template>
	<div id="app">
		<Maps></Maps>
	</div>
</template>

<script>
	import Maps from "@/components/map.vue"
	export default {
		name: 'App',
		components: { Maps }
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
