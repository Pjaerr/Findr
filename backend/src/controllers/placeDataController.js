//Import Error Messages
const apiGetRequestFailed = require("../errors/apiGetRequestFailed.js");

//Import Service
const getPlaceDataService = require("../services/getPlaceDataService.js");

//'/placedata/latLng=:latLng&limit=:limit&query=:query'
const placeData = async (req, res, next) => {
  const { limit, latLng, query } = req.params;

  try {
    const venues = await getPlaceDataService(limit, latLng, query);

    res.send(venues);
  } catch (err) {
    next(apiGetRequestFailed() + err);
  }
};

module.exports = placeData;
