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

export const LoadingAnimation = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ff4081;
  margin: 0 auto;

  margin-top: 30px;
  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
  animation: sk-rotateplane 1.2s infinite ease-in-out;

  @-webkit-keyframes sk-rotateplane {
    0% {
      -webkit-transform: perspective(120px);
    }
    50% {
      -webkit-transform: perspective(120px) rotateY(180deg);
    }
    100% {
      -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
    }
  }

  @keyframes sk-rotateplane {
    0% {
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    }
    100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
      -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
  }
`;
