import {createContext, useContext, useState} from 'react'
import citiesJSON from "../data/cities.json";
// JSON import ettik yani Türkiye illeri bilgileri olan dosyamızı.

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    //data bilgilerini tutacak state. Yani API'dan gelen hava durumu bilgileri.
    const [weatherData, setWeatherData] = useState([]);

    //varsayılan İstanbul göstermesi icin 33.index verdim. index numaraları 0'dan baslar.
    const [city, setCity] = useState(citiesJSON[33]);

    const [isLoading, setIsLoading] = useState(true);
    
    const values = {
        weatherData,
        setWeatherData,
        city,
        setCity,
        citiesJSON,
        isLoading, 
        setIsLoading
    };
    
    return ( 
    <WeatherContext.Provider value={values}> {children} </WeatherContext.Provider>
    )
};

//custom hook kullanıyoruz burada. Tekrar tekrar aynı seyleri componentlere yazmamak icin.
export const useWeather = () => useContext(WeatherContext);