const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'e2a9fe5d92a2f786f6faf809d1a80d90';

const setQuery = (e) => {
    if (e.keyCode === 13) {
        getResult(searchBar.value);
    }
};

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
    fetch(query)
        .then(weather => weather.json())
        .then(displayResult)
        .catch(error => console.error("Hata oluştu: ", error));
};

const displayResult = (result) => {
    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`;
    
    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(result.main.temp)}°C`;

    let desc=document.querySelector('.desc')
    desc.innerText=result.weather[0].description

    let minmax=document.querySelector('.minmax')
    minmax.innerText=`${Math.round(result.main.temp_min)}°C
    ${Math.round(result.main.temp_max)}°C`
};

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById("searchBar");
    searchBar.addEventListener('keypress', setQuery);
});
