<script>
	import Window from './Window.svelte';
	/**
	 * @type {{
	 *  app: *
	 *  iconUri: {string}
	 * 	title: {string}
	 *  open: function
	 * }}
	 */
	let { app = null, iconUri = 'ICON', title = 'Placeholder', open = undefined } = $props();


	export function unfocus() {
		selected = false;
	}

	/**@type {boolean}*/
	let selected = $state(false);
	const selectApp = () => {
		if (selected) {
			//TODO: Open WIndow
			open(app, iconUri, title);
			selected = false;
		} else {
			selected = true;
		}
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events-->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions-->
<div
	class="container"
	onclick={selectApp}
	role="application"
	on:unselect={() => console.log('unfocused')}
>
	<enhanced:img src={iconUri} alt="Desktop icon for {title ?? 'App'}" />
	<div class={selected ? 'selected-filter' : ''}></div>
	<text class={selected ? 'selected' : ''}>
		{title}
	</text>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		max-width: 75px;
		align-items: center;
		position: relative;
		&:focus {
			border: 0.2px lightgray dotted;
		}
	}
	.selected {
		background-color: rgba(0, 78, 247, 0.8);
	}
	.selected-filter {
		background-color: rgba(0, 78, 247, 0.8);
		width: 40px;
		height: 40px;
		position: absolute;
	}
	img {
		min-width: 40px;
		max-width: 40px;
		min-height: 40px;
		max-height: 40px;
		display: block;
	}
	text {
		text-align: center;
		color: #fff;
		text-wrap: wrap;
		-webkit-user-select: none;
		user-select: none;
	}
</style>
