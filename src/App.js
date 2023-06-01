import {useState, useRef } from 'react';
import './app.css';

function App() {
   const [input, state] = useState('');
   const [second,setSecond] = useState();
  
   const render = useRef(0);
   const timeRef = useRef();

   const handleChange = (event) => { 
    state(event.target.value);
    render.current++;
  }; 
  

   const startTimer = () => {
    timeRef.current = setInterval(() => {
        render.current++;
        setSecond(prev=>prev+1);
  }, 1000);
  const stopTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = 0;
  };
  const resetTimer =() => {
    stopTimer();
       if(second) {render.current++;
        setSecond(0);}
      };
  return (
      <div className="App" >
        <input style={{width: '30vw',height:'10vh',textAlign: 'center',background:'#F16A8A', color:'yellow', marginLeft:'32vw', marginTop:'35vh', fontSize:'2vw' }}
        type="text"
        value ={input}
        placeholder="what's the time"
         onChange={handleChange}/>
         <p style={{fontSize:'2vw', textAlign:'center' }}>Number of key pressed: {render.current}</p>
         <br></br>
         <button style={{width: '30vw',height:'10vh',textAlign: 'center',background:'yellow', color:'black', marginLeft:'32vw', marginTop:'35vh',fontSize:'2vw', cursor:'pointer'}} onClick={startTimer}>Start</button>
         <button onClick={stopTimer}>Stop</button>
         <button  onClick={resetTimer}>Reset</button>
        <br></br>
        
      </div>
  );
}

export default App;
