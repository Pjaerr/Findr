import React, { useState, useEffect } from 'react';

//Lets us grab URL parameters ie. ?category=attractions
import { withRouter } from 'next/router';

//Import Global Page Container
import Page from '../src/components/Page/Page';

//Import Components
import CardContainer from '../src/components/CardContainer/CardContainer';
import NotFoundError from '../src/components/NotFoundError/NotFoundError';

//Import Utils
import getPlaces from '../src/utils/getPlaces';

// ! Test latitude longitude for testing when not living in the middle of nowhere
const NYC_LATLNG = { latitude: '40.6974034', longitude: '-74.1197633' };
const LONDON_LATLNG = { latitude: '51.528308', longitude: '-0.3817765' };

const NOWHERE_LATLNG = { latitude: '68.578928', longitude: '111.915428' };

import testData from '../test-data';

const cards = ({ router }) => {
  const [pointsOfInterestData, setPointsOfInterestData] = useState([]);
  const [noPlacesNearby, setNoPlacesNearby] = useState(false);
  const [browserGeolocationDeclined, setBrowserGeolocationDeclined] = useState(false);
  const [browserSupportsGeolocation, setBrowserSupportsGeolocation] = useState(true);

  const { category } = router.query;

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          // getPlaces(category, 5, pos.coords).then(places => {
          //   setPointsOfInterestData(places);
          // });
          getPlaces(category, 5, NOWHERE_LATLNG).then(places => {
            if (places.length <= 0) {
              setNoPlacesNearby(true);
            } else {
              setPointsOfInterestData(places);
            }
          });
          // setPointsOfInterestData(testData);
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

  if (noPlacesNearby) {
    return (
      <NotFoundError message="No places nearby match the chosen category, try choosing a different category by clicking on Findr above to return to the category selection page." />
    );
  }

  return (
    <Page scrollEnabled={false} isLoading={pointsOfInterestData <= 0}>
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
