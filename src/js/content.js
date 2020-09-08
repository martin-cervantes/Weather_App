const displayContent = (myForeCast) => {
  const container = document.createElement('div');
  container.style.background = `url("../src/img/${myForeCast.city}.jpg") no-repeat`;
  container.id = 'container';
  document.body.innerHTML = '';

  document.body.appendChild(container);

  const title = document.createElement('select');
  title.id = 'city';
  title.setAttribute('onclick', 'window.changeCity(this.value)');

  const city = ['Mexico City', 'Washington', 'Toronto', 'London', 'Paris', 'Barcelona', 'Moscow', 'Beijing', 'Tokyo', 'Sydney'];

  city.forEach((city, i) => {
    const option = document.createElement('option');
    option.innerText = city;
    option.setAttribute('value', i);

    title.appendChild(option);
  });

  title.selectedIndex = myForeCast.index;
  container.appendChild(title);

  const icon = document.createElement('div');
  icon.classList.add('icon');
  const url = `http://openweathermap.org/img/w/${myForeCast.icon}.png`;
  icon.style.background = `url("${url}") center/cover no-repeat`;

  container.appendChild(icon);

  const temp = document.createElement('p');
  temp.innerHTML = `<span class='tag'>Temp:</span> ${myForeCast.temp}&deg; <i class="fas fa-temperature-low"></i>`;

  container.appendChild(temp);

  const feelsLike = document.createElement('p');
  feelsLike.innerHTML = `<span class='tag'>Feels Like:</span> ${myForeCast.feelsLike}&deg;`;

  container.appendChild(feelsLike);

  const tempMax = document.createElement('p');
  tempMax.innerHTML = `<span class='tag'>Temp Max:</span> ${myForeCast.tempMax}&deg; <i class="fas fa-thermometer-three-quarters"></i>`;

  container.appendChild(tempMax);

  const tempMin = document.createElement('p');
  tempMin.innerHTML = `<span class='tag'>Temp Min:</span> ${myForeCast.tempMin}&deg; <i class="fas fa-thermometer-quarter"></i>`;

  container.appendChild(tempMin);

  const weather = document.createElement('p');
  weather.innerHTML = `<span class='tag'>Weather:</span> ${myForeCast.weather}`;

  container.appendChild(weather);

  const humidity = document.createElement('p');
  humidity.innerHTML = `<span class='tag'>Humidity:</span> ${myForeCast.humidity}% <i class="fas fa-tint"></i>`;

  container.appendChild(humidity);

  const wind = document.createElement('p');

  if (myForeCast.units === 'imperial') {
    wind.innerHTML = `<span class='tag'>Wind:</span> ${myForeCast.wind}mph <i class="fas fa-wind"></i>`;
  } else {
    wind.innerHTML = `<span class='tag'>Wind:</span> ${myForeCast.wind}m/s <i class="fas fa-wind"></i>`;
  }

  container.appendChild(wind);

  const change = document.createElement('p');
  change.classList.add('change');
  change.innerHTML = "<span class='tag'>C&deg;</span>";

  const label = document.createElement('label');
  label.classList.add('switch');

  const checkbox = document.createElement('input');
  checkbox.id = 'checkbox';
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('onclick', 'window.changeUnits(this.checked, document.getElementById("city").value)');

  if (myForeCast.units === 'imperial') checkbox.setAttribute('checked', 'true');

  const span = document.createElement('span');
  span.classList.add('slider', 'round');

  label.appendChild(checkbox);
  label.appendChild(span);

  change.appendChild(label);

  change.innerHTML += "<span class='tag'>F&deg;</span>";

  container.appendChild(change);
};

export default displayContent;
