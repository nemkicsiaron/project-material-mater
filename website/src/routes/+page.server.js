// @ts-nocheck
//import { getAllPublicEvents } from '$lib/database/dev_db'
import { supabase } from '$lib/database/sbClient';

export const ssr = false;
export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load() {
	const { data } = await supabase.from('events_dev').select('id, title, description, time, location').eq('public', 'PUBLIC');

	return {
		events: data ?? []
	};
}
