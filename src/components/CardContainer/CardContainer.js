import React, { useState } from 'react';

import Card from '../Card/Card';

const CardContainer = ({ data }) =>
{
    const [currentCard, setCurrentCard] = useState(0);

    let cards = [];

    data.forEach(set =>
    {
        cards.push(<Card data={set} />);
    });

    const nextCard = function ()
    {
        if (currentCard < cards.length - 1)
        {
            setCurrentCard(currentCard + 1);
        }
        else
        {
            setCurrentCard(0);
        }
    }

    if (cards.length > 0)
    {
        return (
            <div>
                {cards[currentCard]}
                <button onClick={nextCard}>Next</button>
            </div>
        );
    }

    return <span role="img">☹️ No data found</span>;
};

export default CardContainer;