import React, { useState, useEffect } from 'react';

//Import Styled Components and Global Styles
import styled, { createGlobalStyle } from 'styled-components';
import GlobalStyles from '../GlobalStyles';

//Import Components
import CardContainer from '../src/components/CardContainer/CardContainer';

//Import test data
import testData from '../test-data';

import transformVenueData from '../src/utils/transformVenueData';

const GloballyInjectedStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,400i,700');

    body {
        font-family: ${GlobalStyles.fontFamily};
        background-color: ${GlobalStyles.backgroundColour};

        overflow: hidden;
    }
`;

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const index = () =>
{
    const [pointsOfInterestData, setPointsOfInterestData] = useState(testData);

    let dataParameters = {
        clientID: "0CAEJ3WZKO4UWHOZPUCPT1HZOO2SJBY0IC3BHECIPKQNNETK",
        clientSecret: "DO2S4JEYTJLHFWJCDWYHH0PQGAPWSQ0MGL5HVFXOO41X0PC1",
        v: "20180323",
        latLng: "51.508530,-0.076132",
        query: "coffee",
        limit: "10"
    };

    let url = `/placedata/v=${dataParameters.v}&latLng=${dataParameters.latLng}&limit=${dataParameters.limit}&query=${dataParameters.query}`;

    useEffect(() =>
    {
        fetch(url)
            .then(response => response.json())
            .then(data =>
            {
                let venues = [];

                data.response.groups[0].items.forEach(item =>
                {
                    venues.push(transformVenueData(item.venue));
                });

                setPointsOfInterestData(venues);
            })
            .catch(err =>
            {
                console.error("Error whilst fetching data on Frontend \n Error: " + err);
            })

    }, []);

    return (
        <Page>
            <GloballyInjectedStyles />

            <h1>Findr</h1>
            <CardContainer data={pointsOfInterestData} />
        </Page>
    );
};

export default index;