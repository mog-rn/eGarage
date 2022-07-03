import Link from 'next/link';
import React, { ReactNode } from 'react';

export interface ISidebarLayout {
  children: ReactNode;
}

const SidebarLayout: React.FC<ISidebarLayout> = ({ children }) => {
  return (
    <div className='h-screen flex'>
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
      </div>
      <main className="flex-1 p-10 bg-[#F6FBF2]">{children}</main>
    </div>
  );
};

export default SidebarLayout;
