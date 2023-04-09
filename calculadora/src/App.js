
import './App.css';
import Botton from './components/botton';
import logoFreecodecamp from './images/freecodecamp-logo.png';
import Screen from './components/screen';
import BottonClear from './components/botton-clear';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img className='freecodecamp-logo' src= {logoFreecodecamp} alt='Logo-freecodecamp' />

      </div>
      <div className='calculater-container'>
        
        <Screen />
        
        <div className='fila'>
          <Botton>1</Botton>
          <Botton>2</Botton>
          <Botton>3</Botton>
          <Botton>+</Botton>
        </div>
        <div className='fila'>
          <Botton>4</Botton>
          <Botton>5</Botton>
          <Botton>6</Botton>
          <Botton>-</Botton>
        </div>
        <div className='fila'>
          <Botton>7</Botton>
          <Botton>8</Botton>
          <Botton>9</Botton>
          <Botton>*</Botton>
        </div>
        <div className='fila'>
          <Botton>=</Botton>
          <Botton>0</Botton>
          <Botton>.</Botton>
          <Botton>/</Botton>
        </div>
        <div className='fila'>
          <BottonClear>Clear</BottonClear>
        </div>

      </div>

    </div>
  );
}

export default App;
