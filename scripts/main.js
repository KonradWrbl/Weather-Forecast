const API = '//api.openweathermap.org/data/2.5/';

$('.searchButton').on('click', () => {

    if ($("#searchInput")[0].value === '') {
        alert('Podaj nazwe miasta!');
        return;
    }

    axios.get(`${API}weather?q=${$("#searchInput")[0].value}&appid=e86ba166de2e36b28f351cc82f422e7f`)
        .then((response) => {
            console.log(response);
            maxTemp = Math.round(response.data.main.temp - 273.3);
            cloudy = response.data.weather[0].main;
            city = response.data.name
            addResult();

         })
        .catch((error) => { console.log(error) });

    $("#searchInput")[0].value = '';
});

//localhost

let addResult = () => {

    let resultItem = document.createElement('div'),
        cityEl = document.createElement('div'),
            cityNameEl = document.createElement('p'),
        tempEl = document.createElement('div'),
            temperatureEl = document.createElement('p'),
        cloudEl = document.createElement('img'),
        closeEl = document.createElement('div'),
            crossBtn = document.createElement('button');

    cityNameEl.innerText = `${city}`;
    temperatureEl.innerText = `${maxTemp} ℃`;
    if (cloudy === 'Clear') {
        cloudEl.setAttribute('src', './img/sunny.svg');
    } else if (cloudy === 'Clouds') {
        cloudEl.setAttribute('src', './img/clouds.svg');
    } else if (cloudy === 'Rain') {
        cloudEl.setAttribute('src', './img/raining.svg');
    } else if (cloudy === 'Snow') {
        cloudEl.setAttribute('src', './img/snow.svg');
    } else if (cloudy === 'Drizzle') {
        cloudEl.setAttribute('src', './img/drizzle.svg');
    }

    resultItem.classList.add('resultItem');
    cityEl.classList.add('city');
    tempEl.classList.add('temp');
    cloudEl.classList.add('cloud');
    closeEl.classList.add('close');
    crossBtn.classList.add('closeBtn')

    closeEl.appendChild(crossBtn);
    crossBtn.innerHTML = '<img class="cross" src="./img/delete.svg" alt="">';

    cityEl.appendChild(cityNameEl);
    tempEl.appendChild(temperatureEl);

    resultItem.appendChild(cityEl);
    resultItem.appendChild(tempEl);
    resultItem.appendChild(cloudEl);
    resultItem.appendChild(closeEl);

    $('.results')[0].append(resultItem);
}

$('.results').on('click', ".cross", (e) => {
    e.target.parentNode.parentNode.parentNode.remove();
});