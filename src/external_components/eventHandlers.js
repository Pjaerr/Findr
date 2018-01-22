//Import the Animations component to handle card css animation.
import anim_cardSwipe from './animations.js';


function event_like(event)
{
    /*Code here for when a place is liked.*/
    event();

    anim_cardSwipe(); //Trigger the card swiping animation.
}

function event_dislike(event)
{
    /*Code here for when a place is disliked.*/
    event();
    anim_cardSwipe(); //Trigger the card swiping animation.
}

export
{
    event_like,
    event_dislike
}