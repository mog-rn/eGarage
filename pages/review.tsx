import React from 'react';
import SidebarLayout from '../modules/components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const Review: NextPageWithLayout = () => {
  return <div>Review</div>;
};

export default Review;

Review.getLayout = (page) => {
  return <SidebarLayout>{page}</SidebarLayout>;
};
