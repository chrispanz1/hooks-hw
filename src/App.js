import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
function App() {
  const [count,setCount]=useState(0)
  const[evenCount,setEvenCount]=useState(0)
  //-----------declare a new use state--//
  const[name,setName]=useState('pete');
  
  const addone=()=>{
    setCount(count+1)
    if(count%2===0)
    setEvenCount(evenCount+1)

  }
  const minusOne=()=>{
    setCount(count-1)
  }
  useEffect(()=>{
    alert("your boss changed");
    
  },[name]);
  return (
    <div className="app">
      <h1>counter</h1>
      <h3> {count}</h3>
      <button onClick={()=>addone()}> addOne if you like retail!</button>
      <button onClick={()=>minusOne()}> subtract one if you dislike retail!</button>
      <button onClick={()=>setName('george')}>change boss</button>
      <p>{name}</p>
      <h3>Even Count:{evenCount}</h3>
    </div>
  );
}

export default App;
