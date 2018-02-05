//Import React
import React from 'react';

//Import icons being used.
import SettingsIcon from 'material-ui/svg-icons/action/settings';

//Import material ui FAB.
import FloatingActionButton from 'material-ui/FloatingActionButton';

//Import material ui drop down menu.
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

//Import CSS
import './css/options.css';


/*Should render the options dropsdowns etc, and store all potential options and when they are changed, send them back
to the placeCard.*/

class Options extends React.Component
{
    constructor(props)
    {
        super(props);


        this.state =
            {
                currentLocationType: this.props.currentLocationType,
                searchRadius: this.props.currentSearchRadius,
                optionsDisplayState: "options-container-hidden"
            }
    }

    onLocationTypeChange = (event, index, value) =>
    {
        this.setState({ currentLocationType: value });

        this.props.optionsChanged(value, this.state.searchRadius);
    }

    onSearchRadiusChange = (event, index, value) =>
    {
        this.setState({ searchRadius: value });
        this.props.optionsChanged(this.state.currentLocationType, value);
    }

    toggleOptions = () =>
    {
        if (this.state.optionsDisplayState === "options-container-hidden")
        {
            this.setState({ optionsDisplayState: "options-container-shown" });
        }
        else
        {
            this.setState({ optionsDisplayState: "options-container-hidden" });
        }

    }

    render()
    {
        return (
            <div>
                <FloatingActionButton className="options-btn" mini={true} backgroundColor="#9E9E9E" onClick={this.toggleOptions}>
                    <SettingsIcon />
                </FloatingActionButton>


                <div className={this.state.optionsDisplayState}>
                    <div className="options-container">
                        <div className="locationType">
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
                        <div className="searchRadius">
                            <SelectField
                                floatingLabelText="Search Radius"
                                onChange={this.onSearchRadiusChange}
                                value={this.state.searchRadius}
                            >

                                <MenuItem value="1" primaryText="1 Mile" />
                                <MenuItem value="2" primaryText="2 Miles" />
                                <MenuItem value="3" primaryText="3 Miles" />
                                <MenuItem value="4" primaryText="4 Miles" />
                                <MenuItem value="5" primaryText="5 Miles" />
                                <MenuItem value="6" primaryText="6 Miles" />
                                <MenuItem value="7" primaryText="7 Miles" />
                                <MenuItem value="8" primaryText="8 Miles" />
                                <MenuItem value="9" primaryText="9 Miles" />
                                <MenuItem value="10" primaryText="10 Miles" />
                                <MenuItem value="11" primaryText="11 Miles" />
                                <MenuItem value="12" primaryText="12 Miles" />
                                <MenuItem value="13" primaryText="13 Miles" />
                                <MenuItem value="14" primaryText="14 Miles" />
                                <MenuItem value="15" primaryText="15 Miles" />
                                <MenuItem value="16" primaryText="16 Miles" />
                                <MenuItem value="17" primaryText="17 Miles" />
                                <MenuItem value="18" primaryText="18 Miles" />
                                <MenuItem value="19" primaryText="19 Miles" />
                                <MenuItem value="20" primaryText="20 Miles" />

                            </SelectField>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Options;
