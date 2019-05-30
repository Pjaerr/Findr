const getPlaceData = require('../services/getPlaceData.js');

//'/placedata/latLng=:latLng&limit=:limit&query=:query'
const placeData = async (req, res) => {
  const { limit, latLng, query } = req.params;

  //Here we expect transformed venues to come back as the Service will handle the rest.
  const venues = await getPlaceData(limit, latLng, query).catch(err => {
    console.error('Error getting place data in placeData controller:' + err);
  });

  res.send(venues);
};

module.exports = placeData;
