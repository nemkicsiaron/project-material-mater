<script>
	import Taskbar from '../taskbar/Taskbar.svelte'
	import DesktopItem from './DesktopItem.svelte';
	import GalleryApp from '$lib/apps/GalleryApp.svelte';
	import Window from './Window.svelte';
	import MyComp from '$lib/assets/images/my-comp-test.png?enhanced';

	/** Icons displayed on the desktop
     * @typedef {{app: function, iconUri: Object, title: string, component: Object}} Icon*/
	/** Apps that can be opened as windows
     * @typedef {{appComponent: function, iconUri: Object, title: string, component: Object}} Window*/

    /**@type {Icon[]}*/
	let desktopIcons = $state([]);
	/**@type {Window[]}*/
	let openWindows = $state([]);

	/**
	 * @function
	 * @param {function} app -- A Svelte component representing an AppComponent from $lib/apps
	 * @param {object} iconUri -- Svelte enhanced img from import
	 * @param {string} title -- Title of app
	 */

	function openNewWindow(app, iconUri, title) {
		//openWindows.push(app);
		const newApp = {
			appComponent: app,
			iconUri: iconUri,
			title: title,
			component: null,
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

	function emptyClick() {
		desktopIcons.map((di) => di.component.unfocus());
		openWindows.map((w) => w.component.unfocus());
	}

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


<div class="desktop">
	{#each desktopIcons as di}
		<DesktopItem bind:this={di.component} app={di.app} iconUri={di.iconUri} title={di.title} open={openNewWindow} />
	{/each}
	{#each openWindows as w, i}
        <!-- {@render window(w)} -->
		<Window bind:this={w.component} appComponent={w.appComponent} title={w.title} iconUri={w.iconUri} />
			<!-- {w.appComponent} -->
	{/each}
	<!-- svelte-ignore a11y-click-events-have-key-events-->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions-->
	<div class="emptyspace" onclick={emptyClick} role="none"></div>
</div>
<Taskbar {openWindows} />

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
