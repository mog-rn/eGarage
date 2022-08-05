import PrimaryLayout from "@/components/layouts";
import { getSession } from "next-auth/react";
import React from "react";

export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}


const AccountDetails = () => {
  return (
    <PrimaryLayout>
      <h1 className="font-medium text-2xl">Profile</h1>
    </PrimaryLayout>
  );
};

export default AccountDetails;
