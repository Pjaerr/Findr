//Data
const FoursquareApiData = require("../data/FoursquareApiData.js");

//Utils
const requestUrlParameters = require("./requestUrlParameters.js");
const getAsync = require("util").promisify(require("request").get);

const getDetailedPlaceDataService = require("../services/getDetailedPlaceDataService.js");

/**
 * Takes a foursquare venue object and transforms it match the expected format.
 * @param venue A venue object from the foursquare API
 * @returns A transformed venue object
 */
const transformVenueData = (venue, venueDetails) => {
  let transformedData = {
    name: venue.name,
    distance: parseFloat(
      ((venue.location.distance / 1000) * 0.6137).toFixed(2)
    ),
    rating: 3.5,
    image: "",
    externalLink: "",
    details: {
      address: "",
      description: "",
      likes: 0,
      openStatus: ""
    }
  };

  /* Grab the image and rating for the venue being transformed and when found, return a promise to be 
  resolved that will give the resolver the entire transformed venue object */

  transformedData.details = venueDetails;
  transformedData.details = {
    address: venueDetails.location ? venueDetails.location.address + ", " + venueDetails.location.postalCode : "Unknown",
    description: venueDetails.description ? venueDetails.description : "Unknown",
    likes: venueDetails.likes ? venueDetails.likes.count : 0,
    openStatus: venueDetails.hours ? venueDetails.hours.status : "Unknown"
  };

  const imageObject = venueDetails.bestPhoto;

  if (venueDetails.rating > 0) {
    transformedData.rating = venueDetails.rating / 2;
  }

  transformedData.externalLink = venueDetails.canonicalUrl;

  if (imageObject) {
    transformedData.image = `${imageObject.prefix}${imageObject.width}x${
      imageObject.height
    }${imageObject.suffix}`;
  } else {
    transformedData.image = "https://placehold.it/800x600";
  }

  return transformedData;
};

module.exports = transformVenueData;
