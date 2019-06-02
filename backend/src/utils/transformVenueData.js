//Data
const FoursquareApiData = require("../data/FoursquareApiData.js");

//Utils
const requestUrlParameters = require("./requestUrlParameters.js");
const getAsync = require("util").promisify(require("request").get);

/**
 * Takes a foursquare venue object and transforms it match the expected format.
 * @param venue A venue object from the foursquare API
 * @returns A transformed venue object
 */
const transformVenueData = async venue => {
  let transformedData = {
    name: venue.name,
    distance: parseFloat(
      ((venue.location.distance / 1000) * 0.6137).toFixed(2)
    ),
    rating: 3.5,
    image: "",
    externalLink: ""
  };

  /* Grab the image and rating for the venue being transformed and when found, return a promise to be 
  resolved that will give the resolver the entire transformed venue object */
  let apiRequestUrl =
    FoursquareApiData.venueBasePhotosUrl +
    `${venue.id}?` +
    requestUrlParameters();

  const { statusCode, body } = await getAsync(apiRequestUrl);

  if (statusCode !== 200)
    throw new Error(
      "Invalid Status Code whilst fetching venue photo data, expected 200\n" +
        body
    );

  const data = await JSON.parse(body);

  const imageObject = data.response.venue.bestPhoto;

  if (data.response.venue.rating > 0) {
    transformedData.rating = data.response.venue.rating / 2;
  }

  transformedData.externalLink = data.response.venue.canonicalUrl;

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
