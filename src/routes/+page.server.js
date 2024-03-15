// @ts-nocheck
//import { getPublicEvents } from '$lib/database/dev_db'
import { supabase } from '$lib/database/sbClient';

export const ssr = false;
export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load() {
	const { data } = supabase.from('events_dev').select('id, title, description, time, location');
	//.eq('public', 'PUBLIC');

	return {
		events: data ?? []
	};
}
