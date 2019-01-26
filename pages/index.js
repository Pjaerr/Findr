import React from 'react';

//Import Styled Components and Global Styles
import styled, { createGlobalStyle } from 'styled-components';
import GlobalStyles from '../GlobalStyles';

//Import Components
import Card from '../src/components/Card/Card';

const GloballyInjectedStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,400i,700');

    body {
        font-family: ${GlobalStyles.fontFamily};
        background-color: ${GlobalStyles.backgroundColour};
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
    return (
        <Page>
            <GloballyInjectedStyles />

            <h1>Findr</h1>
            <Card data={{
                name: "Big Ben",
                distance: 4,
                rating: 3.5,
                image: "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/MA_00514390_hsmjfe.jpg"
            }} />
        </Page>
    );
};

export default index;