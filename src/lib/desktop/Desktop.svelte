<script>
	import DesktopItem from './DesktopItem.svelte';
	import GalleryApp from '$lib/apps/GalleryApp.svelte';
	import Window from './Window.svelte';
	import MyComp from '$lib/assets/images/my-comp-test.png?enhanced';

	/** Icons displayed on the desktop
     * @typedef {{app: function, iconUri: Object, title: string, component: Object}} Icon*/

    /**@type {Icon[]}*/
	let desktopIcons = $state([]);
	let openWindows = $state([]);

	/**
	 * @type function
	 * @param {function} app -- A Svelte component representing an AppComponent from $lib/apps
	 * @param {object} iconUri -- Svelte enhanced img from import
	 * @param {string} title -- Title of app
	 */

	function openNewWindow(app, iconUri, title) {
		//openWindows.push(app);
		const newApp = {
			appComponent: app,
			iconUri: iconUri,
			title: title
		};
		openWindows = [...openWindows, newApp];
	};

	let test;

	console.log(test);

	/**@param {number} index*/
	function closeWindow(index, app) {
		if(index == null || index < 0) index = openWindows.indexOf(app);

		openWindows.splice(index, 1);
	}

    console.log(MyComp.img.src);

	$effect(() => {
		console.log(openWindows);
	});

	desktopIcons.push({
		app: GalleryApp,
		iconUri: MyComp,
		title: 'Test Gallery Application',
        component: null
	});

    /*
	let isDragging = false;
	let startX, startY, endX, endY;

    const handleMouseDown = (event) => {
        isDragging = true;
        startX = event.clientX;
        startY = event.clientY;
        endX = startX;
        endY = startY;
    }

    const handleMouseMove = (event) => {
        if (isDragging) {
        endX = event.clientX;
        endY = event.clientY;
        }
    }

    const handleMouseUp = (event) => {
        isDragging = false;
        // Here you can perform any action you want with the selected area,
        // for example, finding elements within the selected area.
    }*/
</script>

{#snippet window({ appComponent, iconUri, title })}
	<div class="window" style="width: 600px; color:white">
		<div class="title-bar" style="user-select: none; padding-left: 5px">
			<img src={iconUri.img.src} alt="An icon in the top left of a window" style="max-height: 20px;" />
			<div class="title-bar-text">{title}</div>
			<div class="title-bar-controls">
				<button aria-label="Minimize"></button>
				<button aria-label="Maximize"></button>
				<button aria-label="Close"></button>
			</div>
		</div>
		<div class="window-body">
			<svelte:component this={appComponent} />
		</div>
	</div>
{/snippet}


<div class="desktop">
	<!-- <DesktopItem {app} iconUri={TestBg} name ='blabla'> </DesktopItem> -->
	{#each desktopIcons as di}
		<DesktopItem bind:this={di.component} app={di.app} iconUri={di.iconUri} title={di.title} open={openNewWindow} />
	{/each}
	{#each openWindows as w}
        {@render window(w)}
	{/each}
	<!-- svelte-ignore a11y-click-events-have-key-events-->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions-->
	<div class="emptyspace" onclick={() => desktopIcons.map((di) => di.component.unfocus())} role="none"></div>
</div>

<style>
	.desktop {
		background: url($lib/assets/images/win-bg.jpg?enhanced) no-repeat;
		background-size: cover;
		background-position: center;
		flex: 1;
		z-index: 0;
		padding: 5px;
	}

	.emptyspace {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}
</style>
