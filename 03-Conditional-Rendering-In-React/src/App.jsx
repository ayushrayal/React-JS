import React from 'react'
import LoginPage from './components/DashBoard.jsx'
const App = () => {
  const login = true;
  return (
    <div className='h-screen w-full dark:bg-emerald-950 flex items-center justify-center flex-col gap-6'>
      <h1 className="text-8xl font-bold text-emerald-300">Conditional Rendering in React</h1>
      <h6 className="text-2xl font-semibold text-emerald-200">Learn how to conditionally render elements in React</h6>
      {login ? <LoginPage user="Ayush Rayal" /> : <h2 className='text-5xl text-emerald-300'>Please log in to continue</h2>}
    </div>
  )
}

export default App
