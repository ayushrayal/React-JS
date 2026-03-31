import React, { createContext } from 'react'
import { useState } from 'react'
export const UserDataContext = createContext()
const Userdata = (props) => {
    const [name, setName] = useState('Geeta Joshi')
  return (
    <>
    <UserDataContext.Provider value={[name,setName]}>{props.children}</UserDataContext.Provider>
    </>
  )
}

export default Userdata
