
import './App.css';
import Container from './components/Container';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        {/* provide ile childd'lara dataları gönderebilriz, erisim sağlayabilir yani. Buradaki data ne value degerimiz  */}
      <Container />
      </WeatherProvider>
    </div>
  );
}

export default App;
