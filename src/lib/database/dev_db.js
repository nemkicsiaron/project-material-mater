import { supabase } from './sbClient';

/**
 * @param {number} id
 * @returns {Promise<string[] | null>}
 */
export async function getPhotosOfEvent(id) {
	if (id == null) throw new Error('NULL is not accepted as event ID');
	if (id <= 0) throw new Error('Given ID is not a valid event ID');
	const { data } = await supabase.from('events_gallery_dev').select('media').eq('event_id', id);

	return data;
}

/**
 * Event type as should be returned by db
 * @typedef {Object} Event
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {*} time
 * @property {string} location
 */

/**
 *
 * @returns {Promise<Event[] | null>}
 */
export async function getPublicEvents() {
	const prom = supabase
		.from('events_gallery_dev')
		.select('id, title, description, time, location')
		.eq('public', 'PUBLIC');

	return prom;
}
