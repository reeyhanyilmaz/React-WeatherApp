import { useWeather  } from '../context/WeatherContext';

//form yapısında Formik kullandım.
import {useFormik} from "formik"

function Dropdown() {
  // custom hook kullandık. State tanımlarımızı context'e esitledik(useWeather).
  const {citiesJSON , city, setCity} = useWeather();
  const { handleChange,  values} = useFormik({
    initialValues: {
      "name": "İstanbul",
      "latitude": "41.0053",
      "longitude": "28.9770",
    },
  });

//   const setMe = (e) =>{
//     for (let i = 0; i < citiesJSON.length; i++) {
//         if(e.target.value === citiesJSON[i].name){
//             setCity(citiesJSON[i]);
//         }
//     }
// } 

  return (
    //item JSON verimizdeki her bir data. item name şehir isimlerimiz.
    <form>
      <select name="name" id ="name" onChange={handleChange} value={values.name} data-lat={values.latitude}
          data-long={values.longitude}>        
        {citiesJSON.map((item, i) => (
          <option key={i} value={item.name} data-lat={item.latitude}
          data-long={item.longitude}>
            {item.name}
          </option>
        ))}
      </select>
      <h1>Weather App </h1>
      <h3>{new Date().toLocaleDateString("tr")}</h3>
    </form>
   
  )
}

export default Dropdown;