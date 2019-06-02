//Data
const FoursquareApiData = require("../data/FoursquareApiData.js");

const requestUrlParameters = () => {
  const apiClientID = `client_id=${FoursquareApiData.clientID}`;
  const apiClientSecret = `client_secret=${FoursquareApiData.clientSecret}`;
  const apiVersion = `v=${FoursquareApiData.version}`;

  return `${apiClientID}&${apiClientSecret}&${apiVersion}`;
};

module.exports = requestUrlParameters;
