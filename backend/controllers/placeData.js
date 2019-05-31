//Import Error Messages
const apiGetRequestFailed = require('../errors/apiGetRequestFailed.js');

//Import Service
const getPlaceData = require('../services/getPlaceData.js');

//'/placedata/latLng=:latLng&limit=:limit&query=:query'
const placeData = async (req, res, next) => {
  const { limit, latLng, query } = req.params;

  try {
    //Here we expect transformed venues to come back as the Service will handle the rest.
    const venues = await getPlaceData(limit, latLng, query);

    res.send(venues);
  } catch (err) {
    next(apiGetRequestFailed() + err);
  }
};

module.exports = placeData;
