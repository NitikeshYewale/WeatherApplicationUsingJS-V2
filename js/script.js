
    const searchBox=document.querySelector(".mainContainer input");
    const searchBtn=document.querySelector(".mainContainer button");
    const weatherIcon = document.querySelector(".weather-icon");

const apiKey="76a9b7d307b9f35c1c7487b8b5f9c955";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q="

async function checkWeather(city){
    const response= await fetch(apiUrl+city+`&units=metric&appid=${apiKey}`);

    var data = await response.json();

    console.log(data);
    document.querySelector(".weatherIcon h2").innerHTML= data.weather[0].main +" "+ Math.round((data.main.temp))+"°C";
    document.querySelector(".desc strong").innerHTML = data.name;
    
    document.querySelector(".date").innerHTML =""+new Date().toDateString();

    document.querySelector(".hu").innerHTML = data.main.humidity+"%";

    document.querySelector(".wind h2").innerHTML=data.wind.speed+ "km/hr";

    weatherIcon.src="https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
   // console.log(weatherIcon.src);

}


//for weather page


searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value.trim());
});









