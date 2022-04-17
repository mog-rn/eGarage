import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="p-10 space-x-4 space-y-3">
      <h1 className="text-[55px] font-bold">What users say</h1>
      <p>Lorem ipsum et luctus venenat</p>
      <div className="h-auto container bg-[#F6FBF4] mx-auto p-10 mb-10">
        <div className="rounded-lg px-20 mx-auto">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            className="rounded-lg"
          >
            <div className="h-[450px] rounded-lg">
              <Image
                src="/images/garage.jpeg"
                width={150}
                height={150}
                className="rounded-full w-20"
                alt=""
              />
              <div>
                <blockquote>hello</blockquote>
              </div>
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
      </div>
    </div>
  );
};

export default Testimonials;
