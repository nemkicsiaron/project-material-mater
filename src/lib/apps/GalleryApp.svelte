<script>
	import { getPhotosOfEvent, getPublicEvents } from '$lib/database/dev_db.js';

	let publicEvents = $state();

	console.log('Events: ', publicEvents);
	//let photos = $derived(publicEvents.map(()))
</script>

<div class="container">
	<h1>TESTESTEST</h1>
	{#each publicEvents as pe}
		<p>HI</p>
	{/each}
</div>
