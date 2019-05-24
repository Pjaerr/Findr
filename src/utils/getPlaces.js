import getTransformedVenueData from './getTransformedVenueData';

const getPlaces = async (query, limit, pos) => {
  const latLng = `${pos.coords.latitude},${pos.coords.longitude}`;

  const url = `/placedata/latLng=${latLng}&limit=${limit}&query=${query}`;

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error('HTTP Response not OK');

    const placeData = await response.json();

    try {
      //TODO: Add checks in here for if no locations are found so can return an empty array instead of Foursquare array.
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
