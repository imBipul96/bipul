let apikey = "0086e1b93b8cac3c6cefd807165c40f3";
let apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

let inputCity = document.querySelector('.inputCity');

let city = document.getElementById('city');
let temp = document.getElementById('temp');
let wind = document.getElementById('wind');
let humidity = document.getElementById('humidity');

async function getWeather(){
    cityname = inputCity.value;
    const response = await fetch(apiurl + `${cityname}&appid=${apikey}`);
    let data = await response.json();
    console.log(data.main);
    city.innerHTML = `${data.name} - ${data.sys.country}`;
    temp.innerHTML = Math.round(data.main.temp) + '°c';
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed}km/h`;
    inputCity.value = "";
}

getWeather();

inputCity.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
        getWeather();
    }
});
