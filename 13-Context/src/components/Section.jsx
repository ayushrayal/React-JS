import React, { useContext } from 'react'
import { UserDataContext } from '../context/Userdata'

const Section = () => {
    const [ name, setName] = useContext(UserDataContext)
  return (
    <div className='section'>
      <button onClick={()=>{
        if(name === "Geeta Joshi"){
          setName("Ayush Rayal")
        }else if(name === "Ayush Rayal"){
          setName("Geeta Joshi")
        }
      }}>Change Name</button>
    </div>
  )
}

export default Section
