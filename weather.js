
const weather = document.querySelector(".js-weather");
const API_KEY ="2a41f3bd05902457d071ba6e9794a983";
const COORDS = "coords";

function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    }).then(function(json){
        const temp = json.main.temp;
        const place =json.name;
        weather.innerText = `temperature : ${temp}'C / location : ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords(){
    const loadCoords = localStorage.getItem(COORDS);
    if(loadCoords===null){
        askForCoords();
    }else{
        const parseCoords =JSON.parse(loadCoords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
        
    }
}

function init() {
    loadCoords();
}

init();