import { gql, useMutation } from '@apollo/client';
import { getSession } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const CreateGarageMutation = gql`
  mutation (
    $garage_name: String!
    $garage_services: String!
    $garage_location: String!
    $garage_phone: String!
    $garage_email: String!
    $garage_website: String!
    $time_open: String!
    $time_close: String!
    $garage_description: String!
    $garage_image: String!
  ) {
    createGarage(
      garage_name: $garage_name
      garage_services: $garage_services
      garage_location: $garage_location
      garage_phone: $garage_phone
      garage_email: $garage_email
      garage_website: $garage_website
      time_open: $time_open
      time_close: $time_close
      garage_image: $garage_image
      garage_description: $garage_description
    ) {
      garage_id
      garage_name
      garage_services
      garage_location
      garage_phone
      garage_email
      garage_website
      time_open
      time_close
      garage_image
      garage_description
    }
  }
`;

const Admin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [createGarage, { loading, error }] = useMutation(CreateGarageMutation, {
    onCompleted: () => reset(),
  });

  const onSubmit = async (data) => {
    const {
      garage_name,
      garage_address,
      garage_city,
      garage_state,
      garage_zip,
      garage_phone,
      garage_email,
      garage_website,
      garage_hours,
      garage_description,
      garage_image,
      garage_lat,
      garage_lng,
      garage_price,
      garage_rating,
      garage_reviews,
      garage_amenities,
      garage_services,
      garage_features,
      garage_parking,
      garage_payment,
      garage_security,
      garage_accessibility,
      garage_other,
      garage_status,
    } = data;
    const imgUrl = `https://via.placeholder.com/150`;
    const variables = {
      garage_name,
      garage_address,
      garage_city,
      garage_state,
      garage_zip,
      garage_phone,
      garage_email,
      garage_website,
      garage_hours,
      garage_description,
      garage_image: imgUrl,
      garage_lat,
      garage_lng,
      garage_price,
      garage_rating,
      garage_reviews,
      garage_amenities,
      garage_services,
      garage_features,
      garage_parking,
      garage_payment,
      garage_security,
      garage_accessibility,
      garage_other,
      garage_status,
    };
    try {
      toast.promise(createGarage({ variables }), {
        loading: 'Creating a new garage...',
        success: 'Garage successfully created!🎉',
        error: 'Something went wrong 😢 Please try again - ${error}',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>eGarage | Admin</title>
      </Head>
      <div className="flex flex-col space-y-5 bg-white h-auto items-center p-5">
        <Toaster />
        <h1 className="text-2xl font-bold">Create a new Garage</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container border w-96 p-10 space-y-5"
        >
          <div>
            <label htmlFor="garage_name">Garage Name</label>
            <input
              type="text"
              {...register('garage_name', { required: true })}
              className="border w-full p-2"
            />
          </div>
          <div>
            <label htmlFor="garage_address">Garage Services</label>
            <input
              type="text"
              {...register('garage_services', { required: true })}
              className="border w-full p-2"
            />
          </div>
          <div>
            <label htmlFor="garage_location">Garage Location</label>
            <input
              type="text"
              {...register('garage_location', { required: true })}
              className="border w-full p-2"
            />
          </div>
          <div>
            <label htmlFor="garage_phone">Garage Phone</label>
            <input
              type="text"
              {...register('garage_phone', { required: true })}
              className="border w-full p-2"
            />
          </div>
          <div>
            <label htmlFor="garage_email">Garage Email</label>
            <input
              type="text"
              {...register('garage_email', { required: true })}
              className="border w-full p-2"
            />
          </div>
          <div>
            <label htmlFor="garage_website">Garage Website</label>
            <input
              type="text"
              {...register('garage_website', { required: true })}
              className="border w-full p-2"
            />
          </div>
          <div>
            <label htmlFor="time_open">Time Open</label>
            <input
              type="text"
              {...register('time_open', { required: true })}
              className="border w-full p-2"
            />
          </div>
          <div>
            <label htmlFor="time_close">Time Close</label>
            <input
              type="text"
              {...register('time_close', { required: true })}
              className="border w-full p-2"
            />
          </div>
          <div>
            <label htmlFor="garage_description">Garage Description</label>
            <input
              type="text"
              {...register('garage_description', { required: true })}
              className="border w-full p-2"
            />
          </div>
          <div>
            <label htmlFor="garage_image">Garage Image</label>
            <input
              type="text"
              {...register('garage_image', { required: true })}
              className="border w-full p-2"
            />
          </div>
          {loading ? (
            <>Creating</>
          ) : (
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create Garage
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Admin;

// export const getServerSideProps = async ({ req, res }) => {
//   const session = getSession(req, res);
//   if (!session) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: '/api/auth/login',
//       },
//       props: {},
//     };
//   }
//   return {
//     props: {},
//   };
// };
