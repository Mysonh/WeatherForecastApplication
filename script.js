//var apiKey = "f138dbe44d56fdb2586f17d90a49c62d"

   var searchButton = document.getElementById('submit');
   function weatherDisplay(weather){
      var weatherResults = document.getElementsByClassName('.flex-container');

      var location =document.getElementById('#location');
      location.textContent = weather.name;
      weatherResults.append(location);

      // Creating tags for temp, humidity, wind speed
      var temperature = document.createElement('p');
      temperature.textContent ="Temperature: " + weather.main.temp + "F";
   weatherResults.append(temperature);

   var humid = document.createElement('p');
      humid.textContent = 'Humidity: ' + weather.main.humidity + '%';
      weatherResults.append(humid);

      var speed = document.createElement('p');
      speed.textContent = 'Wind Speeds: ' + weather.wind.speed + 'mph';
       weatherResults.append(speed);
   }

   searchButton.addEventListener('click', getWeather());

function getWeather(city) {
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Atlanta&metric=imerial&appid=f138dbe44d56fdb2586f17d90a49c62d";
   
    fetch(requestUrl)
    .then((response) => response.json()) 
      .then((data) => weatherDisplay(data));
    
}
   
   //searchButton.addEventListener('click', getWeather());

   getWeather();
   
  // function saveData(){
  //    var input = document.getElementById('data')
   //   localStorage.setItem('value', input.value);
  //   var storedValue = localStorage.getItem('value')
 // }