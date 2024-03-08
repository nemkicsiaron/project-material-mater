<script>
    import { enhancedImages } from "@sveltejs/enhanced-img";
    /** */
    let { app = '', iconUri = '', name = ''} = $props();
    console.log(app, iconUri)
</script>

<div class="container">
    <!-- <enhanced:img src={} alt="Desktop icon for App" /> -->
    <text>
        {name}
    </text>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        max-width: 150px;

    }
    img {
        min-width: 40px;
        max-width: 40px;
        min-height: 40px;
        max-height: 40px;
    }
</style>
