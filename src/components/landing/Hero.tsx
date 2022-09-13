import Image from "next/image";

function Hero() {
  return (
    <div className="relative w-full h-[87vh]">
      <Image src="/garage.jpg" layout="fill" objectFit="cover" />
      <div className="absolute h-full bg-black/50 inset-0">
        <div className="flex items- h-full space-y-5 p-10 flex-col justify-center">
          <h1 className="text-white font-bold text-6xl w-[650px] tracking-wide">
            Discover more than{" "}
            <span className="underline underline-offset-[20px] decoration-[#118024]">
              1000+ garages
            </span>
          </h1>
          <p className="text-white pt-5 text-xl w-96">
            Make your car look like great by getting approved and vetted garages for your next car service 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
