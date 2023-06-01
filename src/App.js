import {useState, useRef } from 'react';


function App() {
   const [input, state] = useState('');
   const [second,setSecond] = useState(0);
  
   const render = useRef(0);
   const timeRef = useRef();
   const inputRef = useRef();
   const handleChange = (event) => { 
    state(event.target.value);
    render.current++;
  }; 
  

   const startTimer = () => {
    timeRef.current = setInterval(() => {
        render.current++;
        setSecond(prev=>prev+1);
  }, 1000);
  inputRef.current.focus();
}; 
  const stopTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = 0;
    inputRef.current.focus();
  };
  const resetTimer =() => {
    stopTimer();
       if(second) {
        render.current++;
        setSecond(0);
      }
      inputRef.current.focus();
      };
  return (
      <div className="App" >
        <input 
         ref={inputRef}
        type="text"
        value ={input}
        placeholder="what's the time"
         onChange={handleChange}/>
         <p style={{fontSize:'2vw', textAlign:'center' }}>Number of key pressed: {render.current}</p>
         <br></br>
         <div className='timebuttons'>
         <button onClick={startTimer}>Start</button>
         <button onClick={stopTimer}>Stop</button>
         <button onClick={resetTimer}>Reset</button>
         </div>
        
        <br></br>
        <p>Seconds: {second}</p>
        <p>Input: {input}</p>
        
      </div>
  );
}

export default App;
