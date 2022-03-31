import { useWeather  } from '../context/WeatherContext';
import citiesJSON from "../data/cities.json";
import {useFormik} from "formik"
import React, {useState} from "react";

function Dropdown() {

  // custom hook
  const {SetWeather} = useWeather();

  //JSON city data icin state olusturdum.
  const [city] = useState(citiesJSON);

  const {values, handleChange, handleSubmit} = useFormik({
    initialvalues: {
      cityName: "İstanbul",
    },
    onSubmit : (values) => {
      console.log(values);
    },
  })

  return (
    //item JSON verimizdeki her bir data. item name şehir isimlerimiz.
    <form onSubmit={handleSubmit}>
      <select name="cityName" onChange={handleChange} >
        
        {city.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}

      </select>
    </form>
  )
}

export default Dropdown;