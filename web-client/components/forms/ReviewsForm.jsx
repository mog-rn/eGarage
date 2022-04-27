import React from "react";

const ReviewsForm = () => {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl">Make a review</h1>
      <form action="" className="space-y-5">
        <div className="flex flex-col space-y-4">
          <label htmlFor="">Garage you are making a review for</label>
          <select name="garages" id="" className="w-[400px]">
            <option value="">choose a garage</option>
          </select>
        </div>
        <div>
          <p>How can you rate it?</p>
          <div className="space-x-5">
            <input type="radio" name="" id="" /> 1
            <input type="radio" name="" id="" /> 2
            <input type="radio" name="" id="" /> 3
            <input type="radio" name="" id="" /> 4
            <input type="radio" name="" id="" /> 5
          </div>
        </div>
        <div>
            <button type="submit" className="bg-[#118024] text-white p-5 rounded-md">make a review</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewsForm;
