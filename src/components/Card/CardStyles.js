import styled from 'styled-components';
import GlobalStyles from '../../../GlobalStyles';

export const CardWrapper = styled.div`
  background: ${GlobalStyles.secondaryBackgroundColour};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  /*Make it work nicely on mobile*/
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: -webkit-grab;
  &:active {
    cursor: -webkit-grabbing;
  }

  padding: 10px;

  width: 300px;
  height: 360px;

  @media (min-width: ${GlobalStyles.breakpoints.xxs}) {
    width: 320px;
  }

  @media (min-width: ${GlobalStyles.breakpoints.xs}) {
    width: 340px;
  }

  @media (min-width: ${GlobalStyles.breakpoints.small}) {
    width: 360px;
  }

  @media (min-width: ${GlobalStyles.breakpoints.medium}) {
    width: 400px;
    height: 400px;
  }

  max-height: 400px;
`;

export const CardContent = styled.div`
  h2 {
    height: 60px;
    font-size: 1rem;
    overflow: hidden;

    @media (min-width: ${GlobalStyles.breakpoints.medium}) {
      font-size: 1.1rem;
    }

    @media (min-width: ${GlobalStyles.breakpoints.large}) {
      font-size: 1.2rem;
    }
  }

  h4 {
    font-size: 0.8rem;

    @media (min-width: ${GlobalStyles.breakpoints.medium}) {
      font-size: 0.9rem;
    }

    @media (min-width: ${GlobalStyles.breakpoints.large}) {
      font-size: 1rem;
    }
  }
`;

export const CardImage = styled.div`
    width: 100%;
    height: 200px;

    @media (min-width: ${GlobalStyles.breakpoints.medium}) {
      height: 240px;
    }

    background-image: url('${props => props.image}');
    background-size: cover;
    background-position: center center;
`;
