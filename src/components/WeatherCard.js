import {useEffect, useState} from 'react';
import axios from 'axios';
// import {useCity} from "../context/WeatherContext";
// import Dropdown from './Dropdown';
import { useWeather  } from '../context/WeatherContext';
import citiesJSON from "../data/cities.json";
import WeatherInfo from "./WeatherInfo";

function WeatherCard() {
  const [weather, setWeather] = useState("");
  const [city] = useState(citiesJSON);
  const {SetWeather} = useWeather();
  // const [isLoading, setIsLoading] = useState(true);

    useEffect(() => { 
      const getWeatherData = async () => {
         const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8641075dda9ea5d5c961c48c00929bec`)
         .then(( res) => setWeather(res.data))
         .catch((err) => console.log(err))
        //  .finally(() => setIsLoading(false));
         getWeatherData(data);
      }     
    }, [city])

  return (
    weather !== "" ? 
    <div className='weather-card-container'>
      {
        weather.map((WeatherInfo, index)=> {
          return <WeatherInfo key={index} weather={WeatherInfo} />
        })
      }      
    </div>
    : "Loading..."
    // {isLoading && <div> Loading... </div>}  
  )
}

export default WeatherCard;