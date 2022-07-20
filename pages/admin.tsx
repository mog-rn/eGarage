import { gql, useMutation } from '@apollo/client';
import { getSession } from '@auth0/nextjs-auth0';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const CreateGarageMutation = gql`
  mutation (
    $garage_name: String!
    $garage_services: String!
    $garage_location: String!
    $garage_phone: String!
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
      id
      garage_name
      garage_address
      garage_city
      garage_state
      garage_zip
      garage_description
      garage_image
      garage_lat
      garage_lng
      garage_price
      garage_rating
      garage_reviews
      garage_amenities
      garage_services
      garage_features
      garage_parking
      garage_payment
      garage_security
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
    <div>
      <Toaster />
      <h1>Create a new Garage</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <label htmlFor="garage_name">Garage Name</label>
        <input
          type="text"
          {...register('garage_name', { required: true })}
          className=""
        />
        </div>
        <div>
        <label htmlFor="garage_address">Garage Address</label>
        </div>
      </form>
    </div>
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
