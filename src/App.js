import tree from './tree-g5c1c087bb_1280.jpg'
import './App.css';
import {useState} from "react";

function App() {
    const [answer, setAnswer] = useState('')
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Sziasztok internet Nepe :D
            Miujsag???
        </p>
          <p>{answer}</p>
          <textarea onChange={(ans) => {
              console.log(ans)

          }}/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <p>
            <a
                href={`/go`}
            >
                click to go for an other page
            </a>
        </p>
      <img src={tree} className="tree" alt="tree" />
    </div>
  );
}

export default App;
