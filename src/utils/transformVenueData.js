/** Takes a Foursquare Venue object (response.groups[0].items.venue) and transforms
 * it into a JS object that can be used in the application.*/
const transformVenueData = (venue) =>
{
	let transformedData = {
		name: venue.name,
		distance: parseFloat(((venue.location.distance / 1000) * 0.6137).toFixed(2)),
		rating: 3.5,
		image: "",
		externalLink: "https://www.google.com/maps/search/" + venue.name + "," + venue.location.formattedAddress.toString().replace(/ /g, "+")
	};

	/* Grab the image and rating for the venue being transformed and when found, return a promise to be resolved that will
	give the resolver the entire transformed venue object */
	return new Promise((resolve, reject) =>
	{
		fetch(`/placedata/photos/id=${venue.id}`)
			.then(response => response.json())
			.then(data =>
			{
				console.log(data);
				let imageObject = data.response.venue.bestPhoto;

				if (data.response.venue.rating > 0)
				{
					transformedData.rating = data.response.venue.rating / 2;
				}

				transformedData.externalLink = data.response.venue.canonicalUrl;

				if (imageObject)
				{
					transformedData.image = `${imageObject.prefix}${imageObject.width}x${imageObject.height}${imageObject.suffix}`;
				}
				else
				{
					transformedData.image = "https://placehold.it/800x600";
				}

				resolve(transformedData);
			})
			.catch(err => 
			{
				reject(err);
				console.error(err)
			});
	});
}

export default transformVenueData;