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
  height: 420px;

  @media (min-width: ${GlobalStyles.breakpoints.xs}) {
    height: 440px;
  }

  @media (min-width: ${GlobalStyles.breakpoints.medium}) {
    height: 460px;
  }
`;

export const HiddenCard = styled.div`
  position: absolute;
  z-index: -1;
  top: 77px;
`;
