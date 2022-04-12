import React from "react";

const UserProfileForm = () => {
  return (
    <div>
      <form action="">
        <div className="mt-4 flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className="border rounded-md p-1"
            disabled
            id="username"
            placeholder="Update username"
          />
        </div>
        <div className="mt-4 flex flex-row space-x-4">
          <div>
            <label htmlFor="username" className="mr-4">
              First Name
            </label>
            <input
              type="text"
              name="username"
              className="border rounded-md p-1"
              id="username"
              placeholder="Update username"
            />
          </div>
          <div>
            <label htmlFor="username" className="mr-4">
              Last Name
            </label>
            <input
              type="text"
              name="username"
              className="border rounded-md p-1"
              id="username"
              placeholder="Update username"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            name="username"
            className="border rounded-md p-1"
            disabled
            id="username"
            placeholder="Update username"
          />
        </div>
        <div className="mt-4 flex flex-col">
          <label htmlFor="username">Current password</label>
          <input
            type="text"
            name="username"
            className="border rounded-md p-1"
            id="username"
            placeholder="Update username"
          />
        </div>
        <div className="mt-4 flex flex-col">
          <label htmlFor="username">New Password</label>
          <input
            type="text"
            name="username"
            className="border rounded-md p-1"
            id="username"
            placeholder="Update username"
          />
        </div>
        <div className="mt-4 flex flex-col">
          <label htmlFor="username">Confirm new password</label>
          <input
            type="text"
            name="username"
            className="border rounded-md p-1"
            id="username"
            placeholder="Update username"
          />
        </div>
        <div className="buttons flex mt-3 space-x-3">
          <button
            type="submit"
            className="border-black p-3 text-white rounded-lg bg-green-800"
          >
            update
          </button>
          <button
            type="submit"
            className="border-black p-3 text-white rounded-lg bg-red-800"
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfileForm;
