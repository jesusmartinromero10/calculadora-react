
import './App.css';
import Botton from './components/botton';
import logoFreecodecamp from './images/freecodecamp-logo.png';
import Screen from './components/screen';
import BottonClear from './components/botton-clear';
import { useState } from 'react'
import { evaluate } from 'mathjs'


function App() {
  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val)
  };

  const calculateResult = () => {
    setInput(evaluate(input))
  }


  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img className='freecodecamp-logo' src= {logoFreecodecamp} alt='Logo-freecodecamp' />

      </div>
      <div className='calculater-container'>
        
        <Screen input = {input}/>
        
        <div className='fila'>
          <Botton handClic = {addInput}>1</Botton>
          <Botton handClic = {addInput}>2</Botton>
          <Botton handClic = {addInput}>3</Botton>
          <Botton handClic = {addInput}>+</Botton>
        </div>
        <div className='fila'>
          <Botton handClic = {addInput}>4</Botton>
          <Botton handClic = {addInput}>5</Botton>
          <Botton handClic = {addInput}>6</Botton>
          <Botton handClic = {addInput}>-</Botton>
        </div>
        <div className='fila'>
          <Botton handClic = {addInput}>7</Botton>
          <Botton handClic = {addInput}>8</Botton>
          <Botton handClic = {addInput}>9</Botton>
          <Botton handClic = {addInput}>*</Botton>
        </div>
        <div className='fila'>
          <Botton handClic = {calculateResult}>=</Botton>
          <Botton handClic = {addInput}>0</Botton>
          <Botton handClic = {addInput}>.</Botton>
          <Botton handClic = {addInput}>/</Botton>
        </div>
        <div className='fila'>
          <BottonClear handClear = {() => setInput('')}>Clear</BottonClear>
        </div>

      </div>

    </div>
  );
}

export default App;
