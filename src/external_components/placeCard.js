//Import React
import React from 'react';

//Import Material UI Cards
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card'

//Import Material UI Icons
import StarIcon from 'material-ui/svg-icons/toggle/star'
import HalfStarIcon from 'material-ui/svg-icons/toggle/star-half'

//Import CSS
import './css/placeCard.css';

class PlaceCard extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {};
    }

    render()
    {
        return (
            <div id="place-card-wrapper">
                <Card className="card">
                    <CardMedia>
                        <img id="card-image" src="https://i.imgur.com/Rwf148t.jpg" alt="river soar" />
                    </CardMedia>
                    <CardTitle title="River Soar" subtitle="( 1.2 Miles)" />
                    <CardText>
                        {/*{() => { for (let i = 0; i < 4; i++) { <StarIcon /> } }}*/}
                        <StarIcon /><StarIcon /><StarIcon /><StarIcon /><HalfStarIcon />
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default PlaceCard;