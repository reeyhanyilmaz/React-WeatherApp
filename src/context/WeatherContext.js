import {createContext, useContext, useState} from 'react'
import citiesJSON from "../data/cities.json";
// JSON import ettik yani Türkiye illeri bilgileri olan dosyamızı.

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    //data bilgilerini tutacak state. Yani API'dan gelen hava durumu bilgileri.
    const [weatherData, setWeatherData] = useState([]);

    //varsayılan İstanbul göstermesi icin 33.index verdim. index numaraları 0'dan baslar.
    const [city, setCity] = useState(citiesJSON[33]);

    //cardlar icin kısa gösterim
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    //header time
    const date = new Date();
        let day = date.getDay();
        switch (day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "";
}

    const values = {
        weatherData,
        setWeatherData,
        city,
        setCity,
        citiesJSON,
        days,
        day
    };
    
    return ( 
    <WeatherContext.Provider value={values}> {children} </WeatherContext.Provider>
    )
};

//custom hook kullanıyoruz burada. Tekrar tekrar aynı seyleri componentlere yazmamak icin.
export const useWeather = () => useContext(WeatherContext);