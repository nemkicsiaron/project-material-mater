<script>
	import Taskbar from '$lib/taskbar/Taskbar.svelte';
</script>

<main>
	<slot />
	<Taskbar />
</main>

<style>
	@font-face {
		font-family: 'MS Sans Serif';
		src: url('/static/micross.ttf');
		src:
			local(''),
			url('/micross.ttf') format('truetype');
		font-weight: normal;
		font-size: normal;
	}
	main {
		height: 100%;
		width: 100%;
		min-width: 175px;
		top: 0;
		left: 0;
		overflow: hidden;
		background: url($lib/assets/images/win-bg.jpg?enhanced) no-repeat;
		background-size: cover;
		background-position: center;
		position: absolute;
	}
</style>
