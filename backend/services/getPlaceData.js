const FoursquareApiData = require('../data/FoursquareApiData.js');
const getAsync = require('util').promisify(require('request').get);

const getPlaceData = async (limit, latLng, query) => {
  const apiClientID = `client_id=${FoursquareApiData.clientID}`;
  const apiClientSecret = `client_secret=${FoursquareApiData.clientSecret}`;
  const apiVersion = `v=${FoursquareApiData.version}`;
  const apiLimit = `limit=${limit}`;
  const apiLatLng = `ll=${latLng}`;
  const apiQuery = `query=${query}`;

  const apiRequestUrl =
    FoursquareApiData.venueBaseUrl +
    `?${apiClientID}&${apiClientSecret}&${apiVersion}&${apiLimit}&${apiLatLng}&${apiQuery}`;

  const { statusCode, body } = await getAsync(apiRequestUrl).catch(err =>
    console.error('Error fetching API data in getPlaceData service ' + err)
  );

  if (statusCode !== 200) {
    console.error('Error fetching API data in getPlaceData service, statusCode: ' + statusCode);
    return null;
  }

  if (body) return body;
};

module.exports = getPlaceData;
