//Import React
import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


/*Should render the options dropsdowns etc, and store all potential options and when they are changed, send them back
to the placeCard.*/

class Options extends React.Component
{
    constructor(props)
    {
        super(props);


        this.state =
            {
                currentLocationType: "night_club",
                searchRadius: 3
            }
    }

    onLocationTypeChange = (event, index, value) =>
    {
        this.setState({ currentLocationType: value });

        this.props.optionsChanged(value, this.state.searchRadius);
    }

    render()
    {
        return (
            <div>
                <SelectField
                    floatingLabelText="Location Type"
                    onChange={this.onLocationTypeChange}
                    value={this.state.currentLocationType}
                >
                    <MenuItem value="amusement_park" primaryText="Amusement Parks" />
                    <MenuItem value="art_gallery" primaryText="Art Galleries" />
                    <MenuItem value="bar" primaryText="Bars" />
                    <MenuItem value="bowling_alley" primaryText="Bowling Alleys" />
                    <MenuItem value="cafe" primaryText="Cafes" />
                    <MenuItem value="campground" primaryText="Campgrounds" />
                    <MenuItem value="casino" primaryText="Casinos" />
                    <MenuItem value="clothing_store" primaryText="Clothing Stores" />
                    <MenuItem value="gym" primaryText="Gyms" />
                    <MenuItem value="library" primaryText="Libraries" />
                    <MenuItem value="liqour_store" primaryText="Liqour Stores" />
                    <MenuItem value="meal_takeaway" primaryText="Takeaways" />
                    <MenuItem value="movie_theater" primaryText="Movie Theaters" />
                    <MenuItem value="museum" primaryText="Museums" />
                    <MenuItem value="night_club" primaryText="Night Clubs" />
                    <MenuItem value="restaurant" primaryText="Restaurants" />
                    <MenuItem value="shopping_mall" primaryText="Shopping Malls" />
                    <MenuItem value="spa" primaryText="Spas" />
                    <MenuItem value="supermarket" primaryText="Supermarkets" />
                    <MenuItem value="zoo" primaryText="Zoos" />
                </SelectField>
            </div>
        );
    }

}

export default Options;
