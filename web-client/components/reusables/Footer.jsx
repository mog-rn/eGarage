import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full mx-auto">
      
      <div className="flex space-x-16 px-28 mb-5">
        {/* Left */}
        <div className="w-96 p-2">
          <h1 className="mb-3 text-[24px] text-[#118024]">MyGarage</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non
          </p>
          <div className="social-media">
              Follow us: 
              {/* Facebook */}
              {/* Linkedin */}
              {/* Instagram */}
              {/* Twitter */}
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col">
            <h1 className="mb-4 text-[24px]">About</h1>
            <Link href="/">About us</Link>
            <Link href="/">FAQs</Link>
            <Link href="/">Contact us</Link>
        </div>
        <div className=" flex flex-col">
            <h1 className="mb-4 text-[24px]">Quick Links</h1>
            <Link href="/">Sign in</Link>
            <Link href="/">Sign up</Link>
            <Link href="/">Register Garage</Link>
            <Link href="/">Terms & Conditions</Link>
        </div>
        {/* Right */}
        <div className="">
            <div className="container rounded-bl-2xl bg-[#F6FBF2] p-6 space-y-2 flex flex-col">
                <h1 className="pb-2">Find us</h1>
                {/* Email */}
                <Link href="/">mygarage@gmail.com</Link>
                {/* Phone */}
                <Link href="/">+234 809 809 809</Link>
                {/* Address */}
                <address>2nd floor, MUPS, Eldoret, Kenya</address>        
            </div>
        </div>
      </div>
      <div className="flex items-center bg-[#F6FBF2] w-full h-16 justify-center">
        &copy; 2022 MyGarage | All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
