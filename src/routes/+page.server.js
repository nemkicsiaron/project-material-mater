//import { getPublicEvents } from '$lib/database/dev_db'
import { supabase } from '$lib/database/sbClient';

export const ssr = true;

/** @type {import('./$types').PageLoad} */
export async function load() {
	const { publicEvents } = supabase
		.from('events_gallery_dev')
		.select('id, title, description, time, location')
		.eq('public', 'PUBLIC');

	return {
		events: publicEvents ?? []
	};
}
