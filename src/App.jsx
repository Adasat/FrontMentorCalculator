import { useState } from "react";
import "./App.css";
import Attribution from "./components/Attribution/Attribution";
import Buttons from "./components/Attribution/Buttons/Buttons";

function App() {
  const [result, setResult] = useState(null);
  const [showNumber, setShowNumber] = useState("");
  const [inputHistory, setInputHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState(0);
  

  const [theme, setTheme] = useState("theme 1"); // Inicialmente configurado en el tema 1

 const handleThemeChange = () => {
   let newTheme;
   if (theme === "theme 1") {
     newTheme = "theme 2";
     document.documentElement.setAttribute("data-theme", "theme 2");
   } else if (theme === "theme 2") {
     newTheme = "theme 3";
     document.documentElement.setAttribute("data-theme", "theme 3");
   } else {
     newTheme = "theme 1";
     document.documentElement.setAttribute("data-theme", "theme 1");
   }
   setTheme(newTheme);
 };
 
 

 const handleCalculate = (value) => {
  if (value === "=") {
    try {
      const inputToEvaluate = inputHistory.join("");
      const calculatedResult = eval(inputToEvaluate);
      setResult(calculatedResult);
      setCurrentInput(calculatedResult.toString());
      setInputHistory([calculatedResult.toString()]);
    } catch (error) {
      setResult("Error");
    }
  } else if (value === "DEL") {
    const newInputHistory = [...inputHistory];
    newInputHistory.pop();
    setInputHistory(newInputHistory);
    setCurrentInput(currentInput.slice(0, -1));
  } else if (value === "RESET") {
    setInputHistory([]);
    setCurrentInput("");
    setResult(null);
  } else {
    setInputHistory([...inputHistory, value]);
    setCurrentInput(currentInput + value);
  }
};







  /* const handleCalculate = (value) => {
    if (value === "=") {
      try {
        const calculatedResult = eval(showNumber);
        setResult(calculatedResult);
        
        setShowNumber(calculatedResult.toString());
      } catch (error) {
        setResult("Error");
        setShowNumber("");
      }
    } else if (value === "DEL") {
      setShowNumber(showNumber.slice(0, -1));
    } else if (value === "RESET") {
      setShowNumber("");
      setResult(null);
    } else {
      setShowNumber(showNumber + value);
      
    }
  }; */

  return (
    <>
      <div className="calculator">
        <div className="header">
          <span className="title">calc</span>

          <div className="theme">
            <span className="themeTitle">THEME</span>
            <div className="toogle">
              <span className="numTheme">1 2 3</span>
              <input
                type="checkbox"
                id="toggle"
                className="offscreen"
                onChange={handleThemeChange}
                checked={theme === "theme 2"}
              />
              <label htmlFor="toggle" className="switch" />
            </div>
          </div>
        </div>

        <div className="blockResult">
          <p className="result">{(result !== null) ? result : currentInput}</p>
        </div>
        <Buttons handleCalculate={handleCalculate} />
      </div>

      <Attribution />
    </>
  );
}

export default App;
