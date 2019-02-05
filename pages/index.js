import React, { useState, useEffect } from 'react';

//Import Styles
import { Page, GloballyInjectedStyles } from './styles/indexStyles';

//Import Components
import CardContainer from '../src/components/CardContainer/CardContainer';

//Import Utils
import getPlaces from '../src/utils/getPlaces';

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
                getPlaces(pos, "parks", 2)
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