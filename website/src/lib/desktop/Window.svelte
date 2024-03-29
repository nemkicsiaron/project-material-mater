<script>
    const { appComponent, iconUri, title } = $props()
    /**@type {boolean}*/
    let selected = $state(true);

    function closeWindow() {

    }

    function unfocus() {
        selected = false;
    }
</script>

<div class="window" style="width: 600px; color:white">
    <div class="title-bar" style="user-select: none; padding-left: 5px">
        <!-- <enhanced:img src={iconUri} alt="An icon in the top left of a window" style="max-height: 20px; max-width: 20px;" /> -->
        <div class="title-bar-text">{title}</div>
        <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
        </div>
    </div>
    <div class="window-body">
        <svelte:component this={appComponent} />
        <!-- <slot /> -->
    </div>
</div>
