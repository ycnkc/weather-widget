const lat = 41.0151; 
const lon = 28.9795;

const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const weather = data.current_weather;

    const desc = getWeatherDescription(weather.weathercode);
    const temp = Math.round(weather.temperature) + "°C";
    const icon = getWeatherAsset(weather.weathercode, isNight);

    document.getElementById("desc").textContent = desc;
    document.getElementById("temp").textContent = temp;
    document.getElementById("weather-icon").src = icon;
  })
  .catch(err => console.error("Error:", err));

function getWeatherDescription(code) {
  if (isNight && code === 0) {
    return "It's clear night!";
  } else if (isNight && (code === 1 || code === 2)) {
    return "It's a nice night!";
  } else if (isNight && code === 3)  {
    return "It's a cloudy night!";
  } else if (isNight && (code === 45 || code === 48)) {
    return "It's a foggy night!";
  } else if (isNight && (code === 51 || code === 61)) {
    return "It's a rainy night!";
  } else if (isNight && code === 71) {
    return "It's a snowy night!";
  } else if (isNight && code === 95) {
    return "There's a thunderstorm tonight!";
  }
  
    const descriptions = {
      0: "It's sunny today!",
      1: "It's mostly sunny today!",
      2: "It's partly cloudy today!",
      3: "It's cloudy today!",
    45: "It's foggy today!",
    48: "It's foggy today!",
    51: "It's drizzling today!",
    61: "It's raining today!",
    71: "It's snowing today!",
    95: "There's a thunderstorm today!"
  };
  return descriptions[code] || "Weather data unavailable";
}

function getWeatherAsset(code, isNight) {
  if (isNight) {
    return "assets/moon.png";
  }
  const assets = {
    0: "assets/sun.gif",
    1: "assets/sun.gif",
    2: "assets/partly-cloud.gif",
    3: "assets/cloud.gif",
    45: "assets/cloud.gif",
    48: "assets/cloud.gif",
    51: "assets/rain.gif",
    61: "assets/rain.gif",
    71: "assets/snow.gif",
    95: "assets/wind.png"
  };
  return assets[code] || "assets/sun.gif";
}

const hour = new Date().getHours();
const isNight = (hour >= 20 || hour < 6);

if (isNight) {
  document.body.classList.add("night");
} else {
  document.body.classList.add("day");
}


