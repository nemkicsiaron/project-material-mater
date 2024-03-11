<script>
	import DesktopItem from "./DesktopItem.svelte";
    //import TestBg from '$lib/assets/images/my-comp-test.png'

    let openWindows = $state([]);

    /**
     * @type function
     * @param app: App -- A Svelte component representing a
     */
    const openNewWindow = (app) => {
        openWindows.push(app);
    }

    $effect

    let isDragging = false;
    let startX, startY, endX, endY;

    /*
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

    let app = "testApp";
</script>

<div class="desktop">
    <!-- <DesktopItem {app} iconUri={TestBg} name ='blabla'> </DesktopItem> -->
    <DesktopItem {app} iconUri='/../icons/my-comp-test.png' title open={(app) => openWindows.push(app)}/>
</div>

<style>
    .desktop {
        background: url($lib/assets/images/win-bg.jpg?enhanced) no-repeat;
        background-size: cover;
        background-position: center;
        flex: 1;
        z-index: 0;
    }
</style>