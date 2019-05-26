//Utils
import getTransformedVenueData from './getTransformedVenueData';

const getPlaces = async (query, limit, pos) => {
  const latLng = `${pos.latitude},${pos.longitude}`;

  const url = `/placedata/latLng=${latLng}&limit=${limit}&query=${query}`;

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error('HTTP Response not OK');

    const placeData = await response.json();

    try {
      const venues = await getTransformedVenueData(placeData.response.groups[0].items);
      return venues;
    } catch (err) {
      console.error('Error getting transformed venue data \n Error: ' + err);
    }
  } catch (err) {
    throw new Error('Error whilst fetching place data \n Error: ' + err);
  }
};

export default getPlaces;
