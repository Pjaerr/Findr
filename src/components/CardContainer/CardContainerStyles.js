import styled from 'styled-components';
import GlobalStyles from '../../../GlobalStyles';

export const CardContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;

  margin-right: 3.5rem;
  margin-left: 3.5rem;

  button {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;

    background: ${GlobalStyles.secondaryBackgroundColour};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    border: none;

    -webkit-appearance: button; /* for input */
    -webkit-user-select: none; /* for button */
    -moz-user-select: none;
    -ms-user-select: none;

    display: flex;
    justify-content: center;
  }
`;

export const CardContainerWrapper = styled.div`
  height: 400px;

  @media (min-width: ${GlobalStyles.breakpoints.xs}) {
    height: 440px;
  }

  @media (min-width: ${GlobalStyles.breakpoints.medium}) {
    height: 460px;
  }
`;

export const LoadingMessage = styled.div`
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

export const HiddenCard = styled.div`
  position: absolute;
  z-index: -1;
  top: 77px;
`;
