import React from 'react';
import DashboardBanner from '../components/dashboard/dashboardBanner/DashboardBanner';
import DashboardSearch from '../components/dashboard/dashboardSearch/DashboardSearch';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const Dashboard: NextPageWithLayout = () => {
  return (
    <div className="flex">
      <div className="md:space-y-10 md:p-10">
        <DashboardSearch />
        <DashboardBanner />
      </div>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = (page) => {
  return <SidebarLayout>{page}</SidebarLayout>;
};
