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

  const { statusCode, body } = await getAsync(apiRequestUrl);

  if (statusCode !== 200) {
    throw new Error('Invalid Status Code, expected 200\n' + body);
  }

  if (body) return body;
};

module.exports = getPlaceData;
