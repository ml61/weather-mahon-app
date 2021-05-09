export const apiQueryCityPath =
  "https://www.metaweather.com/api/location/search/?query="; //Kiev, if you`ll write San then it`ll be an array in respone with cities which can be that query

export const apiLattLongCityPath =
  "https://www.metaweather.com/api/location/search/?lattlong="; //36.96,-122.02. In response is array with cities, which are not far from that coords

export const forecastForLocationPath =
  "https://www.metaweather.com/api/location/"; // after slash it must be an ID of a city, which we took from the response of apiQueryCityPath and apiLattLongCityPath

export const weatherStateIconPath =
  "https://www.metaweather.com/static/img/weather/s.svg"; //replace an s with the abbr of weather_state to recieve a path to the svg icon which describe a weather state

//https://api.openweathermap.org/data/2.5/onecall?lat=50.0953465&lon=19.8984047&exclude=minutely,hourly&units=metric&appid=7971ec6f18f941d585d389fb2fc4229a

export const rootPath = "http://dataservice.accuweather.com";

export const API_KEY = "IIBx8OcIbZkn9b9WNsTaw7hW4Y1e97GS";

export const cityIdFromCoords = "/locations/v1/cities/geoposition/search";

export const cityIdFromCityName = "/locations/v1/cities/search";
export const forecastFiveDaysPath = "/forecasts/v1/daily/5day/";

export const weatherIconPath =
  "https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/";

export const PLACES_API_KEY = "AIzaSyBQ9d4Y0sUxB7fXYSHovtlq_YGozZfpm8Q";

export const placesRootPath = "https://maps.googleapis.com/maps/api/place";

export const pathToPhotoReference =
  "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Krakow&key=AIzaSyBQ9d4Y0sUxB7fXYSHovtlq_YGozZfpm8Q&inputtype=textquery&fields=name,photos"; //get photoReference from here

export const photoPath =
  "https://maps.googleapis.com/maps/api/place/photo?photoreference=PHOTO_REF&key=API_KEY&maxwidth=400&maxheight=400"; //inset photoRef in this link + maxwidth and maxheight

export const proxyUrl = "https://cors-anywhere.herokuapp.com/";
