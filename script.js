//


var getdate = new Date().toJSON();
var acqdate = getdate.slice(0, 10);

var container = document.createElement("div");
container.setAttribute("class", "bg-div");
container.style.width = "800px";
// container.style.height = "400px";
container.style.borderRadius = "5px";
container.style.backgroundColor = "grey";

var getdate = document.createElement("h1");
getdate.setAttribute("class", "date");
getdate.innerText = "date: " + acqdate;
getdate.style.color = "white";

var getday = document.createElement("h1");
getday.setAttribute("class", "day");

getday.style.color = "white";
getday.innerText = new Date().getDay();
if (getday.innerText == 1) {
  getday.innerText = "day: " + "Monday";
} else if (getday.innerText == 2) {
  getday.innerText = "day: " + "Tuesday";
} else if (getday.innerText == 3) {
  getday.innerText = "day: " + "Wednesday";
} else if (getday.innerText == 4) {
  getday.innerText = "day: " + "Thursday";
} else if (getday.innerText == 5) {
  getday.innerText = "day: " + "Friday";
} else if (getday.innerText == 6) {
  getday.innerText = "day: " + "saturday";
} else if (getday.innerText == 0) {
  getday.innerText = "day: " + "sunday";
}

var greetings = document.createElement("h2");
greetings.style.color = "white";
if (new Date().getHours() <= 0 || new Date().getHours() <= 12) {
  greetings.innerText = "Good_Morning";
} else if (new Date().getHours() <= 13 || new Date().getHours() <= 18) {
  greetings.innerText = "Good_Afternoon";
} else {
  greetings.innerText = "Good_Night";
}

var sunicon = document.createElement("i");
if (new Date().getHours() <= 0 || new Date().getHours() <= 12) {
  sunicon.setAttribute("class", "bi bi-sunrise");
} else if (new Date().getHours() <= 13 || new Date().getHours() <= 18) {
  sunicon.setAttribute("class", "bi bi-brightness-high");
} else {
  sunicon.setAttribute("class", "bi bi-sunset");
}

sunicon.style.width = "500px";
sunicon.style.fontSize = "200px";
var getvalue=(res)=> {
  var id = document.getElementsByTagName("input");
  return res;

}

var  getweather= async ()=> {
  try {
    var a = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${getvalue(id.value)}+&appid=6776c9115007808af4dcbe8f6e96b295`
        
      
    );
    var b = await a.json();
    // var temperature = ` ${b.main.temp_min} - ${b.main.temp_max}`;

    var weather = document.createElement("h1");
    weather.setAttribute("class", "climate");

    weather.innerText = `cityname: ${b.name}
    temp_min: ${b.main.temp_min}
    temp_max: ${b.main.temp_max} 
    weather description: "${b.weather[0].description}"`;
    weather.style.color = "white";
    container.appendChild(weather);
  } catch (error) {
    alert("oops!!!");
  }
}
getweather();

var gethour = addzero(new Date().getHours());
var getmin = addzero(new Date().getMinutes());
// var getsec = addzero(new Date().getSeconds());
var currtime = `${gethour}:${getmin}`;

function addzero(num) {
  return num < 10 ? `0${num}` : num;
}
// console.log(currtime);
var gettime = document.createElement("h1");
gettime.style.color = "white";
gettime.innerText = "Time: " + currtime;

container.appendChild(getdate);
container.appendChild(getday);
container.appendChild(gettime);
container.appendChild(greetings);
container.appendChild(sunicon);
document.body.appendChild(container);
