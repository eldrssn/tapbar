import './App.css';
import Tapbar from './components/tapbar';

function App() {
  return (
    <main className="main">
      <div className="images">
        <img src="/image.png" alt="Background" />
        <img src="/image.png" alt="Background" />
        <img src="/image.png" alt="Background" />
        <img src="/image.png" alt="Background" />
        <img src="/image.png" alt="Background" />
        <img src="/image.png" alt="Background" />
      </div>

      <Tapbar />
    </main>
  );
}

export default App;
