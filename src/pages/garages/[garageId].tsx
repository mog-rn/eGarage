import Error from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

function SingleGarage() {
  const router = useRouter();

  const garageId = router.query.garageId as string;

  const { data, isLoading } = trpc.useQuery([
    "garages.single-garage",
    { garageId },
  ]);

  if (isLoading) {
    return <p>Loading garages...</p>;
  }


  if (!data) {
    return <Error statusCode={404} />
  }

  return (
    <div>
      <Head>
        <title>{data?.name}</title>
      </Head>
      <h1>{data?.name}</h1>
      <p>{data?.description}</p>
    </div>
  )
}

export default SingleGarage;
