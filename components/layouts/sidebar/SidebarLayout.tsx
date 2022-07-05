import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';
import React, { ReactNode } from 'react';
import { useUser } from '../../../lib/customHooks';
import { API_ROUTES, APP_ROUTES } from '../../../utils/constants';
import Avatar from '../../avatar/Avatar';

export interface ISidebarLayout {
  children: ReactNode;
}

const SidebarLayout: React.FC<ISidebarLayout> = ({ children }) => {
  
  const { user, authenticated } = useUser();

  const logout = async () => {
    localStorage.clear();
    // await axios({
    //   method: 'POST',
    //   url: API_ROUTES.LOGOUT,
    // });
    Router.push(APP_ROUTES.SIGN_IN);
  };

  if (!user || !authenticated) {
    return <></>
  }
  return (
    <div className="h-screen flex">
      <div className="p-5 flex flex-col items-center justify-start">
        {/* Avatar */}
        {user && (
          <>
            <div className="pb-5 flex space-x-4 items-center ">
              <Avatar />
              <h1 className="text-green">
                
                Hello, <span className="text-black">{user?.firstname || "cole"}</span>
              </h1>
            </div>
            <div className="w-48 flex pt-10">
              <ul className="w-full space-y-4 text-sm font-semibold cursor-pointer">
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
            <div className='absolute bottom-10'>
              <button className="" onClick={logout}>
                Logout
              </button>
            </div>
          </>
        )}
      </div>
      <main className="flex-1 p-10 bg-[#F6FBF2]">{children}</main>
    </div>
  );
};

export default SidebarLayout;
