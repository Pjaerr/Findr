import React, { useState, useEffect } from 'react';

//Import Styled Components and Global Styles
import styled, { createGlobalStyle } from 'styled-components';
import GlobalStyles from '../GlobalStyles';

//Import Components
import CardContainer from '../src/components/CardContainer/CardContainer';

//Import Utils
import getTransformedVenueData from '../src/utils/getTransformedVenueData';

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
    const [pointsOfInterestData, setPointsOfInterestData] = useState([]);

    let dataParameters = {
        latLng: "51.508530,-0.076132",
        query: "coffee",
        limit: "10"
    };

    let url = `/placedata/latLng=${dataParameters.latLng}&limit=${dataParameters.limit}&query=${dataParameters.query}`;

    useEffect(() =>
    {
        fetch(url)
            .then(response => response.json())
            .then(data =>
            {
                getTransformedVenueData(data.response.groups[0].items)
                    .then(venues => 
                    {
                        setPointsOfInterestData(venues);
                    })
                    .catch(err => console.error("Error getting transformed venue data on the frontend. \n Error: " + err));
            })
            .catch(err =>
            {
                console.error("Error whilst fetching place data on frontend \n Error: " + err);
            });
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