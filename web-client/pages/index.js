import Head from "next/head";

export default function Home({ garages }) {
  return (
    <div className="flex align-center">
      <Head>
        <title>eGarage</title>
        <meta
          name="description"
          content="This a web application that helps locate garages easily"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>eGarage</h1>
      <div>
        {
          garages?.map(garage => {
            return(
              <div key={garage.garage_id}>
                <h2>{garage.garage_name}</h2>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export async function getSeverSideProps() {
  const response = await fetch("https://e-garage.herokuapp.com/api/garages");
  const data = await response.json();

  return {
    props: {
      garages: data,
    },
  };
}
