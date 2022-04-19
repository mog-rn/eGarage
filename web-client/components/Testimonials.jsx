import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Testimonials = () => {
  return (
    <div>
      <div className="px-10">
        <h1 className="text-[55px] font-bold">What users say</h1>
        <p>Lorem ipsum et luctus venenat</p>
      </div>
      <div className="p-10 px-48 space-x-4 space-y-3">
        <div className="h-auto rounded-lg container bg-[#F6FBF4] mx-auto p-10 mb-10">
          <div className="rounded-lg px-20 mx-auto">
            <Carousel
              showArrows={false}
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
                <div className="pb-20">
                  <h1 className="text-4xl">Raymond Hill</h1>
                  <h3 className="text-xl">Nairobi, Kenya</h3>
                </div>
                <div className="flex justify-between flex-row">
                  <div className="flex items-start">
                    <ImQuotesLeft className="text-[85px] mr-2 text-[#118024]" />
                  </div>
                  <div className="text-[#000000] w-1/2 text-center text-lg font-light font-italic flex items-center justify-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    lectus.
                  </div>
                  <div className="float-right">
                    <ImQuotesRight className="text-[85px] text-[#118024]" />
                  </div>
                </div>
              </div>
              <div className="h-[450px] rounded-lg">
                <Image
                  src="/images/garage.jpeg"
                  width={150}
                  height={150}
                  className="rounded-full w-20"
                  alt=""
                />
                <div className="pb-20">
                  <h1 className="text-4xl">Raymond Hill</h1>
                  <h3 className="text-xl">Nairobi, Kenya</h3>
                </div>
                <div className="flex justify-between flex-row">
                  <div className="flex items-start">
                    <ImQuotesLeft className="text-[85px] mr-2 text-[#118024]" />
                  </div>
                  <div className="text-[#000000] w-1/2 text-center text-lg font-light font-italic flex items-center justify-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    lectus.
                  </div>
                  <div className="float-right">
                    <ImQuotesRight className="text-[85px] text-[#118024]" />
                  </div>
                </div>
              </div>
              <div className="h-[450px] rounded-lg">
                <Image
                  src="/images/garage.jpeg"
                  width={150}
                  height={150}
                  className="rounded-full w-20"
                  alt=""
                />
                <div className="pb-20">
                  <h1 className="text-4xl">Raymond Hill</h1>
                  <h3 className="text-xl">Nairobi, Kenya</h3>
                </div>
                <div className="flex justify-between flex-row">
                  <div className="flex items-start">
                    <ImQuotesLeft className="text-[85px] mr-2 text-[#118024]" />
                  </div>
                  <div className="text-[#000000] w-1/2 text-center text-lg font-light font-italic flex items-center justify-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    lectus.
                  </div>
                  <div className="float-right">
                    <ImQuotesRight className="text-[85px] text-[#118024]" />
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
