import React, { useState, useEffect } from 'react';

import Swipeable from "react-swipy";

import Card from '../Card/Card';

import { CardContainerButtons } from './CardContainerStyles';

const CardContainer = ({ data }) =>
{
    const [currentCard, setCurrentCard] = useState(0);
    const [cards, setCards] = useState([]);

    /*
        Using the useEffect hook to recreate the functionality of the
        componentDidMount lifecycle method. The setCards function call will only
        happen if the data prop has changed.
    */
    useEffect(() =>
    {
        setCards(data.map(set => <Card data={set} />));

    }, [data]);

    let direction = '';

    const onAfterSwipe = () =>
    {
        if (direction === 'left')
        {
            dislikeCard();
        }
        else
        {
            likeCard();
        }
    }

    const dislikeCard = () =>
    {
        if (currentCard < cards.length - 1)
        {
            setCurrentCard((currentCard + 1));
        }
    }

    const likeCard = () =>
    {
        window.open(data[currentCard].externalLink, "_blank");
    }

    if (cards.length > 0)
    {
        return (
            <div>
                <Swipeable
                    limit={300}
                    buttons={({ left, right }) => (
                        <CardContainerButtons>
                            <button onClick={left}>Reject</button>
                            <button onClick={right}>Accept</button>
                        </CardContainerButtons>
                    )}
                    onSwipe={dir => { direction = dir }}
                    onAfterSwipe={onAfterSwipe}
                >
                    {cards[currentCard]}
                </Swipeable>
                {/* {currentCard < cards.length - 2 && <div style={{ position: "relative", zIndex: "-1" }}> {cards[currentCard + 1]} </div>} */}
            </div>
        );
    }

    return <span role="img">☹️ No data found</span>;
};

export default CardContainer;