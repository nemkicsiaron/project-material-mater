import { supabase } from './sbClient';
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
 * @param {number} id
 * @returns {Promise<any[]>}
 */
export async function getPhotosOfEvent(id) {
	if (id == null) throw new Error('NULL is not accepted as event ID');
	if (id <= 0) throw new Error('Given ID is not a valid event ID');
	const {data, error} = await supabase.from('events_gallery_dev').select('media').eq('event_id', id);
	if (error){
		console.error(error);
		throw new Error(error.message + "\n\n" + error.hint);
	}
	return data;
}



/**
 * Fetch all public a
 * @returns {Promise<any[]>}
 */
export async function getAllPublicEvents() {
	const {data, error} = await supabase
		.from('events_dev')
		.select('id, title, description, time, location')
		.eq('public', 'PUBLIC');

	if(error) {
		console.error(error);
		throw new Error(error.message + "\n\n" + error.hint)
	}
	
	return data;
}
