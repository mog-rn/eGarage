import React from "react";
import UserProfileForm from "./forms/UserProfileForm";
import ProfileCard from "./ProfileCard";

const UserView = () => {
  return (
    <div className="grid grid-cols-[80px_2fr_350px]">
      <div className="h-screen border-transparent">Sidebar</div>
      <div className="border-r border-gray-200 border-l p-20 h-screen overflow-y-auto scrollbar-hide">
        <h2 className="text-2xl font-semibold">User Profile</h2>
        <UserProfileForm />
      </div>
      <div className="h-screen p-4">
        <ProfileCard className="" />
      </div>
    </div>
  );
};

export default UserView;
