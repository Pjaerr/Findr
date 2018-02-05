import React from 'react';


class Places extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
            {
                searchRadius: this.props.searchRadius,
                type: [this.props.locationType]
            };

        this.nearbyPlaces = []; //Places to be stored here when api is ready.

        this.browserHasGeolocation = true;
    }

    componentDidMount()
    {
        if (!this.props.hasLoadedPreviously)
        {
            /**Load the google maps api with places library, and when fully loaded, store the google object to this
    * class and start the storing of nearby places.*/
            loadScript("https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCIu5Sk_nbKUTybO5Eqg46o8NQTBUIgjec&libraries=places", () =>
            {
                this.google = window.google;

                this.storeNearbyPlaces();
            });
        }
        else
        {
            this.google = window.google;
            this.storeNearbyPlaces();
        }
    }

    /**Get current position using the navigator and store it within a request object that also contains
     * a radius and type of place to search for. Pass this object to the service.nearbySearch function
     * and store the results within this.nearbyPlaces[].*/
    storeNearbyPlaces()
    {
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition((position) =>
            {
                this.pos = { lat: position.coords.latitude, lng: position.coords.longitude };
                this.map = new this.google.maps.Map(this.refs.map,
                    {
                        center: this.pos,
                        zoom: 16
                    });

                let request =
                    {
                        location: this.pos,
                        radius: (this.props.searchRadius / 0.00062137119223733), //Miles > Metres
                        type: this.props.locationType
                    };


                /** make the storage of google variables global and then the functions that interface with them
                 * be local and be callable from other components
                 */

                let service = new this.google.maps.places.PlacesService(this.map);

                service.nearbySearch(request, (results, status) =>
                {
                    if (status === this.google.maps.places.PlacesServiceStatus.OK)
                    {
                        this.props.setReferenceOf(service, this.pos); //Send a reference of the google place service to PlaceCard.js

                        for (let i = 0; i < results.length; i++)
                        {
                            this.props.pushToNearbyPlaces(results[i]); //Push all locations to PlaceCard.js
                        }
                    }
                    else
                    {
                        alert("Cannot find any places nearby that match that criteria. Try changing your search radius or location type.");
                        window.location.reload();
                    }

                });
            },
                (error) => 
                {
                    if (error.code === error.PERMISSION_DENIED)
                    {
                        console.error("User has denied geolocation permission.");
                    }
                    else if (error.code === error.TIMEOUT)
                    {
                        console.error("The maximum time allowed for a getCurrentPosition() call has passed");
                    }
                    else if (error.code === error.POSITION_UNAVAILABLE)
                    {
                        console.error("Cannot find current position.");
                    }

                    this.noGeolocation();
                });
        }
        else
        {
            //Browser doesn't support geolocation.
            this.noGeolocation();
        }
    }

    //Called when geolocation isn't available for whatever reason.
    noGeolocation()
    {
        alert("Browser doesn't support geolocation");
        this.browserHasGeolocation = false;
    }

    render()
    {

        if (this.browserHasGeolocation)
        {
            return (
                <div ref="map">
                </div>
            );
        }
    }
}

function loadScript(url, callback)
{
    //Add script tag to the head of index.html
    let head = document.getElementsByTagName('head')[0]; //The first head tag. (only 1 exists)
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    script.async = false;
    script.onreadystatechange = callback;
    script.onload = callback;

    head.appendChild(script);
}

export default Places;
