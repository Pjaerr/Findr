import transformVenueData from './transformVenueData';

/**Takes a list of foursquare venue items and will transform the data to match the format used by
 * the cards and then return their promises to be resolved.*/
const getTransformedVenueData = (items) =>
{
	let promises = [];

	items.forEach(item =>
	{
		promises.push(transformVenueData(item.venue));
	});

	return Promise.all(promises);
}

export default getTransformedVenueData;