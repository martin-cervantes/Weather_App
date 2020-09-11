import './css/reset.css';
import './css/style.css';

import render from './js/render';
import getForeCast from './js/forecast';

let city = 'Mexico City';

render(getForeCast(city), 'metric');

window.changeUnits = function (value) {
  if (value) {
    render(getForeCast(city, 'imperial'));
  } else {
    render(getForeCast(city), 'metric');
  }
};

window.changeCity = function (value) {
  city = value;
  render(getForeCast(city), 'metric');
};
