import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Testimonials = () => {
  return (
    <div className='h-auto bg-[#F6FBF4] p-10 mb-10'>
        <h1 className='text-[55px] font-bold'>What users say</h1>
        <p>Lorem ipsum et luctus venenat</p>
        <Carousel className=''>
        <div className='h-96'>
            <img src="" alt="" />
            <p>Image 1</p>
        </div>
        <div>
            <img src="" alt="" />
            <p>Image 1</p>
        </div>
        <div>
            <img src="" alt="" />
            <p>Image 1</p>
        </div>
        <div>
            <img src="" alt="" />
            <p>Image 1</p>
        </div>
    </Carousel>
    </div>
  )
}

export default Testimonials