import React, { useState } from 'react'

const App = () => {
  const[name, setname] = useState("");
  const Formhandle = (e)=>{
    e.preventDefault();
    console.log(`Form submitted with name: ${name}`);
    setname("");
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        Formhandle(e);
      }}>
        <input type="text" placeholder='Enter your name'
        value={name}
        onChange={(e)=>{
          setname(e.target.value);
          console.log(e.target.value);
        }}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App
