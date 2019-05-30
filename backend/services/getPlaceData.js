const FoursquareApiData = require('../data/FoursquareApiData.js');
const getAsync = require('util').promisify(require('request').get);

const getPlaceData = async (limit, latLng, query) => {
  //TODO: Clean this up so it is more readable
  const apiQuery = `${FoursquareApiData.venueBaseUrl}?client_id=${
    FoursquareApiData.clientID
  }&client_secret=${FoursquareApiData.clientSecret}&v=${
    FoursquareApiData.version
  }&limit=${limit}&ll=${latLng}&query=${query}`;

  const { statusCode, body } = await getAsync(apiQuery).catch(err =>
    console.error('Error fetching API data in getPlaceData service ' + err)
  );

  if (statusCode !== 200) {
    console.error('Error fetching API data in getPlaceData service, statusCode: ' + statusCode);
    return null;
  }

  if (body) return body;
};

module.exports = getPlaceData;
