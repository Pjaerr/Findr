import styled, { createGlobalStyle } from 'styled-components';
import GlobalStyles from '../../../GlobalStyles';

export const GloballyInjectedStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,400i,700');

    body {
        font-family: ${GlobalStyles.fontFamily};
        background-color: ${GlobalStyles.backgroundColour};
        overflow-y: ${props => (props.scrollEnabled ? 'auto' : 'hidden')};
        overflow-x: hidden;
    }
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: ${GlobalStyles.textColour};
  }
`;
