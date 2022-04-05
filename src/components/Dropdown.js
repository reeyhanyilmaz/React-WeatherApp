import { useWeather  } from '../context/WeatherContext';

//form yapısında Formik kullandım.
import {useFormik} from "formik"
import Header from './Header';

function Dropdown() {
  // custom hook kullandık. State tanımlarımızı context'e esitledik(useWeather).
  const {citiesJSON , city, setCity} = useWeather();
  const {values} = useFormik({
    initialValues: {
      "name": "",
    },
  });

  //dropdown'dan her sehir ismi degistiginde o verilerin gelmesi icin for döngüsü. 
  const changeCityName = (e) =>{
    for (let i = 0; i < citiesJSON.length; i++) {
        if(e.target.value === citiesJSON[i].name){
            setCity(citiesJSON[i]);
        }
    }
} 

  return (
    //item JSON verimizdeki her bir data. item name şehir isimlerimiz.
    <form>
      <select name="name" id ="name" onChange={changeCityName} value={city.name} >    
      {     
        citiesJSON.map((item, i) => {
        return (
            <option key={i} value={item.name}>
              {item.name}
            </option>
              )
        })
      }        
      </select>

      {/* <h1>Weather App </h1>      */}
      <Header />
      <h3>{new Date().toLocaleDateString("tr")}</h3>
    </form>   
  )
}

export default Dropdown;