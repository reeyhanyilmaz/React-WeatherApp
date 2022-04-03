import {createContext, useContext, useState} from 'react'
import citiesJSON from "../data/cities.json";
// JSON import ettik yani Türkiye illeri bilgileri olan dosyamızı.

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const [weatherData, setWeatherData] = useState([]);
    const [city, setCity] = useState(citiesJSON);
    const values = {
        weatherData,
        setWeatherData,
        city,
        setCity,
        citiesJSON,
    };
    
    return ( 
    <WeatherContext.Provider value={values}> {children} </WeatherContext.Provider>
    )
};

//custom hook kullanıyoruz burada. Tekrar tekrar aynı seyleri componentlere yazmamak icin.
export const useWeather = () => useContext(WeatherContext);