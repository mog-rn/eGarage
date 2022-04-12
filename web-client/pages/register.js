import React from 'react'
import Head from 'next/head'
const Register = () => {
  return (
    <div className='bg-[#EAE8DF] h-screen p-20'>
        <Head>
            <title>Create an Account</title>
        </Head>
        <div className='container h-[450px] w-[680px] shadow-green-600 flex flex-row justify-items-center mx-auto rounded-3xl bg-white'>
            {/* right */}
            <div className='w-80 rounded-3xl bg-black h-full'>
            </div>
            {/* left */}
            <div className='p-2 overflow-y-auto'>
            <h1 className='text-[55px] font-bold'>Sign up </h1>
            </div>
        </div>
    </div>
  )
}

export default Register