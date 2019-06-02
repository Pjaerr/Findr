const getPlaces = async (query, limit, pos) => {
  const latLng = `${pos.latitude},${pos.longitude}`;

  const url = `http://localhost:3001/placedata/latLng=${latLng}&limit=${limit}&query=${query}`;
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error('HTTP Response not OK');

    try {
      const placeData = await response.json();

      return placeData;
    } catch (err) {
      console.error('Error getting transforming place data to json \n Error: ' + err);
    }
  } catch (err) {
    throw new Error('Error whilst fetching place data \n Error: ' + err);
  }
};

export default getPlaces;
