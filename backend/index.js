require('dotenv').config();

const express = require('express');

const placeData = require('./controllers/placeData.js');

const app = express();
const port = 3001;

//Register Routes
app.get('/', (req, res) => res.send('Invalid Route!'));
app.get('/placedata/latLng=:latLng&limit=:limit&query=:query', placeData);

app.listen(port, () => console.log(`Backend listening on port ${port}!`));

// app
//   .prepare()
//   .then(() => {
//     const server = express();

//     server.get('/placedata/latLng=:latLng&limit=:limit&query=:query', (req, res) => {
//       let limit = 'limit=' + req.params.limit + '&';
//       let ll = 'll=' + req.params.latLng + '&';
//       let query = 'query=' + req.params.query;

//       let apiQuery =
//         foursquareApiData.venueBaseUrl + client_id + client_secret + v + limit + ll + query;

//       request(apiQuery, function(error, response, body) {
//         if (error) console.log('error:', error);

//         if (body) {
//           res.send(body);
//         }
//       });
//     });

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

//     server.get('*', (req, res) => {
//       return handle(req, res);
//     });

//     server.listen(3001, err => {
//       if (err) throw err;
//       console.log('> --Backend--\nReady on http://localhost:3001');
//     });
//   })
//   .catch(ex => {
//     console.error(ex.stack);
//     process.exit(1);
//   });
