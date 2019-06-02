//Data
const FoursquareApiData = require("../data/FoursquareApiData.js");

//Utils
const requestUrlParameters = require("../utils/requestUrlParameters.js");
const getTransformedVenueData = require("../utils/getTransformedVenueData.js");
const getAsync = require("util").promisify(require("request").get);

const getPlaceDataService = async (limit, latLng, query) => {
  const apiRequestUrl =
    FoursquareApiData.venueBaseUrl +
    `?limit=${limit}&ll=${latLng}&query=${query}&` +
    requestUrlParameters();

  const { statusCode, body } = await getAsync(apiRequestUrl);

  if (statusCode !== 200) {
    throw new Error(
      "Invalid Status Code whilst fetching venue data, expected 200\n" + body
    );
  }

  if (body) {
    const response = JSON.parse(body);
    const venues = await getTransformedVenueData(
      response.response.groups[0].items
    );

    return venues;
  }
};

module.exports = getPlaceDataService;
