import { useWeather  } from '../context/WeatherContext';

//form yapısında Formik kullandım.
// import {useFormik} from "formik"

function Dropdown() {
  // custom hook kullandık. State tanımlarımızı context'e esitledik(useWeather).
  const {citiesJSON , city, setCity ,day} = useWeather();
  // const {values} = useFormik({
  //   initialValues: {
  //     "name": "",
  //   },
  // });

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

        <h3>{new Date().getHours()}:{new Date().getMinutes()}
        <span> </span>
        {day}
        <span> </span>
        {new Date().toLocaleDateString("tr")}</h3>
       
    </form>   
  )
}

export default Dropdown;