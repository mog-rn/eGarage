import React from 'react';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const Profile: NextPageWithLayout = () => {
  return <div>Profile</div>;
};

export default Profile;

Profile.getLayout = (page) => {
  return <SidebarLayout>{page}</SidebarLayout>;
};
