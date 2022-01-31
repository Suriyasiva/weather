var getdate = new Date().toJSON();
var acqdate = getdate.slice(0, 10);
var container = document.createElement("div");
container.setAttribute("class", "bg-div");
container.style.width = "450px";
// container.style.height = "1000px";
container.style.borderRadius = "5px";
var getdate = document.createElement("h2");
getdate.setAttribute("class", "date");
getdate.innerHTML = `<i class="bi bi-calendar3"></i> : ` + acqdate;
getdate.style.color = "white";
var getday = document.createElement("h2");
getday.setAttribute("class", "day");
getday.style.color = "white";
getday.innerHTML = new Date().getDay();
if (getday.innerHTML == 1) {
  getday.innerHTML = `<i class="bi bi-calendar2-day"></i> : Monday`;
} else if (getday.innerHTML == 2) {
  getday.innerHTML = `<i class="bi bi-calendar2-day"></i> : Tuesday`;
} else if (getday.innerHTML == 3) {
  getday.innerHTML = `<i class="bi bi-calendar2-day"></i> : Wednesday`;
} else if (getday.innerHTML == 4) {
  getday.innerHTML = `<i class="bi bi-calendar2-day"></i> : Thursday`;
} else if (getday.innerHTML == 5) {
  getday.innerHTML = `<i class="bi bi-calendar2-day"></i> : Friday`;
} else if (getday.innerHTML == 6) {
  getday.innerHTML = `<i class="bi bi-calendar2-day"></i> : Saturday`;
} else if (getday.innerHTML == 0) {
  getday.innerHTML = ` <i class="bi bi-calendar2-day"></i> : Sunday`;
}
var greetings = document.createElement("h2");
greetings.style.color = "white";
if (new Date().getHours() <= 0 || new Date().getHours() <= 12) {
  greetings.innerHTML = `<i class="bi bi-check-circle"></i> : Good_Morning`;
} else if (new Date().getHours() <= 13 || new Date().getHours() <= 18) {
  greetings.innerHTML = `<i class="bi bi-check-circle"></i> : Good_Afternoon`;
} else {
  greetings.innerHTML = `<i class="bi bi-check-circle"></i> : Good_Night`;
}
var sunicon = document.createElement("i");
if (new Date().getHours() <= 0 || new Date().getHours() <= 6) {
  sunicon.setAttribute("class", "bi bi-cloud-snow");
} else if (new Date().getHours() <= 6 || new Date().getHours() <= 11) {
  sunicon.setAttribute("class", "bi bi-cloud-sun");
} else if (new Date().getHours() <= 11 || new Date().getHours() <= 16) {
  sunicon.setAttribute("class", "bi bi-brightness-high");
} else if (new Date().getHours() <= 16 || new Date().getHours() <= 20) {
  sunicon.setAttribute("class", "bi bi-cloud-moon");
} else {
  sunicon.setAttribute("class", "bi bi-sunset");
}
sunicon.style.fontSize = "100px";
sunicon.style.margin = "0px";
var id = document.getElementsByTagName("input");
var weatherDisplay = document.createElement("div");
weatherDisplay.setAttribute("class", "wline");
var getweather = async () => {
  try {
    var a = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${id[0].value}+&appid=6776c9115007808af4dcbe8f6e96b295`
    );
    var b = await a.json();
    weatherDisplay.innerText = "";
    var weather = document.createElement("h2");
    weather.setAttribute("class", "climate");
    weather.innerText = "";
    weather.style.fontSize = "23px";
    weather.innerHTML = `<h2><i class="bi bi-geo-alt"></i> : ${b.name}</h2> 
<h2> <i class="bi bi-thermometer-low"></i> : ${b.main.temp_min} </h2>
<h2><i class="bi bi-thermometer-high"></i> : ${b.main.temp_max} </h2>
<h2><i class="bi bi-bullseye"></i> : ${b.weather[0].description}</h2>`;
    weather.style.color = "white";
    weatherDisplay.appendChild(weather);
  } catch (error) {
    console.log(error);
    alert("Check Your Network or Enter the city Name");
  }
};
var gethour = addzero(new Date().getHours());
var getmin = addzero(new Date().getMinutes());
function addzero(num) {
  return num < 10 ? `0${num}` : num;
}
var gettime = document.createElement("h2");
gettime.style.color = "white";
gettime.innerHTML = `<i class="bi bi-hourglass-split"></i> : ${gethour}:${getmin}`;
container.appendChild(getdate);
container.appendChild(getday);
container.appendChild(gettime);
container.appendChild(greetings);
container.appendChild(sunicon);
document.body.appendChild(container);
container.appendChild(weatherDisplay);
