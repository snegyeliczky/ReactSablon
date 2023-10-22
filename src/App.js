import './App.css';
import {useState} from "react";
import Spline from "@splinetool/react-spline";

function App() {
    const [answer, setAnswer] = useState('')
  return (
    <div className="App">
      <div className="App-header">
          <div className="AnimaRoom" >
          <Spline scene="https://prod.spline.design/Ko3cdMNIHaFiLCEc/scene.splinecode" />
          </div>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
              Learn React
          </a>
          <a
              className="spline-link"
              href="https://spline.design/"
              target="_blank"
              rel="noopener noreferrer"
          >
              Learn Spline
          </a>
          <a
              href={`/go`}
          >
              More spline ->
          </a>

          <textarea onChange={(ans) => {
              console.log(ans)
              setAnswer(ans.target.value)
          }}/>
       {answer}
          <a
              href={`/go`}
          >
              More spline ->
          </a>
      </div>
    </div>
  );
}

export default App;
