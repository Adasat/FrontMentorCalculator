import "./Buttons.css";
function Buttons({handleCalculate}) {

    const handleClick = (event) => {
    const value = event.target.value;
    handleCalculate(value);
  };
  return (
    <>
      <div className="containerBtn">
        <button value='7' onClick={handleClick} className="btn">7</button>
        <button value='8' onClick={handleClick} className="btn">8</button>
        <button value='9' onClick={handleClick} className="btn">9</button>
        <button value='DEL'onClick={handleClick} className="btn btnViolet">DEL</button>
        <button value='4'onClick={handleClick} className="btn">4</button>
        <button value='5' onClick={handleClick} className="btn">5</button>
        <button value='6' onClick={handleClick} className="btn">6</button>
        <button value='+' onClick={handleClick} className="btn">+</button>
        <button value='1' onClick={handleClick} className="btn">1</button>
        <button value='2' onClick={handleClick} className="btn">2</button>
        <button value='3' onClick={handleClick} className="btn">3</button>
        <button value='-' onClick={handleClick} className="btn">-</button>
        <button value='.' onClick= {handleClick} className="btn">.</button>
        <button value='0' onClick={handleClick} className="btn">0</button>
        <button value='/' onClick={handleClick} className="btn">/</button>
        <button value='x' onClick={handleClick} className="btn">x</button>
        <button value='RESET' onClick={handleClick} className="btn reset">RESET</button>
        <button value='=' onClick={handleClick} className="btn calculate">=</button>

      </div>
    </>
  );
}

export default Buttons;
