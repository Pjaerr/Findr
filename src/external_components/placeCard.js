//Import React
import React from 'react';

//Import Material UI Cards
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card'

//Import Material UI Icons
import StarIcon from 'material-ui/svg-icons/toggle/star'
import HalfStarIcon from 'material-ui/svg-icons/toggle/star-half'

//Import buttons
import ActionButtons from './actionButtons.js';

//Import connection with Google Maps Place API.
import Places from './google_maps/Places.js';

//Import CSS
import './css/placeCard.css';

class PlaceCard extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state =
            {
                /**The current card, this should be updated via setState() when a new card is loaded.*/
                searchRadius: 2,
                nearbyPlaces: [],
                currentCard:
                    {
                        locationName: "River Soar",
                        imageSrc: "https://i.imgur.com/Rwf148t.jpg",
                        distanceInMiles: "1.2",
                        rating: 4.4
                    }
            };
    }

    renderStarRating()
    {
        let fullStars = 0;
        let halfStars = 0;

        /*Set the number of full stars to be equal to the current rating
        minus the decimal amount gained as a remainder when dividing the number
        by 1. ie: 4.4 % 1 would give 0.4, 4.4 - 0.4 = 4. If the number is not
        a decimal number, the modulus would give 0 and thus nothing changes.*/
        fullStars = (this.state.currentCard.rating - (this.state.currentCard.rating % 1));

        /*If the number contained a decimal, use 1 half star.*/
        this.state.currentCard.rating % 1 >= 0.5 ? halfStars = 1 : halfStars = 0;

        return (
            /**Fill an array with the number of stars (both full and half stars) and then
             * for each element in said array, return a <StarIcon/> or <HalfStarIcon/> to be rendered
             * when this.renderStarRating() is called within the <CardText> element.
             */
            <div id="star-rating">
                <span>
                    {
                        Array(fullStars).fill().map((_, i) => <StarIcon key={i} />)
                    }
                </span>
                <span>
                    {
                        Array(halfStars).fill().map((_, i) => <HalfStarIcon key={i} />)
                    }
                </span>
            </div>
        );

    }

    getNearbyPlaces = (nearbyPlaces) =>
    {
        this.setState({ nearbyPlaces: nearbyPlaces });
    }

    render()
    {
        return (
            /**The card is constructed here, consisting of an image, a header below the image and a subheader
             * below the header. It then has a <span> containing the number of stars the place has been rated.
             * 
             * The data it uses will be loaded via the google maps api and stored inside of this.state.currentCard
             * as a JS object. Each value is then grabbed out of that object and stored inside of the props for the
             * card elements. This means that when the state is updated, the card will also automatically update.
            */
            <div>
                <Places searchRadius={this.state.searchRadius} callback={this.getNearbyPlaces} />
                <div id="place-card-wrapper">
                    <Card className="card">
                        <CardMedia>
                            <img id="card-image" src={this.state.currentCard.imageSrc} alt={this.state.currentCard.locationName} />
                        </CardMedia>
                        <CardTitle title={this.state.currentCard.locationName} subtitle={"(" + this.state.currentCard.distanceInMiles + " Miles)"} />
                        <CardText>
                            {this.renderStarRating()}
                        </CardText>
                    </Card>
                </div>
                <div id="action-buttons">
                    <ActionButtons />
                </div>
            </div>
        );
    }
}

export default PlaceCard;