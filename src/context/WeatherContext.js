import {createContext, useContext, useState} from 'react'
const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const [weather, setWeather] = useState();
    const values = {
        weather,
        setWeather,
    }
    return <WeatherContext.Provider value={values}> {children} </WeatherContext.Provider>

};

//custom hook kullanıyoruz burada. Tekrar tekrar aynı seyleri componnetlere yazmamak icin.
export const useWeather = () => useContext(WeatherContext);