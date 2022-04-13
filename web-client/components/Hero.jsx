import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-screen z-10'>
        <div className='h-auto '> 
            <Image src="/images/garage.jpeg" layout="fill" />
        </div>
    </div>
  )
}

export default Hero