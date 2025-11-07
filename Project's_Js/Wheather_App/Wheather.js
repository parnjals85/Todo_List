//const key = '51b627a7781b4b92b8182610250711'
const searchBtn = document.querySelector('#search')
const cityInput = document.querySelector('#city');

searchBtn.addEventListener('click' , ()=>{
    const city = cityInput.value.trim();
    if(city!== ''){
         getwheather(city)
    }else{
        alert('Please Enter the City Name');
    }
});
async function getwheather(city){
    const url = 'http://api.weatherapi.com/v1/current.json?key=51b627a7781b4b92b8182610250711&q=London&aqi=yes'
    try{
        const respnse = await fetch(url);
        if(!respnse.ok)
            throw new Error('city Not Found');

        const data = await respnse.json();
        showwheather(data);
        
    }catch(error){
        alert(error.message);
    }
}

function showwheather(data){
     document.getElementById("weather-info").style.display = "block";
  document.getElementById("city-name").textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById("temp").textContent = `🌡️ Temp: ${data.main.temp}°C`;
  document.getElementById("desc").textContent = `☁️ ${data.weather[0].description}`;
  document.getElementById("humidity").textContent = `💧 Humidity: ${data.main.humidity}%`;
  document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}