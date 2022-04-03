import './App.css';
import Dropdown from './components/Dropdown';
import WeatherCard from './components/WeatherCard';
import { WeatherProvider } from './context/WeatherContext';

function App() { 
  return (       
      <WeatherProvider> {/* context api'dan geliyor */}
        <div className="App">
        {/* provide ile child'lara dataları gönderebilriz, erisim sağlayabilir yani. Buradaki data ne value degerimiz  */}
      <Dropdown />
      <WeatherCard />
      </div>
      </WeatherProvider>   
  );
}

export default App;
