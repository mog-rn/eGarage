import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';
import React, { ReactNode } from 'react';
import { useUser } from '../../../lib/customHooks';
import { API_ROUTES, APP_ROUTES } from '../../../graphql/utils/constants';
import Avatar from '../../avatar/Avatar';
import { BiUserCircle } from 'react-icons/bi';
import { GiSpeedometer } from 'react-icons/gi';
import { MdReviews } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { FcFaq } from 'react-icons/fc';
import { FiLogOut } from 'react-icons/fi';
import PageLoading from '../../loading/pageLoading/PageLoading';

export interface ISidebarLayout {
  children: ReactNode;
}

const SidebarLayout: React.FC<ISidebarLayout> = ({ children }) => {
  const { user, authenticated } = useUser();
  const [loading, setLoading] = React.useState(false);

  const logout = async () => {
    setLoading(true);
    localStorage.clear();
    await axios({
      method: 'POST',
      url: API_ROUTES.LOGOUT,
    });
    Router.push(APP_ROUTES.SIGN_IN);
  };

  if (!user || !authenticated) {
    return (
      <>
        <PageLoading />
      </>
    );
  }
  return (
    <>
      <div className="h-screen flex">
        <div className="flex flex-col items-center justify-start">
          {/* Avatar */}
          {user && (
            <div className="hidden md:block md:p-5">
              <div className="pb-5 flex space-x-4 items-center ">
                <Avatar />
                <h1 className="text-green">
                  Hello, <span className="text-black">{user}</span>
                </h1>
              </div>
              <div className="w-48 flex pt-10">
                <ul className="w-full space-y-4 text-sm xl:text-lg  font-semibold cursor-pointer">
                  <li className="flex hover:text-green transform hover:scale-100 ease-out duration-500 items-center space-x-3">
                    <GiSpeedometer className="text-green h-10 w-6" />
                    <Link href="/dashboard">Dashboard</Link>
                  </li>
                  <li className="flex hover:text-green transform hover:scale-100 ease-out duration-500 items-center space-x-3">
                    <AiOutlineSearch className="text-green h-10 w-6" />
                    <Link href="/search">Search</Link>
                  </li>
                  <li className="flex hover:text-green transform hover:scale-100 ease-out duration-500 items-center space-x-3">
                    <MdReviews className="text-green h-10 w-6" />
                    <Link href="/review">Reviews</Link>
                  </li>
                  <li className="flex hover:text-green transform hover:scale-100 ease-out duration-500 items-center space-x-3">
                    <FcFaq className="text-green h-10 w-6" />
                    <Link href="/faq">FAQs</Link>
                  </li>
                  <li className="flex hover:text-green transform hover:scale-100 ease-out duration-500 items-center space-x-3">
                    <BiUserCircle className="text-green h-10 w-6" />
                    <Link href="/profile">Account</Link>
                  </li>
                </ul>
              </div>
              <div className="absolute bottom-10">
                <button className="flex items-center" onClick={logout}>
                  <FiLogOut className="h-10 w-6 mr-4 text-green" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
        <main className="flex-1 bg-[#F6FBF2]">{children}</main>
      </div>
    </>
  );
};

export default SidebarLayout;
