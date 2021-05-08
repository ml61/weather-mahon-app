export const parentCity = (data) => {
  let cityObj;
  if (Array.isArray(data)) {
    cityObj = data[0];
  } else cityObj = data;

  return cityObj.ParentCity
    ? { id: cityObj.ParentCity.Key, name: cityObj.ParentCity.EnglishName }
    : { id: cityObj.Key, name: cityObj.EnglishName };
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

export const formatForecastReponse = (data) => {
  const formattedForecast = data.map((data) => {
    const { Date: dateBeforeFormatting, DegreeDaySummary, Day: day } = data;
    const {
      CloudCover: cloudCover,
      Icon: icon,
      LongPhrase: description,
      Wind: wind,
    } = day;
    const { Localized: windDirection } = wind.Direction;
    const { Value: windSpeed } = wind.Speed;
    const { Value: minTemperature } = DegreeDaySummary.Cooling;
    const { Value: maxTemperature } = DegreeDaySummary.Heating;
    const weatherDate = formatDate(new Date(dateBeforeFormatting));

    return {
      weatherDate,
      cloudCover,
      icon,
      description,
      windDirection,
      windSpeed,
      minTemperature,
      maxTemperature,
    };
  });
  return formattedForecast;
};
