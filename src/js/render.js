import display from './content';

const render = async (index, data, units = 'imperial') => {
  const myForeCast = await data;

  const info = {
    index: parseInt(index, 10),
    city: myForeCast.name,
    country: myForeCast.sys.country,
    temp: Math.round(myForeCast.main.temp),
    feelsLike: Math.round(myForeCast.main.feels_like),
    tempMax: Math.round(myForeCast.main.temp_max),
    tempMin: Math.round(myForeCast.main.temp_min),
    weather: myForeCast.weather[0].main,
    icon: myForeCast.weather[0].icon,
    humidity: myForeCast.main.humidity,
    wind: myForeCast.wind.speed,
    units,
  };

  display(info);
};

export default render;
