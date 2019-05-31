/** Takes a Foursquare Venue object (response.groups[0].items.venue) and transforms
 * it into a JS object that can be used in the application.*/
const transformVenueData = async venue => {
  let transformedData = {
    name: venue.name,
    distance: parseFloat(((venue.location.distance / 1000) * 0.6137).toFixed(2)),
    rating: 3.5,
    image: '',
    externalLink: ''
  };

  /* Grab the image and rating for the venue being transformed and when found, return a promise to be 
  resolved that will give the resolver the entire transformed venue object */

  try {
    const response = await fetch(`https://localhost:3001/placedata/photos/id=${venue.id}`);

    if (!response.ok) throw new Error('HTTP Response not OK');

    const data = await response.json();

    const imageObject = data.response.venue.bestPhoto;

    if (data.response.venue.rating > 0) {
      transformedData.rating = data.response.venue.rating / 2;
    }

    transformedData.externalLink = data.response.venue.canonicalUrl;

    if (imageObject) {
      transformedData.image = `${imageObject.prefix}${imageObject.width}x${imageObject.height}${
        imageObject.suffix
      }`;
    } else {
      transformedData.image = 'https://placehold.it/800x600';
    }

    return transformedData;
  } catch (err) {
    throw new Error('Error whilst fetching venue details \n Error: ' + err);
  }
};

export default transformVenueData;