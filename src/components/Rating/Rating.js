import React from 'react';

import * as Styled from './RatingStyles';

const renderStars = number => {
  let stars = [];

  let fullStars = 0;
  let hasHalfStar = false;

  /*Set the number of full stars to be equal to the current rating
    minus the decimal amount gained as a remainder when dividing the number
    by 1. ie: 4.4 % 1 would give 0.4, 4.4 - 0.4 = 4. If the number is not
    a decimal number, the modulus would give 0 and thus nothing changes.*/
  fullStars = number - (number % 1);

  /*If the number contained a decimal, use 1 half star but only if the amount
    is more than or equal to .5*/
  number % 1 >= 0.5 ? (hasHalfStar = true) : (hasHalfStar = false);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<img key={'Star' + i} src="/static/star-icon.svg" alt="Star Icon" />);
  }

  if (hasHalfStar) {
    stars.push(<img key="StarHalf" src="/static/half-star-icon.svg" alt="Star Icon" />);
  }

  return stars;
};

const Rating = ({ number }) => {
  return <Styled.RatingContainer>{renderStars(number)}</Styled.RatingContainer>;
};

export default Rating;
