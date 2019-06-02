//Import Error Messages
const apiGetRequestFailed = require("../errors/apiGetRequestFailed.js");

//Import Service
const getPlaceDataService = require("../services/getPlaceDataService.js");

/**
 * Expects limit, latLng and query url parameters which will be used to grab venue data
 * from the foursquare API that will be transformed and returned to the caller as an array holding
 * json objects.
 *
 * Example Route: '/placedata/latLng=:latLng&limit=:limit&query=:query'
 *
 * @param req express req object
 * @param res express res object
 * @param next express next function
 */
const placeDataController = async (req, res, next) => {
  const { limit, latLng, query } = req.params;

  try {
    const venues = await getPlaceDataService(limit, latLng, query);

    res.send(venues);
  } catch (err) {
    next(apiGetRequestFailed() + err);
  }
};

module.exports = placeDataController;
