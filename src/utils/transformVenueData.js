


/** Takes a Foursquare Venue object (response.groups[0].items.venue) and transforms
 * it into a JS object that can be used in the application.*/
const transformVenueData = (venue) =>
{
	let transformedData = {
		name: venue.name,
		distance: ((venue.location.distance / 1000) * 0.6137).toFixed(2),
		rating: 3.5,
		image: "",
		externalLink: "https://www.google.com/maps/search/" + venue.name + "," + venue.location.formattedAddress.toString().replace(/ /g, "+")
	};


	return new Promise((resolve, reject) =>
	{
		fetch(`/placedata/photos/id=${venue.id}/limit=1`)
			.then(response => response.json())
			.then(data =>
			{
				let imageObject = data.response.photos.items[0];
				transformedData.image = imageObject.prefix.slice(0, imageObject.prefix.length - 2) + imageObject.suffix;

				resolve(transformdData);
			})
			.catch(error => console.error(error));
	});
}

export default transformVenueData;