import React from 'react';


class Places extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
            {
                searchRadius: this.props.searchRadius,
                type: ['restaurant']
            };
    }

    componentDidMount()
    {
        loadScript("https://maps.googleapis.com/maps/api/js?v=3.exp&key=&libraries=places", () =>
        {
            this.google = window.google;

            this.storeNearbyPlaces();
        });

    }

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
                        radius: (this.state.searchRadius / 0.00062137119223733),
                        type: this.state.type
                    };

                let service = new this.google.maps.places.PlacesService(this.map);
                service.nearbySearch(request, (results, status) =>
                {
                    if (status === this.google.maps.places.PlacesServiceStatus.OK)
                    {
                        this.props.callback(results);
                    }
                    else
                    {
                        console.log("Cannot find nearby places.");
                    }
                });
            });
        }
        else
        {
            //Browser doesn't support geolocation.
            alert("Browser doesn't support geolocation");
        }
    }


    render()
    {
        return (
            <div ref="map">
            </div>
        );
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
