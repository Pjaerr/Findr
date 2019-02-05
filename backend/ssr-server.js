require('dotenv').config();

const request = require('request');
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const foursquareApiData = {
    venueBaseUrl: "https://api.foursquare.com/v2/venues/explore?",
    venueBasePhotosUrl: "https://api.foursquare.com/v2/venues/",
    version: "20180323",
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
};

let client_id = "client_id=" + foursquareApiData.clientID + "&";
let client_secret = "client_secret=" + foursquareApiData.clientSecret + "&";
let v = "v=" + foursquareApiData.version + "&";

app.prepare()
    .then(() =>
    {
        const server = express();

        server.get('/placedata/latLng=:latLng&limit=:limit&query=:query', (req, res) =>
        {
            let limit = "limit=" + req.params.limit + "&";
            let ll = "ll=" + req.params.latLng + "&";
            let query = "query=" + req.params.query;

            let apiQuery = foursquareApiData.venueBaseUrl + client_id + client_secret + v + limit + ll + query;


            request(apiQuery, function (error, response, body)
            {
                if (error) console.log('error:', error);

                if (body)
                {
                    res.send(body);
                }
            });
        });

        server.get('/placedata/photos/id=:locationId', (req, res) =>
        {
            let locationId = req.params.locationId + "?";

            let apiQuery = foursquareApiData.venueBasePhotosUrl + locationId + v + client_id + client_secret;

            request(apiQuery, function (error, response, body)
            {
                if (error) console.log('error:', error);

                if (body)
                {
                    res.send(body);
                }
            });
        });

        server.get('*', (req, res) =>
        {
            return handle(req, res);
        });

        server.listen(3000, (err) =>
        {
            if (err) throw err
            console.log('> Ready on http://localhost:3000');
        });
    })
    .catch((ex) =>
    {
        console.error(ex.stack);
        process.exit(1);
    });