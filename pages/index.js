import React, { useState, useEffect } from 'react';

//Import Styled Components and Global Styles
import styled, { createGlobalStyle } from 'styled-components';
import GlobalStyles from '../GlobalStyles';

//Import Components
import CardContainer from '../src/components/CardContainer/CardContainer';

//Import test data
import testData from '../test-data';

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

    useEffect(() =>
    {
        /* 
            In here we would make our fetch request for the data, do any modifications and
            get an output matching our predefined data strucure. We would then pass that data
            into a setPointsOfInterestData() function call to re-render the component with the
            fetched data. For now we have a static js file that returns an array so we pass it in
            directly. We also want to specify that we only want to run this code if and when the data
            changes, hence the [testData].
        */
        setPointsOfInterestData(testData);
    }, [testData]);

    return (
        <Page>
            <GloballyInjectedStyles />

            <h1>Findr</h1>
            <CardContainer data={pointsOfInterestData} />
        </Page>
    );
};

export default index;