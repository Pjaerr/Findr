import getPlaces from './getPlaces';
import shuffleArray from './shuffleArray';

const getPlacesByMultiQuery = (pos, limitPerQuery, queryTypes) =>
{
	let promises = [];

	queryTypes.forEach(query =>
	{
		promises.push(getPlaces(query, limitPerQuery, pos));
	});

	return new Promise((resolve, reject) =>
	{
		Promise.all(promises)
			.then(places =>
			{
				//Returns a shuffled 1D array
				resolve(shuffleArray(places.flat()));
			})
			.catch(err =>
			{
				reject(err);
				console.error("Error resolving multiple query promises \n Error: " + err);
			})
	})
}

export default getPlacesByMultiQuery;