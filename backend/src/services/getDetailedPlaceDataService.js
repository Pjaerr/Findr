//Data
const FoursquareApiData = require("../data/FoursquareApiData.js");

//Utils
const requestUrlParameters = require("../utils/requestUrlParameters.js");
const getAsync = require("util").promisify(require("request").get);

/**
 * Makes a call to the foursquare API passing it a venue id from which to get detailed place data.
 * @param venueId The number of venues to get from the foursquare api
 * @returns 
 */
const getDetailedPlaceDataService = async (venueId) => {
  const apiRequestUrl =
    FoursquareApiData.venueDetailsUrl +
    `${venueId}?` +
    requestUrlParameters();

  const { statusCode, body } = await getAsync(apiRequestUrl);

  if (statusCode !== 200) {
    throw new Error(
      "Invalid Status Code whilst fetching detailed venue data, expected 200\n" + body
    );
  }

  if (body) {
    const response = JSON.parse(body);

    const data = response;

    return data;
  }
};

module.exports = getDetailedPlaceDataService;
