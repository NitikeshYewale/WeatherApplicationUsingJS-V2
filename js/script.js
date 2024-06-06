
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
    console.log(weatherIcon.src);
    // switch(data.weather[0].main ){
    //     case "Clouds":{
    //         weatherIcon.src="images/cloudy.png";
    //         break;
    //     }
    //     case "Clear":{
    //         weatherIcon.src="images/sun.png";
    //         break;
    //     }
    //     case "Rain":{
    //         weatherIcon.src="images/rainy.jpg";
    //         break;
    //     }
    //     case "Drizzle":{
    //         weatherIcon.src="images/drizzle.png";
    //         break;
    //     }
    //     case "Mist":{
    //         weatherIcon.src="images/mist.png";
    //         break;
    //     }
    //     case "Haze":{
    //         weatherIcon.src="images/haze.png";
    //         break;
    //     }
    //     case 'Snow':{
    //       weatherIcon.src = "images/snow.png";
    //       break;
    //     }
    // }
}


//for weather page


searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value.trim());
});









