
import { useState } from "react";
import "./App.css";
import Attribution from "./components/Attribution/Attribution";
import Buttons from "./components/Attribution/Buttons/Buttons";

function App() {
  const [result, setResult] = useState(0)
  const [calculateResult, setCalculateResult] = useState([])

  const handleCalculate = (value) => {
    switch(value){
      case '1':
        
    }
    

  }

  return (


    <>
      <div className="calculator">
        calc
        <div className="blockResult">
          <p className="result">{result}</p>
        </div>
        <Buttons handleCalculate={handleCalculate}/>

      

      </div>

      <Attribution/>
      
    </>
  );
}

export default App;
