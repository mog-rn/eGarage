import React from 'react'

const NavBar = () => {
  return (
    <div className="font-san flex items-center justify-between h-16 w-full shadow-md p-10 top-2 bg-[#F6FBF2]">
        {/* logo */}
        <div className='ml-20'>
            <h1 className='text-4xl text-[#118024] font-bold'>MyGarage</h1>
        </div>
        {/* Links */}
        <div>
            <ul className='flex text-lg flex-row space-x-20 items-end'>
                <li>Home</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
        </div>
        {/* Buttons */}
        <div className='space-x-7 '>
            <button className='text-[#118024] text-lg w-auto h-[45px]'>Sign in</button>
            <button className='bg-[#118024] text-white text-lg p-4 w-auto rounded-md'>Register</button>
        </div>
    </div>
  )
}

export default NavBar