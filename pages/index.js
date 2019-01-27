import React, { useState } from 'react';

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


class index extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = { pointsOfInterestData: [] };
    }

    componentDidMount()
    {
        this.getPointsOfInterest();
    }

    getPointsOfInterest = () =>
    {
        //In here we would be making a fetch request to our api and setting the data in local state
        this.setState({ pointsOfInterestData: testData });
    }

    render()
    {
        return (
            <Page>
                <GloballyInjectedStyles />

                <h1>Findr</h1>
                <CardContainer data={this.state.pointsOfInterestData} />
            </Page>
        );
    }
};

export default index;