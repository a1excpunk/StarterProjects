//npm package for date formatting
// var moment = require('moment')
// const currentDate = moment(new Date()).format("LL");

//  shorthand function for id's
const docById = (id) => document.getElementById(`${id}`);

// DOM element declarations/assignments (weather details)
//~main content
const body = document.getElementsByTagName("body")[0];
const mainContent = docById("main_content");
const sideContent = docById("side_content");
const mainTemp = docById("main_temp");
const weatherMain = docById("weather_main");
const feelsLikeTemp = docById("feels_like_temp");
const cityName = docById("city_name");
let date = docById("date");
const searchBtn = docById("search");
//~side content
const input = docById("input");
const humidity = docById("humidity");
const presure = docById("presure");
const visibility = docById("visibility");
const weatherDescription = docById("weather_description");
const wind = docById("wind");
const minTemp = docById("temp_min");
const maxTemp = docById("temp_max");

//~ (main cities)
const beijing = docById("beijing_city");
const newYork = docById("newyork_city");
const tokyo = docById("tokyo_city");
const moscow = docById("moscow_city");

// adding events to DOM elemnts (default cities)
//~getting API
//attaching fetched data to DOM
function fetchedData(data) {
    const weatherMainValue = data["weather"][0]["main"];
    const tempValue = data["main"]["temp"];
    const feelsLikeTempValue = data["main"]["feels_like"];
    const cityNameValue = data["name"];

    const humidityValue = data["main"]["humidity"];
    const presureValue = data["main"]["pressure"];
    const visibilityValue = data["visibility"];
    const weatherDescriptionValue = data["weather"][0]["description"];
    const windValueSpeed = data["wind"]["speed"];
    const minTempValue = data["main"]["temp_min"];
    const maxTempValue = data["main"]["temp_max"];

    mainTemp.innerHTML = Math.round(tempValue);
    weatherMain.innerHTML = weatherMainValue;
    feelsLikeTemp.innerHTML = "feels like " + feelsLikeTempValue;
    cityName.innerHTML = cityNameValue;
    humidity.innerHTML = "humidity: " + humidityValue;
    presure.innerHTML = "pressure: " + presureValue;
    visibility.innerHTML = "visibility: " + visibilityValue;
    weatherDescription.innerHTML =
        "weather description: " + weatherDescriptionValue;
    wind.innerHTML = "wind speed: " + windValueSpeed;
    minTemp.innerHTML = "min temp: " + minTempValue;
    maxTemp.innerHTML = "max temp: " + maxTempValue;
    date.innerHTML = new Date();
}
//default cities
beijing.addEventListener("click", () => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=beijing&units=metric&appid=def095bd9d82a382b7703effa3533fac`
    )
        .then((Response) => Response.json())
        .then((data) => {
            fetchedData(data);
        });
});
newYork.addEventListener("click", () => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=new%20york&units=metric&appid=def095bd9d82a382b7703effa3533fac`
    )
        .then((Response) => Response.json())
        .then((data) => {
            fetchedData(data);
        });
});
tokyo.addEventListener("click", () => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid=def095bd9d82a382b7703effa3533fac`
    )
        .then((Response) => Response.json())
        .then((data) => {
            fetchedData(data);
        });
});
moscow.addEventListener("click", () => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=moscow&units=metric&appid=def095bd9d82a382b7703effa3533fac`
    )
        .then((Response) => Response.json())
        .then((data) => {
            fetchedData(data);
        });
});
//general input
input.addEventListener("keyup", (event) => {
    if (event.code == "Enter") {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=def095bd9d82a382b7703effa3533fac`
        )
            .then((Response) => Response.json())
            .then((data) => {
                fetchedData(data);
            });
    }
});
searchBtn.addEventListener("click", () => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=def095bd9d82a382b7703effa3533fac`
    )
        .then((Response) => Response.json())
        .then((data) => {
            fetchedData(data);
        });
});

//~style
//on click style change
let pageBCKimage = body.style.backgroundImage;
let pageBCKimageRepeat = body.style.backgroundRepeat;
let pageBCKimagePosition = body.style.backgroundPosition;
let pageBCKimageAttachement = body.style.backgroundAttachment;
let pageBCKimageSize = body.style.backgroundSize;

beijing.addEventListener("click", () => {});
newYork.addEventListener("click", () => {});
tokyo.addEventListener("click", () => {});
moscow.addEventListener("click", () => {});

//current date
// date.innerText = currentDate;
