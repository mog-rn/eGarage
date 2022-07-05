import Link from 'next/link';
import Router from 'next/router';
import React, { ReactNode } from 'react';
import { useUser } from '../../../lib/customHooks';
import { APP_ROUTES } from '../../../utils/constants';
import Avatar from '../../avatar/Avatar';

export interface ISidebarLayout {
  children: ReactNode;
}

const SidebarLayout: React.FC<ISidebarLayout> = ({ children }) => {
  const {user, authenticated} = useUser()

  if (!user || !authenticated) {
  
  }
  return (
    <div className="h-screen flex">
      <div className='p-5 flex flex-col items-center justify-start'>
      {/* Avatar */}
      { user && 
      <>
      <div className='pb-5 flex space-x-4 items-center'>
        <Avatar /> 
        <h1 className='text-green'>Hello, <span className='text-black'>{user.firstname}</span></h1>
      </div>
      <div className="w-48 flex">
        <ul className="w-full space-y-2 text-sm font-semibold cursor-pointer">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/search">Search</Link>
          </li>
          <li>
            <Link href="/review">Reviews</Link>
          </li>
          <li>
            <Link href="/faq">FAQs</Link>
          </li>
          <li>
            <Link href="/account">Account</Link>
          </li>
        </ul>
      </div></>}
      </div>
      <main className="flex-1 p-10 bg-[#F6FBF2]">{children}</main>
    </div>
  );
};

export default SidebarLayout;
