import styled from 'styled-components';
import GlobalStyles from '../../../GlobalStyles';

export const CardWrapper = styled.div`
  background: ${GlobalStyles.secondaryBackgroundColour};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  width: 30rem;
  height: 30rem;

  @media (max-width: 992px) {
    width: 25rem;
    height: 25rem;
  }

  @media (max-width: 768px) {
    width: 20rem;
  }

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */

  cursor: -webkit-grab;

  &:active {
    cursor: -webkit-grabbing;
  }
`;

export const CardContent = styled.div`
  padding-top: 10px;
  padding-left: 20px;
  padding-bottom: 20px;

  @media (max-width: 540px) {
    h2 {
      font-size: 1.2em;
    }

    h4 {
      font-size: 1em;
    }

    img {
      width: 18px;
      height: 18px;
    }
  }
`;

export const CardImage = styled.div`
    width: 30rem;
    height: 20rem;

    @media (max-width: 992px)
    {
        width: 25rem;
        height: 15rem;
    }

    @media (max-width: 768px)
    {
        width: 20rem;
    }

    background-image: url('${props => props.image}');
    background-size: cover;
    background-position: center center;
`;
