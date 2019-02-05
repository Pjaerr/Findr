import getTransformedVenueData from './getTransformedVenueData';

//TODO: Add checks in here for if no locations are found so can return an empty array instead of Foursquare array.

const getPlaces = (query, limit, pos) =>
{
	return new Promise((resolve, reject) =>
	{
		let latLng = `${pos.coords.latitude},${pos.coords.longitude}`;

		let url = `/placedata/
						latLng=${latLng}&
						limit=${limit}&
						query=${query}`;

		fetch(url)
			.then(response => response.json())
			.then(data =>
			{
				getTransformedVenueData(data.response.groups[0].items)
					.then(venues => 
					{
						resolve(venues);
					})
					.catch(err =>
					{
						reject(err);
						console.error("Error getting transformed venue data \n Error: " + err);
					});
			})
			.catch(err =>
			{
				reject(err);
				console.error("Error whilst fetching place data \n Error: " + err);
			});
	});
}

export default getPlaces;