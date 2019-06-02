require("dotenv").config();

//Controllers
const placeDataController = require("./controllers/placeDataController.js");

//Express Server
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const allowedOrigins = ["http://localhost:3000", "https://pjaerr.github.io"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        var message =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(message), false);
      }

      return callback(null, true);
    }
  })
);

//Register Routes
app.get(
  "/placedata/latLng=:latLng&limit=:limit&query=:query",
  placeDataController
);

app.get("*", (req, res) =>
  res.send(
    "Invalid Route!\n\nTry the following route: /placedata/latLng=:latLng&limit=:limit&query=:query"
  )
);

app.listen(port, () => console.log(`Backend listening on port ${port}!`));
