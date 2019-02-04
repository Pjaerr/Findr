


/** Takes a Foursquare Venue object (response.groups[0].items.venue) and transforms
 * it into a JS object that can be used in the application.*/
const transformVenueData = (venue) =>
{
	let transformedData = {
		name: venue.name,
		distance: ((venue.location.distance / 1000) * 0.6137).toFixed(2),
		rating: venue.rating,
		image: "",
		externalLink: "https://www.google.com/maps/search/" + venue.name + "," + venue.location.formattedAddress.toString().replace(/ /g, "+")
	};

	/* Grab the image for the venue being transformed and when found, return a promise to be resolved that will
	give the resolver the entire transformed venue object */
	return new Promise((resolve, reject) =>
	{
		fetch(`/placedata/photos/id=${venue.id}/limit=1`)
			.then(response => response.json())
			.then(data =>
			{
				console.log(data);
				let imageObject = data.response.photos.items[0];
				transformedData.image = `${imageObject.prefix}${imageObject.width}x${imageObject.height}${imageObject.suffix}`;

				resolve(transformedData);
			})
			.catch(error => console.error(error));
	});
}

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