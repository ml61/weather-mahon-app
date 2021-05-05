const apiQueryCityPath =
  "https://www.metaweather.com/api/location/search/?query="; //Kiev, if you`ll write San then it`ll be an array in respone with cities which can be that query

const apiLattLongCityPath =
  "https://www.metaweather.com/api/location/search/?lattlong="; //36.96,-122.02. In response is array with cities, which are not far from that coords

const forecastForLocationPath = "https://www.metaweather.com/api/location/"; // after slash it must be an ID of a city, which we took from the response of apiQueryCityPath and apiLattLongCityPath

const weatherStateIconPath =
  "https://www.metaweather.com/static/img/weather/s.svg"; //replace an s with the abbr of weather_state to recieve a path to the svg icon which describe a weather state
