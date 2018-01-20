//Import the Animations component to handle card css animation.
import anim_cardSwipe from './animations.js';



/**In here we would probably import the google maps api component, or some component that interfaces
 * with it. From there, when a card is liked, the renderNewCard function will be called triggering
 * the interface with the aforementioned component.
*/


function event_like()
{
    /*Code here for when a place is liked.*/


    anim_cardSwipe(); //Trigger the card swiping animation.
}

function event_dislike()
{
    /*Code here for when a place is disliked.*/

    anim_cardSwipe(); //Trigger the card swiping animation.
}

export
{
    event_like,
    event_dislike
}