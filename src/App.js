import './App.css';
import Dropdown from './components/Dropdown';
import WeatherCard from './components/WeatherCard';
import { WeatherProvider } from './context/WeatherContext';
function App() { 
  return (       
      <WeatherProvider> {/* context api'dan geliyor */}
        <div className="app">
        {/* provide ile child'lara dataları gönderebilriz, erisim sağlayabilir yani. Buradaki data ne value degerimiz  */}
        <h1>Weather App</h1>
      <Dropdown />
      <WeatherCard />
      </div>
      </WeatherProvider>   
  );
}

export default App;
