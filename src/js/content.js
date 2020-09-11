const displayContent = (myForeCast) => {
  document.body.innerHTML = '';

  const searchContainer = document.createElement('div');
  searchContainer.id = 'search';

  const txtSearch = document.createElement('input');
  txtSearch.setAttribute('placeholder', 'City Name');
  txtSearch.setAttribute('type', 'text');
  txtSearch.id = 'txtSearch';

  searchContainer.appendChild(txtSearch);

  const btnSearch = document.createElement('button');
  btnSearch.innerHTML = 'Search <i class="fas fa-search"></i>';
  btnSearch.setAttribute('onclick', 'window.changeCity(document.getElementById("txtSearch").value)');

  searchContainer.appendChild(btnSearch);

  document.body.appendChild(searchContainer);

  const container = document.createElement('div');

  const image = new Image();
  let urlImage = `../src/img/${myForeCast.city}.jpg`;
  image.src = urlImage;
  if (image.width === 0) {
    urlImage = '../src/img/default.jpg';
  }

  container.style.background = `url("${urlImage}") no-repeat`;
  container.id = 'container';

  document.body.appendChild(container);

  const title = document.createElement('h1');
  title.id = 'city';
  title.innerText = `${myForeCast.city}, ${myForeCast.country}`;

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
  checkbox.setAttribute('onclick', 'window.changeUnits(this.checked)');

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
