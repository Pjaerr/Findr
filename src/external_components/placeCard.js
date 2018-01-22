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
                //Whether or not the first card using data from Places.js has been loaded.
                initialLoadComplete: false,

                //The radius in miles to search for nearby places.
                searchRadius: 1,

                locationType: 'night_club',

                //List of JS objects gathered via the Google Maps API in Places.js holding location info.
                nearbyPlaces: [],

                /**The current card, this should be updated via setState() when a new card is loaded.*/
                locationName: "River Soar",
                imageSrc: "https://i.imgur.com/Rwf148t.jpg",
                distanceInMiles: "1.2",
                rating: 4.4,

                //The current position within nearbyPlaces[] from which to load data/
                index: 0
            };

        this.placeService; //Reference to the PlaceServiceAPI object created in Place.js
    }

    renderStarRating()
    {
        let fullStars = 0;
        let halfStars = 0;

        /*Set the number of full stars to be equal to the current rating
        minus the decimal amount gained as a remainder when dividing the number
        by 1. ie: 4.4 % 1 would give 0.4, 4.4 - 0.4 = 4. If the number is not
        a decimal number, the modulus would give 0 and thus nothing changes.*/
        fullStars = (this.state.rating - (this.state.rating % 1));

        /*If the number contained a decimal, use 1 half star.*/
        this.state.rating % 1 >= 0.5 ? halfStars = 1 : halfStars = 0;

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

    /**Called via a prop to Place.js, passing in the PlaceServiceAPI object. */
    getPlaceServiceReference = (service) =>
    {
        this.placeService = service;
    }


    /**Gets called as a callback function within Places.js when it has fully loaded nearby places via
     * the Google Maps Places API. Will store the nearby places using setState and so is async.*/
    pushToNearbyPlaces = (element) =>
    {
        let newNearbyPlaces = this.state.nearbyPlaces.slice();
        newNearbyPlaces.push(element);
        this.setState({ nearbyPlaces: newNearbyPlaces });
    }

    /**updateCard moves through the state.nearbyPlaces array everytime it is called and pushes the data related
     * to that place to the card. It grabs the image associated to the place_id of the current place and pushes
     * that to the card.*/
    updateCard = () =>
    {
        /*Move the index along, if the next index is out of bounds, set it to 0.*/
        let newIndex = this.state.index + 1;

        //bug:THIS MAKES THE FIRST CARD APPEAR AGAIN WHEN PRESSING SKIP BUTTON.
        if (newIndex >= this.state.nearbyPlaces.length)
        {
            newIndex = 0;
        }

        /**Get the image associated with the current nearbyPlace and store it inside of photo, if it
         * doesn't exist, set photo to placeholder image.*/
        this.placeService.getDetails({ placeId: this.state.nearbyPlaces[this.state.index].place_id }, (place, status) =>
        {
            if (status === window.google.maps.places.PlacesServiceStatus.OK)
            {
                let photo;

                if (place.photos != null)
                {
                    photo = place.photos[0].getUrl({ maxWidth: 1080, maxHeight: 570 });
                }
                else
                {
                    photo = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/No_image_available_600_x_450.svg/600px-No_image_available_600_x_450.svg.png";
                }

                /*Set the state of the current card to match all of the current nearbyPlace data*/
                this.setState({
                    locationName: this.state.nearbyPlaces[this.state.index].name,
                    imageSrc: photo,
                    distanceInMiles: "1.2",
                    rating: this.state.nearbyPlaces[this.state.index].rating,
                    index: newIndex
                });
            }
        });
    }

    componentDidUpdate()
    {
        /**If nearby places have been loaded, and this is the first time.*/
        if (this.state.nearbyPlaces.length > 0 && !this.state.initialLoadComplete)
        {
            this.updateCard();
            this.setState({ initialLoadComplete: true });
        }
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
                <Places searchRadius={this.state.searchRadius}
                    locationType={this.state.locationType}
                    pushToNearbyPlaces={this.pushToNearbyPlaces}
                    setReferenceOf={this.getPlaceServiceReference} />
                <div id="place-card-wrapper">
                    <Card className="card">
                        <CardMedia>
                            <img id="card-image" src={this.state.imageSrc} alt={this.state.locationName} />
                        </CardMedia>
                        <CardTitle title={this.state.locationName} subtitle={"(" + this.state.distanceInMiles + " Miles)"} />
                        <CardText>
                            {this.renderStarRating()}
                        </CardText>
                    </Card>
                </div>
                <div id="action-buttons">
                    <ActionButtons event={this.updateCard} initialLoadComplete={this.state.initialLoadComplete} />
                </div>
            </div>
        );
    }
}

export default PlaceCard;