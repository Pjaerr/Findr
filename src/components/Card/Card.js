import React from 'react';
import PropTypes from 'prop-types';

//Components
import Rating from '../Rating/Rating';

import { CardContainer, CardContent, CardImage } from './CardStyles';

const Card = (props) =>
{
    const { name, distance, rating, image } = props.data;

    return (
        <CardContainer>
            <CardImage image={image} />
            <CardContent>
                <h2>{name}</h2>
                <h4>({distance} Miles)</h4>
                <Rating number={rating} />
            </CardContent>
        </CardContainer>
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