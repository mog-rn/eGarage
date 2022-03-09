import React from 'react'

const ProfileCard = () => {
  return (
    <div className='h-[150px] p-5 border-black border-4 rounded-3xl flex items-center justify-center flex-col'>
        <h1 className='flex items-center'>Welcome, Mogaka {/**Added the hi emoji */}</h1>
        <span>It's nice to see you back again...</span>
    </div>
  )
}

export default ProfileCard