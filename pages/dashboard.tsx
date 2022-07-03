import React from 'react';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const Dashboard: NextPageWithLayout = () => {
  return (
    <div className="flex">
      <div>Dashboard</div>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = (page) => {
  return <SidebarLayout>{page}</SidebarLayout>;
};
