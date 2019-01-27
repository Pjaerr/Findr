import React, { useState, useEffect } from 'react';

import Card from '../Card/Card';

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

    const dislikeCard = function ()
    {
        //Todo: Do animation with swing library here.

        if (currentCard < cards.length - 1)
        {
            setCurrentCard((currentCard + 1));
        }

        //Todo: Push card into history
    }

    //Make data and card arrays more tightly coupled so not grabbing wrong data by accident.
    const likeCard = function ()
    {
        //Todo: Do animation with swing library here.        
        window.open(data[currentCard].externalLink, "_blank");
    }

    if (cards.length > 0)
    {
        return (
            <div>
                {cards[currentCard]}
                <button onClick={dislikeCard}>Dislike</button>
                <button onClick={likeCard}>Like</button>
            </div>
        );
    }

    return <span role="img">☹️ No data found</span>;
};

export default CardContainer;