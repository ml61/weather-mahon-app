export const formatCity = (data) => {
  let cityObj;
  if (Array.isArray(data)) {
    cityObj = data[0];
  } else cityObj = data;

  return cityObj.ParentCity
    ? {
        id: cityObj.ParentCity.Key,
        name: cityObj.ParentCity.EnglishName,
        country: cityObj.Country.EnglishName,
      }
    : {
        id: cityObj.Key,
        name: cityObj.EnglishName,
        country: cityObj.Country.EnglishName,
      };
};

export const makeFiveDateOptions = () => {
  let today = new Date(Date.now());
  let dateArr = [today];

  for (let i = 0; i < 4; i++) {
    dateArr.push(new Date(dateArr[i].getTime() + 1000 * 3600 * 24));
  }
  return dateArr;
};

export const formatDate = (date) => {
  let month = "" + (date.getMonth() + 1);
  let day = "" + date.getDate();
  let year = date.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("-");
};

const formatIcon = (icon) => {
  icon = "" + icon;
  return icon.length < 2 ? `0${icon}-s.png` : `${icon}-s.png`;
};
export const formatForecastReponse = (data) => {
  const formattedForecast = data.map((data) => {
    const {
      Date: dateBeforeFormatting,
      Temperature: temperature,
      Day: day,
    } = data;
    const {
      CloudCover: cloudCover,
      LongPhrase: description,
      Wind: wind,
      IconPhrase: iconPhrase,
    } = day;
    const icon = formatIcon(day.Icon);

    const { Localized: windDirection } = wind.Direction;
    const { Value: windSpeed } = wind.Speed;
    const { Value: minTemperature } = temperature.Minimum;
    const { Value: maxTemperature } = temperature.Maximum;

    const weatherDate = formatDate(new Date(dateBeforeFormatting));

    return {
      weatherDate,
      cloudCover,
      icon,
      iconPhrase,
      description,
      windDirection,
      windSpeed,
      minTemperature,
      maxTemperature,
    };
  });
  return formattedForecast;
};

export const isDisplayedCityIsInMyCities = (displayedCity, myCities) => {
  return myCities.find((city) => city.id === displayedCity.id) ? true : false;
};
