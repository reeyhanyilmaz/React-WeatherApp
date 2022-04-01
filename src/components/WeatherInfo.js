import React from 'react';
import { useWeather  } from '../context/WeatherContext'; 

function WeatherInfo({weather, date}) {
  return (
    <div className="weather-item">
    <p className="day">
        {
        new Date(date*1000).toLocaleDateString("tr",{weekday:"long"})
        }
        </p> 
    {/* <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` } alt="weather-icon" width="100" height="100" /> */}
    <p className="description">{weather.weather[0].description}</p>
    <p className="temp-max">{weather.temp.max} °C</p>
    <p className="temp-min">{weather.temp.min} °C</p>               
  </div> 
  )
}

export default WeatherInfo;
