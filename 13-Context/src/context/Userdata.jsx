import React, { createContext } from 'react'
export const UserDataContext = createContext()
const Userdata = (props) => {
    let name = "ayush";
  return (
    <>
    <UserDataContext.Provider value={name}>{props.children}</UserDataContext.Provider>
    </>
  )
}

export default Userdata
