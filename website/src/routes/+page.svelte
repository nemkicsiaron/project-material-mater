<script>
	import Desktop from '$lib/desktop/Desktop.svelte';

	const { data } = $props();

	console.log("Data: " + JSON.stringify(data));
</script>

<main>
	<!----<iframe src="https://jspaint.app" width="100%" height="100%" title="Paint"></iframe>-->
	<Desktop></Desktop>
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
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
