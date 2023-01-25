import logo from './logo.svg';
import tree from './tree-g5c1c087bb_1280.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sziasztok internet Nepe :D LOL
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <img src={tree} className="tree" alt="tree" />
    </div>
  );
}

export default App;
