import './App.css';
import { useRef,useEffect,useState } from 'react';

function App() {
  
  const [name,setName]=useState('')

  const submitForm=(e)=>{
    e.preventDefault()
    console.log(name);
    setName("")
  }
  const inputRef=useRef(null)

  useEffect(()=>{
    inputRef.current.focus()
  })
  

  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <input onChange={(e)=>{
          if(e.target.value.trim() === ""){
            return;
          }
          setName(e.target.value)}} value={name} ref={inputRef} type='text'/> <br />
        <button >Submit</button>
      </form>
    </div>
  );
}

export default App;
