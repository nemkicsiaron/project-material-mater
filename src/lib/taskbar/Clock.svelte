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
	<p role="time">
		{time.getHours()}:{time.getMinutes() >= 10 ? time.getMinutes() : `0` + time.getMinutes()}
	</p>
</button>

<style>
	button {
		width: 75px;
		height: 30px;
		color: white;
		position: absolute;
		border: 0;
		border-left: 1.5px solid #0b3051;
		right: 0;
		background: linear-gradient(90deg, rgba(107, 213, 255, 0.747) 0%, rgba(0, 0, 0, 0) 10%),
			linear-gradient(0deg, #0f6fd0 3%, #1299e7 7%, #138cd8 50%, #139bec 85%, #4bc2f5 100%);
		&:not(:disabled) {
			&:active,
			&.active {
				box-shadow: none;
				background: none;
			}
			&:hover {
				box-shadow: none;
			}
		}
		&:focus,
		&.focused {
			box-shadow: none;
			outline: none;
		}
	}
</style>
