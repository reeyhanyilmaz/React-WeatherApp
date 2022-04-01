import { useWeather  } from '../context/WeatherContext';
import citiesJSON from "../data/cities.json";
import {useFormik} from "formik"
import React, {useState} from "react";

function Dropdown() {

  // custom hook
  const {SetWeather} = useWeather();

  //JSON city data icin state olusturdum.
  const [cityJSON] = useState(citiesJSON);

  const { handleChange, handleSubmit, values} = useFormik({
    initialValues: {
      city: "İstanbul",
    },
    onSubmit : (values) => {
      console.log(values);
    },
  });

  return (
    //item JSON verimizdeki her bir data. item name şehir isimlerimiz.
    <form onSubmit={handleSubmit}>
      <select name="city" onChange={handleChange} value={values.city}>
        
        {cityJSON.map((item) => (
          <option key={item.id} value={item.name} >
            {item.name}
          </option>
        ))}

      </select>
    </form>
  )
}

export default Dropdown;