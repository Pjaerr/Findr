//Utils
const transformVenueData = require("./transformVenueData.js");

/**
 * Transforms an array of foursquare venue objects into their expected formats
 * @param items An array of foursquare venue objects
 */
const getTransformedVenueData = items => {
  let promises = [];

  items.forEach(item => {
    promises.push(transformVenueData(item.venue));
  });

  return Promise.all(promises);
};

module.exports = getTransformedVenueData;
