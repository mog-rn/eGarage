import { getSession } from "next-auth/react";
import Head from "next/head";
import React from "react";
import axios from "axios"
import PrimaryLayout from "@/components/layouts";
import GarageForm from "@/components/forms/GarageForm";

export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const CreateGarage = () => {
    const addGarage = (data: any) => axios.post('/api/garages', data);
  return (
    <PrimaryLayout>
      <Head>
        <title>eGarage | Add Garage</title>
      </Head>
     <GarageForm />
    </PrimaryLayout>
  );
};

export default CreateGarage;
