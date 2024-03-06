<script>
	import Clock from './Clock.svelte';
	import Start from './Start.svelte';
</script>

<div class="taskbar">
	<Start />
	<Clock />
</div>

<style>
	.taskbar {
		position: absolute;
		bottom: 0;
		left: 0;
		padding: 0;
		background: rgb(25, 65, 165);
		background: linear-gradient(
			0deg,
			rgba(25, 65, 165, 1) 5%,
			rgba(38, 98, 223, 1) 30%,
			rgba(38, 89, 214, 1) 80%,
			rgba(73, 147, 230, 1) 90%,
			rgba(49, 104, 213, 1) 100%
		);
		width: 100%;
		height: 30px;
		display: inline-flex;
		overflow: hidden;
	}
</style>
