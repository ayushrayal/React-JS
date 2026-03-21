import React from 'react'

const App = () => {
  const user = {
    name: "Ayush Rayal",
    age: 22,
    city: "Dehradun"
  }
  localStorage.setItem("user", JSON.stringify(user));
  const userData = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <h1>Hello, {userData.name}!</h1>
      <p>Age: {userData.age}</p>
      <p>City: {userData.city}</p>
    </div>
  )
}

export default App
