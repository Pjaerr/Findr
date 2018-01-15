import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './index.css';

class Main extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { clicks: 0 };
    }

    render()
    {
        return (
            <div>
                <div><h1 className="title">Findr</h1></div>

                <div>
                    <MuiThemeProvider>
                        <div id="dislike-btn"><RaisedButton label="X" primary={true} /></div>
                        <div id="like-btn"><RaisedButton label="<3" primary={true} /></div>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
