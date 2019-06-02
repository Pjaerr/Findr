//Utils
const transformVenueData = require("./transformVenueData.js");

const getTransformedVenueData = items => {
  let promises = [];

  items.forEach(item => {
    promises.push(transformVenueData(item.venue));
  });

  return Promise.all(promises);
};

module.exports = getTransformedVenueData;
