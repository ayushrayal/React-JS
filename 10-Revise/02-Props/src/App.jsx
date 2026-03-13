import React from 'react'
import './App.css'
import Card from './components/Card'

const App = () => {
  const people = [
  {
    img: "https://imgs.search.brave.com/4jtjSXLdPAkhoOg_fQL3pCdZDkBp3qIzM0A7oSX6ERY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjI0/MTkyNDQzMi9waG90/by9wZXJ0aC1hdXN0/cmFsaWEtdmlyYXQt/a29obGktb2YtaW5k/aWEtbG9va3Mtb24t/YmVmb3JlLWdhbWUt/b25lLW9mLXRoZS1v/bmUtZGF5LWludGVy/bmF0aW9uYWwuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUdY/ZlpzR1ZnUzIzU3g2/dzQ1Q29WTTEtb0pR/Rzl3RlZ3ZFJ5YjhT/dkZmT1k9",
    name: "Virat Kohli",
    description: "One of the greatest modern-day cricketers and former captain of the Indian cricket team."
  },
  {
    img: "https://imgs.search.brave.com/F0QFX8YTCSL4HLR-mARXSNYNjKmz39UKsVEKcq7GlVY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZi1z/dC5zYy1jZG4ubmV0/L2Fwcy9ib2x0X3dl/Yi9hSFIwY0hNNkx5/OWliMngwTFdkalpH/NHVjMk10WTJSdUxt/NWxkQzlpWWk5M1Js/bEJUVkZ6WmpOck1U/SjVjbkpRTjFCUE9I/VXVNalUyTGtsU1ds/aFRUMWsvYlc4OVIy/dFpZVU5VU1VKV1ZX/ZERWVU0xWjBGV1Ey/ZEJWbTlSVWtkYVRW/bFlTbTVhVmxKdlpG/Y3hhV0p0Um5CaVMw/bENSVUZwUVVGcFNV/eEZaMEZ4UWpCc1Ux/ZHNhRlJVTVcxcFFW/SkJTVzFuYjJsRGVF/bEJTMmRrU2xWc2NG/bFZNRGxhSm5WalBU/UTIuX1JTMjcwLDM4/MV9GTXdlYnA",
    name: "Neha Jethwani",
    description: "Popular social media creator known for lifestyle and fashion content."
  },
  {
    img: "https://imgs.search.brave.com/fK_WZtEr8AAUhIUA_zT6v9ynmDVQUEj-OY6hdPHkBbU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE2/OTU4NTc0My9waG90/by9maWxtLWFjdHJl/c3MtYW51c2hrYS1z/aGFybWEtaXMtc3Bv/dHRlZC1hdC1hbi1l/dmVudC1pbi1tdW1i/YWktaW5kaWEtb24t/c2VwdGVtYmVyLTQt/MjAyNC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9Smg4empf/RmtFQTRwajg2X280/R3AxQnFDd09ObG9x/d3kwUXlJazRWSWZ2/cz0",
    name: "Anushka Sharma",
    description: "Bollywood actress and film producer known for movies like PK and Sultan."
  },
  {
    img: "https://imgs.search.brave.com/k2f-htbZadL5Fx8v_S9TJf_nPTBUzyEhDAZeDM22S9E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE2/NzI2NDM4Ni9waG90/by9wcmltZS1taW5p/c3Rlci1vZi1pbmRp/YS1uYXJlbmRyYS1t/b2RpLXNlZW4tZHVy/aW5nLXRoZS1vZmZp/Y2lhbC1tZWV0aW5n/LWluLWt5aXYtdWty/YWluaWFuLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz01dHJq/aU1aV0xNNmY2OWlw/X0hLSlBYSEJNYlpY/YkRucWhDb0poM0l1/cjlRPQ",
    name: "Narendra Modi",
    description: "Prime Minister of India and a prominent political leader."
  },
  {
    img: "https://imgs.search.brave.com/xv4HSe6Bo5WvDXjJzmrlWFtevat1v5SkKbCWO8eaczg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iYXRt/YW4tZ29sZC1jb2Fz/dC1hdXMtbm92LW1v/dmllLXdvcmxkLWdv/bGQtY29hc3QtcXVl/ZW5zbGFuZC1hdXN0/cmFsaWEtbWF5LXBs/YWNlZC1zZWNvbmQt/aWduLXMtdG9wLWNv/bWljLWJvb2stNDc0/MTUwNTEuanBn",
    name: "Batman",
    description: "Fictional DC Comics superhero who protects Gotham City."
  }
];
  return (
    <div className='main'>
      {people.map((person, index)=>{
        return <Card key={index} img={person.img} name={person.name} description={person.description}/>
      })}
    </div>
  )
}

export default App
