{#snippet window({ appComponent, title, iconUri })}
	<div class="window" style="width: 600px">
		<div class="title-bar">
			<img src={iconUri} alt="An icon in the top left of a window" width />
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
