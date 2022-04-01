import './App.css';
import Dropdown from './components/Dropdown';
import WeatherCard from './components/WeatherCard';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  
  return (
    <div className="App">
        {/* context api */}
      <WeatherProvider>
        {/* provide ile child'lara dataları gönderebilriz, erisim sağlayabilir yani. Buradaki data ne value degerimiz  */}
      <Dropdown />
      <WeatherCard />
      {/* <WeatherInfo /> */}
      </WeatherProvider>
    </div>
  );
}

export default App;
