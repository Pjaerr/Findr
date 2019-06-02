# Findr

### A tinder-like web app that helps you find things to do nearby

![](https://media.giphy.com/media/KyH7s1LQHM68l7pQMH/giphy.gif)

#### Frontend

- React
- Next.js

#### Backend (as an API)

- Node.js
- Express
- Foursquare API

This web app was originally made using my very basic react knowledge and the google maps API. It was very bad but the code can still be found in the `old` branch.

#### Getting Setup

1. Clone the repository locally
2. Navigate to /frontend and run `npm install`
3. Navigate to /backend and run `npm install`
4. Inside the `/backend/example.env` file, put your foursquare client_id and client_secret (info on getting these can be found [here](https://developer.foursquare.com/docs/api))
5. In the same file, ensure your list of allowed origins includes 'http://localhost:3000' (this is your frontend)
6. Rename your `example.env` to just `.env`
7. Inside of the /backend folder Run `npm start` to start the backend. You can see if this is working by visiting `http://localhost:3001`
8. Inside of the /frontend folder, run `npm run dev` to start the frontend. You can also run `npm run build` followed by `npm start` to run the production build.
