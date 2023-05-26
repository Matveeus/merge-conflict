import logo from './logo.svg';
import './App.css';

function App() {
  const text = () => {return false}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onclick="text()">ASDGHJKLF</button>

        <p>wake up, NEO !!!</p>

        <a>AM I CONFLICTING ????????????</a>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
