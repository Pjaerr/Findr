import React from 'react';
import PropTypes from 'prop-types';

//Components
import Rating from '../Rating/Rating';

import * as Styled from './CardStyles';

const Card = props => {
  const { name, distance, rating, image } = props.data;

  return (
    <Styled.CardWrapper>
      <Styled.CardImage image={image} />
      <Styled.CardContent>
        <h2>{name}</h2>
        <h4>({distance} Miles)</h4>
        <Rating number={rating} />
      </Styled.CardContent>
    </Styled.CardWrapper>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    distance: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default Card;
