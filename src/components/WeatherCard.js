import {useEffect} from 'react';
import axios from 'axios';
import { useWeather  } from '../context/WeatherContext';
import WeatherInfo from "./WeatherInfo";

function WeatherCard() {
  // custom hook kullandık. State tanımlarımızı context'e esitledik(useWeather).
  const {weatherData, setWeatherData, city} = useWeather();
  // const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  useEffect(() =>{
    const getWeatherData = async () => { await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&units=metric&lang=tr&exclude=daily,current,minutely,hourly,alerts&appid=1b8b00609be6199c062ce764970dd564`)      
    .then(( res) => setWeatherData(res.daily))
    .catch((e) => console.log(e))
    };
    getWeatherData();
  }, [city, setWeatherData]);


  return (
    weatherData !=="" ?
    <div className='weather-card-container'>
      {
        weatherData.map((weatherInfo, index)=> {
          return <WeatherInfo key={index} weather={weatherInfo} />
        })
      }      
    </div>
     :"Loading..."    
  )
}

export default WeatherCard;