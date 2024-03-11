<script>
    import Window from './Window.svelte';
    /**
     * @type {{
     *  app: *
     *  iconUri: string
     *  open: function
     * }}
     */
    let { app = null, iconUri = '', open = undefined} = $props();
    //console.log(app, iconUri)
    /**@type {boolean}*/
    let selected = $state(false);
    const selectApp = () => {
        if(selected) {
            //TODO: Open WIndow
            selected = false;
        } else {
            selected = true;
        }
        //console.log(selected);
    }
</script>

<div class="container" onclick={selectApp} role="application">
    <div class={selected ? 'selected-filter' : ''}>
        <img src=${iconUri} alt="Desktop icon for {app.name ?? 'App'}" />
    </div>
    <text class={selected ? 'selected' : ''}>
        {app.name ?? 'App'}
    </text>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        max-width: 75px;
        align-items: center;
        position: relative;
    }
    .selected {
        background-color: rgb(0, 78, 247);
    }
    .selected-filter {
        background-color: rgba(0, 78, 247, 0.6);
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


    }
</style>
