import React from "react";
import ReviewsForm from "../components/forms/ReviewsForm";
import SideBar from "../components/reusables/SideBar";
import Head from "next/head";

const Reviews = () => {
  return (
    <div className="flex h-screen bg-[#F6FBF2]">
      <Head>
        <title>Reviews</title>
      </Head>

      <SideBar />

      <div className="p-10 flex-grow">
        <ReviewsForm />
      </div>
    </div>
  );
};

export default Reviews;
