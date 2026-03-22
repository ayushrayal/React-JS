import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
  const [pictures, setPictures] = useState([])

  const GetData = async ()=>{
    let response = await axios.get("https://picsum.photos/v2/list?page=2&limit=10");
    console.log(response.data);
    setPictures(response.data)
  }
  return (
    <div className='h-screen bg-mauve-950 text-white'>
      <button className='p-4 text-white bg-green-950 m-5 rounded-2xl active:scale-90 transition-all' onClick={GetData}>Get Data</button>

      <div className='flex flex-wrap overflow-auto'>
        {pictures.length > 0 ? (
          pictures.map((elem) => {
            return <div key={elem.id} className='h-40 w-40 bg-red-950 m-5 rounded-lg overflow-hidden'>
              <img src={elem.url} alt="gallery item" className='w-full h-full object-cover' />
            </div>
          })
        ) : (
          <p className='p-4'>No User Available</p>
        )}
      </div>
    </div>
  )
}

export default App
