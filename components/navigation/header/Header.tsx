import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <div
      className="h-12 w-full bg-white flex items-center px-5 shadow-md
        md:justify-around justify-between md:px-20 mx-auto sticky top-0 z-50"
    >
      <div>
        {/* Logo */}
        <h1 className="font-bold text-md md:text-lg text-green">eGarage</h1>
      </div>
      <div className="hidden md:block">
        <ul className="flex space-x-10 justify-center items-center px-20">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <HiMenu className="text-green text-md" />
      </div>
      <div className="hidden md:block space-x-3">
        <button
          className="text-green px-4 py-1 hover:bg-green hover:text-[#fff] 
              transition duration-300 ease-in rounded-lg border-transparent border-2"
        >
          Login
        </button>
        <button
          className="text-[#ffffff] bg-green px-4 rounded-lg py-1
            hover:bg-white hover:text-green hover:border-green border-2 
            transition duration-300 ease-in border-transparent"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
