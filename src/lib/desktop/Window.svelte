
{#snippet window({app, title, iconUri})}
    <div class="window" style="width: 600px">
        <div class="title-bar">
        <div class="title-bar-text">{title}</div>
        <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
        </div>
        </div>
        <div class="window-body">
            <svelte:component this={app} />
        </div>
    </div>
{/snippet}