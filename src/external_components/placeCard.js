//Import React
import React from 'react';

//Import Material UI Cards
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card'

//Import Material UI Icons
import StarIcon from 'material-ui/svg-icons/toggle/star'
import HalfStarIcon from 'material-ui/svg-icons/toggle/star-half'

//Import buttons
import ActionButtons from './actionButtons.js'

//Import User Options
import Options from './options.js'

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
                searchRadius: 10,

                locationType: 'night_club',

                //List of JS objects gathered via the Google Maps API in Places.js holding location info.
                nearbyPlaces: [],

                /**The current card, this should be updated via setState() when a new card is loaded.*/
                locationName: "River Soar",
                imageSrc: "",
                googleMapsUrl: "",
                distanceInMiles: "1.2",
                rating: 4.4,

                //The current position within nearbyPlaces[] from which to load data/
                index: 0,

                animClass: "card-no-anim",
            };

        this.placeService = undefined; //Reference to the PlaceServiceAPI object created in Place.js
        this.myLocation = { lat: 0, lng: 0 };
        this.hasLoadedPreviously = false;
    }

    renderStarRating()
    {
        if (this.state.rating > 0)
        {
            let fullStars = 0;
            let halfStars = 0;

            /*Set the number of full stars to be equal to the current rating
            minus the decimal amount gained as a remainder when dividing the number
            by 1. ie: 4.4 % 1 would give 0.4, 4.4 - 0.4 = 4. If the number is not
            a decimal number, the modulus would give 0 and thus nothing changes.*/
            fullStars = (this.state.rating - (this.state.rating % 1));

            /*If the number contained a decimal, use 1 half star but only if the amount
            is more than or equal to .5*/
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
        else
        {
            return (
                <div id="star-rating">
                    <span>
                        No rating.
                    </span>
                </div>
            );
        }
    }

    /**Called via a prop to Place.js, passing in the PlaceServiceAPI object and the user's current
     * geolocation. Avoids re-grabbing the data in placeCard.js.*/
    getPlaceServiceReference = (service, myLocation) =>
    {
        this.placeService = service;
        this.myLocation = myLocation;
    }


    /**Gets called as a callback function within Places.js when it has fully loaded nearby places via
     * the Google Maps Places API. Will store the nearby places using setState and so is async. It gets called
     * for every new nearby place, reduces the intial load slightly as it pushes the first place generated instead
     * of waiting to generate all of them.*/
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

        if (newIndex >= this.state.nearbyPlaces.length && this.state.initialLoadComplete)
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

                let googleMapsURL = place.url;

                /*Latitude and Longitude of the current nearby place used in distance calculation*/
                let placeLatLng = {
                    lat: this.state.nearbyPlaces[this.state.index].geometry.location.lat(),
                    lng: this.state.nearbyPlaces[this.state.index].geometry.location.lng()
                }

                if (this.state.nearbyPlaces.length <= 1)
                {
                    newIndex = 0;
                }

                /*Set the state of the current card to match all of the current nearbyPlace data*/
                this.setState({
                    locationName: this.state.nearbyPlaces[this.state.index].name,
                    imageSrc: photo,
                    googleMapsUrl: googleMapsURL,
                    distanceInMiles: this.calculateDistance(this.myLocation, placeLatLng),
                    rating: this.state.nearbyPlaces[this.state.index].rating,
                    index: newIndex
                });
            }
        });
    }

    /**Calcualtes the distance between two latitiude and longitudes contained within two
     * object literals.*/
    calculateDistance(p1, p2)
    {
        let rad = function (x)
        {
            return x * Math.PI / 180;
        }

        let R = 6378137; // Earth’s mean radius in meter
        let dLat = rad(p2.lat - p1.lat);
        let dLong = rad(p2.lng - p1.lng);

        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
            Math.sin(dLong / 2) * Math.sin(dLong / 2);

        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c;
        return (d * 0.00062137119223733).toFixed(1); // returns the distance in miles to 2 decimal places.
    }

    componentDidUpdate()
    {
        /**If nearby places have been loaded, and this is the first time.*/
        if (this.state.nearbyPlaces.length > 0 && !this.state.initialLoadComplete)
        {
            this.updateCard(); //Update the card for the first time.
            this.setState({ initialLoadComplete: true });
        }
    }


    swipeLeft = () =>
    {
        //Start the swipe left animation via css.
        this.setState({ animClass: "card-swipe-left" });

        //After the animation length as a passed, set the animation state back.
        setTimeout(() => { this.setState({ animClass: "card-no-anim" }) }, 1000);

    }

    /**Carries out the swiping right animation and then returns the current cards google
     * maps url.*/
    swipeRight = () =>
    {
        //Start the swipe right animation via css.
        this.setState({ animClass: "card-swipe-right" });

        //After the animation length as a passed, set the animation state back.
        setTimeout(() => { this.setState({ animClass: "card-no-anim" }) }, 1000);

        return this.state.googleMapsUrl;
    }


    updateOptions = (locationType, searchRadius) =>
    {
        this.setState({ index: 0, nearbyPlaces: [], locationType: locationType, searchRadius: searchRadius, initialLoadComplete: false });
    }

    render()
    {
        if (!this.state.initialLoadComplete)
        {
            return (
                <div>
                    <div className="loading">
                    </div>
                    <Places searchRadius={this.state.searchRadius}
                        locationType={this.state.locationType}
                        pushToNearbyPlaces={this.pushToNearbyPlaces}
                        setReferenceOf={this.getPlaceServiceReference}
                        hasLoadedPreviously={this.hasLoadedPreviously} />

                    {this.hasLoadedPreviously = true}
                </div>
            );
        }
        else
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

                    <Options optionsChanged={this.updateOptions}>
                    </Options>

                    <div id="place-card-wrapper">
                        <Card className={this.state.animClass}>
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
                        <ActionButtons
                            /*Gets called via the actionsButtons.js script once the relevant swipeRight/Left functions
                            have been carried out.*/
                            event={this.updateCard}
                            initialLoadComplete={this.state.initialLoadComplete}

                            /*Pass the functions to be called when the relevant buttons are clicked.*/
                            swipeLeft={this.swipeLeft}
                            swipeRight={this.swipeRight} />
                    </div>
                </div>
            );
        }
    }
}

export default PlaceCard;