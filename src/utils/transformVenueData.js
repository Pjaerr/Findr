


/** Takes a Foursquare Venue object (response.groups[0].items.venue) and transforms
 * it into a JS object that can be used in the application.*/
const transformVenueData = (venue) =>
{
	let data = {
		name: venue.name,
		distance: ((venue.location.distance / 1000) * 0.6137).toFixed(2),
		rating: 3.5,
		image: "",
		externalLink: "https://www.google.com/maps/search/" + venue.name + "," + venue.location.formattedAddress.toString().replace(/ /g, "+")
	};

	if (venue.photos.count > 0)
	{
		data.image = venue.photos.groups[0];
	}
	else
	{
		data.image = "https://placehold.it/800x600";
	}

	return data;
}

export default transformVenueData;