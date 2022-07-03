import Image from 'next/image';
import styles from './Hero.module.css';

export interface IHero {}

const Hero: React.FC<IHero> = () => {
  return (
    <div className=''>
    <div className="h-screen relative w-screen">
      <Image
        src="/garage.png"
        layout="fill"
        objectFit="cover"
        alt="hero"
      />
      <div className='text-[#fff] z-50'>
        
      </div>
    </div>
    </div>
  );
};

export default Hero;
