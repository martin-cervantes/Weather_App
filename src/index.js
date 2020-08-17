import './css/reset.css';
import './css/style.css';

import render from './js/render';
import getForeCast from './js/forecast';

render(getForeCast(), 'metric');

window.change = function (value) {
  if (value) {
    render(getForeCast('imperial'));
  } else {
    render(getForeCast(), 'metric');
  }
};
