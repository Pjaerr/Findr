//Data
const FoursquareApiData = require("../data/FoursquareApiData.js");

/**
 * @returns A string containing the foursquare client_id, client_secret and version
 */
const requestUrlParameters = () => {
  const apiClientID = `client_id=${FoursquareApiData.clientID}`;
  const apiClientSecret = `client_secret=${FoursquareApiData.clientSecret}`;
  const apiVersion = `v=${FoursquareApiData.version}`;

  return `${apiClientID}&${apiClientSecret}&${apiVersion}`;
};

module.exports = requestUrlParameters;
