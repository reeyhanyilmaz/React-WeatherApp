import {useEffect} from 'react';
import axios from 'axios';
import { useWeather  } from '../context/WeatherContext';
import WeatherInfo from "./WeatherInfo";

function WeatherCard() {
  // custom hook kullandık. State tanımlarımızı context'e esitledik(useWeather).
  const {weatherData, setWeatherData, city , coord} = useWeather();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() =>{
    const getWeatherData = async () => { await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.latitude}&lon=${coord.longitude}&units=metric&exclude=current,minutely,hourly,alerts&appid=1b8b00609be6199c062ce764970dd564`)      
    .then(( res) => setWeatherData(res.daily))
    .catch((e) => console.log(e))
    };
    getWeatherData();
  }, [city, setWeatherData, coord]);

  return (
   
    // <div className='weather-card-container'>
    //   { weatherData&&
    //     weatherData.map((WeatherInfo, index)=> {
    //       return (<WeatherInfo key={index} weather={WeatherInfo} />
         
    //       )
          
    //     })
    //     <p>merhaba</p>
    //   }      
    // </div>
  
    // <div className="weather-card-container">
    //   {
    //   weatherData && weatherData.map((oneDay, i) => {
    //       return (
    //         <div className="weather-item" key={i}>
              
    //           <p className="day">{days[new Date(oneDay.dt * 1000).getDay()]}</p>
    //           <div>
    //             <img
    //               className="myWeatherImg"
    //               src={`https://openweathermap.org/img/wn/${oneDay.weather[0].icon}@2x.png`}
    //               alt="weather icon"
    //               width="100" height="100"
                  
    //             />
    //           </div>
    //           <p className="description">
    //             <span>{Math.round(oneDay.temp.min)}&#176;</span>
    //             <span>{Math.round(oneDay.temp.max)}&#176;</span>
    //           </p>
    //         </div>
    //       );
    //     })
    //     }
    // </div>
   

   
    <div className="weather-card-container">
      {
       weatherData ? weatherData.map((WeatherInfo,index)=>{
           <WeatherInfo key={index} weatherData={WeatherInfo} />
        })
        : "Loading" }
    </div>
      

  )
}

export default WeatherCard;