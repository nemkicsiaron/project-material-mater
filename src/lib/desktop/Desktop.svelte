<script>
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
    }
</script>

<div class="desktop">

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