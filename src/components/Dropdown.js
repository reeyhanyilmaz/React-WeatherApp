import { useWeather  } from '../context/WeatherContext';

//form yapısında Formik kullandım.
import {useFormik} from "formik"

function Dropdown() {
  // custom hook kullandık. State tanımlarımızı context'e esitledik(useWeather).
  const {weatherData, setWeatherData, city, setCity , citiesJSON} = useWeather();
  const { handleChange, values} = useFormik({
    initialValues: {
      city: "İstanbul",
      latitude: "41.0053",
      longitude: "28.9770",
    },
  });


  return (
    //item JSON verimizdeki her bir data. item name şehir isimlerimiz.
    <form>
      <select name="city" id ="city" onChange={handleChange} value={values.city} data-lat={values.latitude}
          data-long={values.longitude}>        
        {citiesJSON.map((item) => (
          <option key={item.id} value={item.name} data-lat={item.latitude}
          data-long={item.longitude}>
            {item.name}
          </option>
        ))}
      </select>
      <h1>Hava Durumu</h1>
      <h3>{new Date().toLocaleDateString("tr")}</h3>
    </form>
  )
}

export default Dropdown;