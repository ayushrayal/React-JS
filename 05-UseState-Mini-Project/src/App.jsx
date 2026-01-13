import React, { useState } from 'react'
import Card from './components/Card'

const images = Object.values(
  import.meta.glob('./assets/*.jpg', {
    eager: true,
    import: 'default',
  })
)

const App = () => {
  console.log(images);
  
  const [imageSrc, setImageSrc] = useState(images[0])

  function changeImg() {
    const idx = Math.floor(Math.random() * images.length)
    setImageSrc(images[idx])
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-950 flex-col gap-4">
      <Card imageSrc={imageSrc} />
      <button
        onClick={changeImg}
        className="bg-slate-800 text-white font-bold text-2xl px-4 py-2 rounded-md active:scale-95"
      >
        Change it
      </button>
    </div>
  )
}

export default App
