import React from "react";

const ReviewsForm = () => {
  const [ratings, setRatings] = React.useState(1);

  const handleChange = (e) => {
    setRatings(e.target.value);
  };

  return (
    <div className="space-y-10">
              <h1 className='font-bold items-center justify-center pb-10 text-3xl flex text-center'>Give a review</h1>
      <form action="" className="space-y-5 justify-center">
        <div className="flex flex-col space-y-4">
          <label htmlFor="">Garage you are making a review for</label>
          <select name="garages" id="" className="w-[400px]">
            <option value="">choose a garage</option>
          </select>
        </div>
        <div>
          <p>How can you rate it?</p>
          <div className="space-x-5">
            <input
              type="radio"
              name=""
              value={1}
              checked={ratings === "1"}
              onChange={handleChange}
              id=""
            />{" "}
            1
            <input
              type="radio"
              name=""
              id=""
              value={2}
              checked={ratings === "2"}
              onChange={handleChange}
            />{" "}
            2
            <input
              type="radio"
              name=""
              id=""
              value={3}
              checked={ratings === "3"}
              onChange={handleChange}
            />{" "}
            3
            <input
              type="radio"
              name=""
              id=""
              value={4}
              checked={ratings === "4"}
              onChange={handleChange}
            />{" "}
            4
            <input
              type="radio"
              name=""
              id=""
              value={5}
              checked={ratings === "5"}
              onChange={handleChange}
            />{" "}
            5
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#118024] text-white p-5 rounded-md"
          >
            make a review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewsForm;
