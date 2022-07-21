import React from 'react';
import SidebarLayout from '../modules/components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const FAQs: NextPageWithLayout = () => {
  return <div>FAQs</div>;
};

export default FAQs;

FAQs.getLayout = (page) => {
  return <SidebarLayout>{page}</SidebarLayout>;
};
