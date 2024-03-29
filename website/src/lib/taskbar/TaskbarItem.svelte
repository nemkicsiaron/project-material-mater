<script>
    const {iconUri, title} = $props();
    /**@type {boolean}*/
    let selected = $state(true);

    function unfocus() {
        selected = false;
    }

    function focus() {
        selected = true;
    }

</script>
<div class="tab {selected ? 'selected' : ''}">
    <enhanced:img src={iconUri} alt="An icon in the top left of a window" style="max-height: 20px; max-width: 20px;" />
    <p>{title}</p>
</div>


<style>
    .tab {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        gap: 5px;
        background-color: rgb(35, 133, 255);
        color: #fff;
        border-radius: 3px;
        padding: 3px;
    }

    .selected {
        background-color: rgb(93, 179, 255);
    }
</style>