# Findr

## Rebuild

I am currently rebuilding this web app using the new knowledge I have gained. Looking back, this project was really useful as it got me interested in react, but I did almost everything the _wrong_ way. Hopefully in the rebuild I can use my experience to atleast do some of those things correctly.

Progress can be followed on the `rebuild/development` branch where features/bugs/fixes etc are listed as `rebuild/NAME-OF-FEATURE` and then merged into the development branch.

I am happy for contributions where possible but I understand I haven't spent the time to make it easy to contribute. I will be adding issues once I have a solid base and I am confident the code is readable, maintainable and can be contributed to.


## Old Readme:
### A tinder-like web app that helps you find things to do nearby. [Finished] 

Findr is a web app made with **React**, **JavaScript** and the **Google Maps API** that gathers nearby places matching a specific category within a specific search radius. The results are grabbed in real-time and are presented in a card with an image, title, distance in miles and star rating, all taken from google maps. There exists two buttons, dismiss and like that sit below the card, the dismiss button loads the next 'card' which is a new location grabbed from google maps, and the like button takes you to the google maps page for the location on the card.

The app is meant to be a fun way to find all of the things nearby by 'swiping' cards left or right like in the Tinder app, all of the data is easily found via google maps itself.


#### Issues
The app works as I intended, but it obviously has a few issues here and there, nothing breaks it, but things could be improved in places. I don't intend for it to be added to by other people, but if you really want to you can tackle some of the [issues](https://github.com/Pjaerr/Findr/issues) and make a pull request and ill gladly accept!

**If you pull the repo, remember to run `npm install` and `npm install material-ui` as I have ignored the node_modules folder in the .gitignore file.**


*Like an idiot, I also left my google maps api key in the project, pls look after it*
