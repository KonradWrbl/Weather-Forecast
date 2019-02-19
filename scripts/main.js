import axios from 'axios';

const API = 'api.openweathermap.org/data/2.5/';

$('.searchButton').on('click', () => {
    axios.get(`${API}weather?q=${$("#searchInput").value}&appid=e86ba166de2e36b28f351cc82f422e7f`)
        .then((response) => { console.log(response) })
        .catch((error) => { console.log(error) })
});