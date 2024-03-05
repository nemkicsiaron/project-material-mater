<script>
	import Taskbar from '$lib/Taskbar.svelte';
</script>

<main>
	<slot />
	<Taskbar />
</main>

<style>
	main {
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		overflow: hidden;
		background: url(/win-bg.jpg) no-repeat;
		background-size: cover;
		background-position: center;
		position: absolute;
	}
</style>
