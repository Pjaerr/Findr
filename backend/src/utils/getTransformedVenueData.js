//Utils
const transformVenueData = require("./transformVenueData.js");

const getDetailedPlaceDataService = require("../services/getDetailedPlaceDataService.js");

/**
 * Transforms an array of foursquare venue objects into their expected formats
 * @param items An array of foursquare venue objects
 */
const getTransformedVenueData = items => {
  let promises = [];

  items.forEach(item => {
    promises.push((async () => {
      const venueDetailsResponse = await getDetailedPlaceDataService(item.venue.id);
      return transformVenueData(item.venue, venueDetailsResponse.response.venue);
    })());
  });

  return Promise.all(promises);
};

module.exports = getTransformedVenueData;
