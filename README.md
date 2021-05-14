# Getting Started with Create React App

Before following the link to this project please go to the cors-anywhere.herokuapp.com and click Request demo proxy server. This allows you to add the city to the City-List. Proxy is used because of CORS policy (places API from google is used in this app).
Link to the app: https://mahon-weather-app-zp.netlify.app/

App shows the weather in user's current location (if browser location is allowed). The data about the weather is requested from AccuWeather API. User can check the weather for 5 days. User can check the weather in any city, after entering and submiting it. User can add city to his city-list (after adding the city it is shown in My Cities page). User also can add notes for selected day (after adding the note it is shown in My Notes page). The photo of the cities, which are shown on My Cities page, are requested from the Google Places API (proxy was needed for this). Notes and cities can be deleted from My Notes list and My Cities list. 
Simple styling was created with bootstrap, react-bootstrap (eg modal window) and material-ui (eg button).
Redux was used in this app. You can check the state of the APP with the redux extension.

The state of currentCity, myCities and myNotes are saved in a local storage, so that that states are available after refreshing of the page.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

