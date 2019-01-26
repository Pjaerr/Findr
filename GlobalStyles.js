/*
 * This file should contain regular JavaScript objects that hold what would be CSS or SASS
 * variables if we weren't using Styled Components.
 * 
 * This is an alternative to using the <ThemeProvider> that comes with the Styled Components
 * package as to change the theme of the entire webpage/app you would just default export a
 * different themed JavaScript object in this file that will then be used throughout the app. 
 * Obviously ensuring that all of the fields in the object are the same.
*/


export default {
    backgroundColour: '#f5f5f5',
    textColour: '#333333',
    secondaryBackgroundColour: '#ffffff',
    fontFamily: 'Montserrat, sans-serif'
};