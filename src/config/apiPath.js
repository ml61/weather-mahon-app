export const rootPath = "https://dataservice.accuweather.com";

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
