<script>
	import { onMount } from 'svelte';

	let time = $state(new Date());

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<button>
	{time.getHours()}:{time.getMinutes() >= 10 ? time.getMinutes() : `0` + time.getMinutes()}
</button>

<style>
	button {
		width: 70px;
		height: 30px;
		color: white;
		position: absolute;
		border: 0;
		border-left: 1.5px solid #0b3051;
		right: 0;
		background: rgb(18, 144, 232);
		background: radial-gradient(
			circle,
			rgba(18, 144, 232, 1) 15%,
			rgba(13, 141, 234, 1) 92%,
			rgba(26, 215, 250, 1) 100%
		);
	}
</style>
