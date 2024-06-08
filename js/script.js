
const searchBox = document.querySelector(".mainContainer input");
const searchBtn = document.querySelector(".mainContainer button");
const weatherIcon = document.querySelector(".weather-icon");

const apiKey = "76a9b7d307b9f35c1c7487b8b5f9c955";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
const apiUrl5Days = "https://api.openweathermap.org/data/2.5/forecast?q="

async function checkWeather(city) {
    //for Current weather
    const response = await fetch(apiUrl + city + `&units=metric&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".weatherIcon h2").innerHTML = data.weather[0].main + " " + Math.round((data.main.temp)) + "°C";
    document.querySelector(".desc strong").innerHTML = data.name;


    //for requested City date and time
    let d = new Date();
    let localTime = d.getTime();
    let localOffset = d.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset
    var cityDate = utc + (1000 * data.timezone);
    let showCityDate = new Date(cityDate);
    document.querySelector(".date").innerHTML = showCityDate.toDateString() + " " + showCityDate.toTimeString().substring(0, 9);

    //for current user date
    document.querySelector(".systemDate").innerHTML = "" + new Date().toDateString() + " " + new Date().toTimeString().substring(0, 9);

    document.querySelector(".description").innerHTML = data.weather[0].description;

    document.querySelector(".hu").innerHTML = data.main.humidity + "%";

    document.querySelector(".wind h2").innerHTML = data.wind.speed + "km/hr";

    weatherIcon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    //console.log(weatherIcon.src);

    //for 5 days weather forecast
    const response5days = await fetch(apiUrl5Days + city + `&units=metric&appid=${apiKey}`);
    var data5days = await response5days.json();
    var x = 1;
    var previousDate = 0;
    for (i = 0; i < 41; i++) {
        if (new Date(data5days.list[i].dt * 1000).getDay() !== new Date(previousDate).getDay()) {
            previousDate = data5days.list[i].dt * 1000;
            document.getElementById("date" + x).innerHTML = new Date(data5days.list[i].dt * 1000).toDateString();
            document.getElementById("img" + x).src = "https://openweathermap.org/img/wn/" + data5days.list[i].weather[0].icon + "@2x.png";
            let ls = data5days.list[i].main;
            document.getElementById("temp" + x).innerHTML = Math.round(Math.min(ls.feels_like, ls.feels_like, ls.temp, ls.temp_min, ls.temp_max)) + "°C / " + Math.round(Math.max(ls.feels_like, ls.feels_like, ls.temp, ls.temp_min, ls.temp_max)) + "°C";
            document.getElementById("desc" + x).innerHTML = data5days.list[i].weather[0].description;
            x++;
            if (x > 5) break;


        }
    }

}


//for weather page  https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=6a282f107978f724b8b38717d2fb1197


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value.trim());
});


//for enter key event
searchBox.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        checkWeather(searchBox.value.trim());
    }
})









