//Import React
import React from 'react';
import ReactDOM from 'react-dom';

//Import the Material UI Theme Provider (holds all elements using material ui)
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Import External Components
import PlaceCard from './external_components/placeCard.js';

import './index.css';

class Main extends React.Component
{
    render()
    {
        console.error("Roses are red, Violets are blue, unexpected '}' on line 32");
        return (
            <div>
                <div><h1 className="title">Findr</h1></div>
                <div>
                    <MuiThemeProvider>
                        <div id="place-card">
                            <PlaceCard />
                        </div>
                    </MuiThemeProvider>
                </div>
            </div >
        );
    }
}

// ========================================

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
