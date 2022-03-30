import {createContext} from 'react'
const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    return <WeatherContext.Provider value="dark"> {children} </WeatherContext.Provider>

};

export default WeatherContext;