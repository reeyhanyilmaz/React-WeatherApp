import './App.css';
import Dropdown from './components/Dropdown';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  
  return (
    <div className="App">
        {/* context api */}
      <WeatherProvider>
        {/* provide ile child'lara dataları gönderebilriz, erisim sağlayabilir yani. Buradaki data ne value degerimiz  */}
      <Dropdown />
      </WeatherProvider>
    </div>
  );
}

export default App;
