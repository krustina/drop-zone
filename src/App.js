import './App.css';
import Countdown from './Countdown.js';

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <h4>Drop</h4>
          <h4>Zone</h4>
        </div>
      </header>
      <main>
        <div className="drop-info-container">
          <h1>Leezy Boost 103</h1>
          <Countdown />
          <p>Until Drop</p>
        </div>
      </main>

    </div>
  );
}

export default App;
