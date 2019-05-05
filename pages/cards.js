import React, { useState, useEffect } from 'react';

//Lets us grab URL parameters ie. ?category=attractions
import { withRouter } from 'next/router';

//Import Global Page Container
import Page from '../src/components/Page/Page';

//Import Components
import CardContainer from '../src/components/CardContainer/CardContainer';

//Import Utils
import getPlacesByMultiQuery from '../src/utils/getPlacesByMultiQuery';

// ! Test latitude longitude for testing when not living in the middle of nowhere
const NYC_LATLNG = { coords: { latitude: '40.6974034', longitude: '-74.1197633' } };
const LONDON_LATLNG = { coords: { latitude: '51.528308', longitude: '-0.3817765' } };

import testData from '../test-data';

const cards = ({ router }) => {
  const [pointsOfInterestData, setPointsOfInterestData] = useState([]);
  const [browserGeolocationDeclined, setBrowserGeolocationDeclined] = useState(false);
  const [browserSupportsGeolocation, setBrowserSupportsGeolocation] = useState(true);

  const { category } = router.query;

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          // getPlacesByMultiQuery(LONDON_LATLNG, 5, [category]).then(places => {
          //   setPointsOfInterestData(places);
          // });

          /** Call setPointsOfInterestData and pass in mock result that is resolved
           * on the getPlacesbyMultiQuery function.
           */
          setPointsOfInterestData(testData);
        },
        error => {
          if (error.code === error.PERMISSION_DENIED) {
            setBrowserGeolocationDeclined(true);
          }
        }
      );
    } else {
      setBrowserSupportsGeolocation(false);
    }
  }, []);

  return (
    <Page scrollEnabled={false}>
      {browserSupportsGeolocation ? (
        <CardContainer data={pointsOfInterestData} />
      ) : (
        <h2>Your browser doesn't support geolocation!</h2>
      )}
      {browserGeolocationDeclined ? <h2>You need to enable geolocation!</h2> : null}
    </Page>
  );
};

export default withRouter(cards);
