//Import React
import React from 'react';

//Import material ui FAB.
import FloatingActionButton from 'material-ui/FloatingActionButton';

//Import icons being used.
import HeartIcon from 'material-ui/svg-icons/action/favorite';
import CancelIcon from 'material-ui/svg-icons/content/clear'

//Import relevant event handlers.
import { event_like, event_dislike } from './eventHandlers.js';

//Import CSS
import './css/actionButtons.css';


/* Notes:

The buttons are controlled in here, and moved around in here. The buttons positions to each other
will be handled in here, but the buttons collective position relative to everything else will
be handled elsewhere when imported as an <ActionButtons /> element.
*/

class ActionButtons extends React.Component
{
    /*If the initial load has been completed (ie. don't let buttons carry out actions when
    the data from google maps api hasn't be recieved yet.) */
    onLike = () =>
    {
        if (this.props.initialLoadComplete)
        {
            this.props.swipeRight();
            setTimeout(() => { event_like(this.props.event) }, 700);
        }
    }

    onDislike = () =>
    {
        if (this.props.initialLoadComplete)
        {
            this.props.swipeLeft();
            setTimeout(() => { event_dislike(this.props.event) }, 700);
        }
    }

    render()
    {
        return (
            <div id="action-buttons-wrapper">
                <div id="dislike-btn-div">
                    <FloatingActionButton className="dislike-btn" onClick={this.onDislike}>
                        <CancelIcon />
                    </FloatingActionButton>
                </div>
                <div id="like-btn-div">
                    <FloatingActionButton className="like-btn" secondary={true} onClick={this.onLike}>
                        <HeartIcon />
                    </FloatingActionButton>
                </div>
            </div>
        );
    }

}

export default ActionButtons;

