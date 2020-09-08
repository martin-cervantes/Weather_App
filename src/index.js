import './css/reset.css';
import './css/style.css';

import render from './js/render';
import getForeCast from './js/forecast';

const city = ['Mexico,mx', 'Washington', 'Toronto', 'London', 'Paris', 'Barcelona', 'Moscow', 'Beijing', 'Tokyo', 'Sydney'];

render(0, getForeCast(city[0]), 'metric');

window.changeUnits = function (value, index) {
  if (value) {
    render(index, getForeCast(city[index], 'imperial'));
  } else {
    render(index, getForeCast(city[index]), 'metric');
  }
};

window.changeCity = function (index) {
  render(index, getForeCast(city[index]), 'metric');
};
