require('dotenv').config();

//Controllers
const placeData = require('./controllers/placeData.js');

const express = require('express');
const app = express();
const port = 3001;

//Register Routes
app.get('/', (req, res) => res.send('Invalid Route!'));
app.get('/placedata/latLng=:latLng&limit=:limit&query=:query', placeData);

app.listen(port, () => console.log(`Backend listening on port ${port}!`));

//     server.get('/placedata/photos/id=:locationId', (req, res) => {
//       let locationId = req.params.locationId + '?';

//       let apiQuery =
//         foursquareApiData.venueBasePhotosUrl + locationId + v + client_id + client_secret;

//       request(apiQuery, function(error, response, body) {
//         if (error) console.log('error:', error);

//         if (body) {
//           res.send(body);
//         }
//       });
//     });
