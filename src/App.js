import './App.css';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import { WeatherProvider } from './context/WeatherContext';
function App() { 
  return (       
      <WeatherProvider> {/* context api'dan geliyor */}
        <div className="app">
        {/* provide ile child'lara dataları gönderebilriz, erisim sağlayabilir yani. Buradaki data ne value degerimiz  */}
      <Header />
      <Dropdown />
      <WeatherCard />
      </div>
      </WeatherProvider>   
  );
}

export default App;
