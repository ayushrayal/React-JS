import React, { useState } from 'react'
import Card from '../Card';

const PageOne = () => {
    let localData = JSON.parse(localStorage.getItem('all-users'));
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profile, setProfile] = useState('');

    const [users, setUsers] = useState(localData || []);
    function SubmitEventhandle(e){
        e.preventDefault();
        const oldusers = [...allUsers];
        oldusers.push({name,email,profile});
        setAllUsers(oldusers);
        localData.setItem('all-users',JSON.stringify(oldusers))
        setName("");
        setEmail("");
        setProfile("");
    }
    function NameEventhandle(dets){
        setName(dets.target.value);
    }
    function EmailEventhandle(dets){
        setEmail(dets.target.value);
    }
    function ProfileEventhandle(dets){
        setProfile(dets.target.value);
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
        <button className='bg-gradient-to-r from-slate-800 to-slate-900 text-white font-bold py-2 px-4 rounded w-50 active:scale-90 transition-all' type="submit">Submit</button>
      </form>
      <div className='flex flex-wrap gap-10 justify-evenly'>{users.map((user, index)=>{
        return(
            <div key={index} className='mb-5 flex-nowrap'>
                <Card name={user.name} email={user.email} profile={user.profile} />
            </div>
        )
      })}</div>
    </div>
  )
}

export default PageOne
