import React from "react";
import useSWR from "swr";
import axios from "axios";
import Loading from "./Loading";

const fetcher = (url) => axios.get(url).then((response) => response.data);

const Garages = () => {
  const { data, error } = useSWR("https://e-garage.herokuapp.com/api/garages/", fetcher);

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!data) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="font-2xl text-yellow-300">Garages</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Garages;
