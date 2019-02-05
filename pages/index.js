import React, { useState, useEffect } from 'react';

//Import Styles
import { Page, GloballyInjectedStyles } from './styles/indexStyles';

//Import Components
import CardContainer from '../src/components/CardContainer/CardContainer';

//Import Utils
import getPlacesByMultiQuery from '../src/utils/getPlacesByMultiQuery';

// ! New york city latitude longitude for testing when not living in the middle of nowhere
const NYC_LATLNG = { coords: { latitude: "40.6974034", longitude: "-74.1197633" } };

const index = () =>
{
    const [pointsOfInterestData, setPointsOfInterestData] = useState([]);
    const [browserGeolocationDeclined, setBrowserGeolocationDeclined] = useState(false);
    const [browserSupportsGeolocation, setBrowserSupportsGeolocation] = useState(true);

    useEffect(() =>
    {
        if ("geolocation" in navigator)
        {
            navigator.geolocation.getCurrentPosition(pos =>
            {
                getPlacesByMultiQuery(NYC_LATLNG, 2, ["attractions", "scenery"])
                    .then(places =>
                    {
                        setPointsOfInterestData(places);
                    });
            },
                error =>
                {
                    if (error.code === error.PERMISSION_DENIED)
                    {
                        setBrowserGeolocationDeclined(true);
                    }
                });
        }
        else
        {
            setBrowserSupportsGeolocation(false);
        }
    }, []);

    return (
        <Page>
            <GloballyInjectedStyles />
            <h1>Findr</h1>
            {browserSupportsGeolocation ? <CardContainer data={pointsOfInterestData} /> : <h2>Your browser doesn't support geolocation!</h2>}
            {browserGeolocationDeclined ? <h2>You need to enable geolocation!</h2> : null}
        </Page>
    );
};

export default index;