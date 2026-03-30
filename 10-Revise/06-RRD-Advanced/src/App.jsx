import React from 'react'
import {Route , Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homes from './pages/Homes'
import About from './pages/About'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'

const App = () => {
  return (
    <div className='bg-gray-900 h-screen text-white'>
      <Navbar />
      <Footer/>
      <Routes>
        <Route path='/' element={<Homes/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/products' element={<Products/>}>
        <Route path='men' element={<Men/>}/>
        <Route path='women' element={<Women/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
