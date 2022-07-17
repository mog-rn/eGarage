import Image from 'next/image';
import styles from './Hero.module.css';

export interface IHero {}

const Hero: React.FC<IHero> = () => {
  return (
    <div className="relative h-screen w-screen">
      <Image src="/garage.jpeg" layout="fill"  />
      <div className='absolute inset-0 h-full bg-transparent from-black/80 bg-opacity-10 bg-gradient-to-r' />
      <div className="relative mx-auto w-[80vw] z-10">
        <p className="flex justify-center flex-col text-white text-[50px] pt-48 pb-5  font-bold">
          Discover more than <br />
          <span className="underline underline-offset-[8px] decoration-[13px] decoration-[#118024]">
            1000+ garages
          </span>
        </p>
        <p className="text-white text-lg w-96 pb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna lectus.
        </p>
        {/* <SearchBar /> */}
        {/* <div className="pt-10 mx-auto"> */}
          {/* <Features /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Hero;
