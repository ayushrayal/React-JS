import React, { useState } from 'react'
import Card from '../Card';

const PageOne = () => {
  const stored = localStorage.getItem('all-users');
  const parsed = stored ? JSON.parse(stored) : [];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profile, setProfile] = useState('');

  const [users, setUsers] = useState(parsed);

  function SubmitEventhandle(e){
    e.preventDefault();
    if(!name.trim() || !email.trim() || !profile.trim()){
      return;
    }
    const updatedUsers = [...users, { name, email, profile }];
    setUsers(updatedUsers);
    localStorage.setItem('all-users', JSON.stringify(updatedUsers));
    setName("");
    setEmail("");
    setProfile("");
  }
  function NameEventhandle(e){
    setName(e.target.value);
  }
  function EmailEventhandle(e){
    setEmail(e.target.value);
  }
  function ProfileEventhandle(e){
    setProfile(e.target.value);
  }
  return (
    <div className='w-full h-screen p-10 bg-gradient-to-r from-slate-800 to-slate-900 overflow-y-scroll ' >
      <form onSubmit={(e)=>{
        SubmitEventhandle(e)
      }} className='flex flex-col gap-4 items-center w-fit mx-auto mt-20 p-3 rounded mb-10 text-white' >
        <input onChange={(dets)=>{
            NameEventhandle(dets)
        }} value={name} className=' border-2 p-2 rounded w-150' type="text" placeholder='Enter your Name' />
        <input onChange={(dets)=>{
            EmailEventhandle(dets)
        }} value={email} className=' border-2 p-2 rounded w-150' type="email" placeholder='Enter your Email' />
        <input onChange={(dets)=>{
            ProfileEventhandle(dets)
        }} value={profile} className=' border-2 p-2 rounded w-150' type="text" placeholder='Enter your Profile' />
        <button disabled={!name.trim() || !email.trim() || !profile.trim()} className={`bg-gradient-to-r from-slate-800 to-slate-900 text-white font-bold py-2 px-4 rounded w-50 active:scale-90 transition-all ${(!name.trim() || !email.trim() || !profile.trim()) ? 'opacity-50 cursor-not-allowed' : ''}`} type="submit">Submit</button>
      </form>
      <div className='flex flex-wrap gap-10 justify-evenly'>{users.map((user, index)=>{
        function deleteUserAtIndex(){
          const updated = users.filter((_, i) => i !== index);
          setUsers(updated);
          localStorage.setItem('all-users', JSON.stringify(updated));
        }
        return(
            <div key={index} className='mb-5 flex-nowrap'>
                <Card name={user.name} email={user.email} profile={user.profile} onDelete={deleteUserAtIndex} />
            </div>
        )
      })}</div>
    </div>
  )
}

export default PageOne
