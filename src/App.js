import './App.css';
import Dropdown from './components/Dropdown';
import WeatherCard from './components/WeatherCard';
import WeatherInfo from './components/WeatherInfo';
import { WeatherProvider } from './context/WeatherContext';
  ""
function App() { 
  return (       
      <WeatherProvider> {/* context api'dan geliyor */}
        <div className="app">
        {/* provide ile child'lara dataları gönderebilriz, erisim sağlayabilir yani. Buradaki data ne value degerimiz  */}
      <Dropdown />
      <WeatherCard />
      </div>
      </WeatherProvider>   
  );
}

export default App;
