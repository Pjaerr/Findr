# Findr
### A tinder-like web app that helps you find things to do nearby. [Finished] 

Findr is a web app made with **React**, **JavaScript** and the **Google Maps API** that gathers nearby places matching a specific category within a specific search radius. The results are grabbed in real-time and are presented in a card with an image, title, distance in miles and star rating, all taken from google maps. There exists two buttons, dismiss and like that sit below the card, the dismiss button loads the next 'card' which is a new location grabbed from google maps, and the like button takes you to the google maps page for the location on the card.

The app is meant to be a fun way to find all of the things nearby by 'swiping' cards left or right like in the Tinder app, all of the data is easily found via google maps itself.


##### Issues (that i'll fix if I can get around to it)
- [x] ~~The options menu pushes the card off of the screen.~~

- [ ] On iphone 4 and sometimes on iphone 5/SE screensizes, the like and dismiss buttons move partially, or fully, off of the bottom of the screen requiring the user to scroll.

- [ ] The google maps api is sometimes loaded before the actual map component it needs has been rendered within the DOM causing an error to appear in the console. (As far as I know this doesn't break and/or slow anything down)

- [ ] Cards aren't always the same size and have (in my tests) slight variation causing the buttons to move around when moving from one card to another.

- [ ] Not an issue, but the card switching could be faster by pre-loading the data for 2 cards ahead of time instead of the single card.
