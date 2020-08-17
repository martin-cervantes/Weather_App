const getForeCast = async (units = 'metric') => {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Mexico,mx&units=${units}&APPID=601f07ca111a8579d6efec14591e21a7`, { mode: 'cors' });

    const data = await response.json();

    return data;
  } catch (error) {
    alert(error);
  }
  return false;
};

export default getForeCast;
