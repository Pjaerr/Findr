import React from 'react';

//Import the Animations component to handle card css animation.
import anim_cardSwipe from './animations.js';


/**In here we would probably import the google maps api component, or some component that interfaces
 * with it. From there, when a card is liked, the renderNewCard function will be called triggering
 * the interface with the aforementioned component.
*/

function event_like(props)
{
    /*Code here for when a place is liked.*/

    anim_cardSwipe(); //Trigger the card swiping animation.
}

function event_dislike(props)
{
    /*Code here for when a place is disliked.*/

    anim_cardSwipe(); //Trigger the card swiping animation.
}

function renderNewCard()
{
    /*Interface with google maps to grab all of the relevant info to be returned to placeCard.js
    and inputted into the relevant places.*/
}

export
{
    event_like,
    event_dislike
}