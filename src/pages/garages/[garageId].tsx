import Error from "next/error";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import {
  LocationMarkerIcon,
  BriefcaseIcon,
  PhoneIcon,
  GlobeAltIcon,
  MailIcon,
  ClockIcon,
  ArrowLeftIcon,
} from "@heroicons/react/outline";

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
    return <Error statusCode={404} />;
  }

  return (
    <div className="max-h-screen bg-[#F6FBF2] p-10 ">
      <Head>
        <title>{data?.name}</title>
      </Head>
      <div className="grid grid-cols-2 mx-20">
        <div className="w-full h-[550px] rounded-lg border-transparent shadow-xl border-2 relative">
          <Image
            src={data?.image}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="p-10 space-y-5">
          <h1 className="font-bold text-2xl text-[#118024]">{data?.name}</h1>
          <p className="tracking-wide"> {data?.description}</p>
          <p className="flex space-x-3 items-center">
            <BriefcaseIcon className="h-6 w-6 text-[#118024]" />
            <span className="font-semibold text-sm ">{data?.services}</span>
          </p>
          <p className="flex space-x- items-center">
            <LocationMarkerIcon className="h-6 w-6 text-[#118024] mr-3" />{" "}
            {data?.city} <span className="text-[#118024] p-2">.</span>{" "}
            {data?.country}
          </p>
          <div className="grid grid-cols-2">
            <p className="flex items-center space-x-3">
              <PhoneIcon className="h-6 w-6 text-[#118024] mr-3" />+
              {data?.phone}
            </p>
            <p className="flex items-center">
              <GlobeAltIcon className="h-6 w-6 text-[#118024] mr-3" />
              {data?.website}
            </p>
          </div>
          <p className="flex items-center">
            <MailIcon className="h-6 w-6 text-[#118024] mr-3" />
            {data?.email}
          </p>
          <p className="flex items-center">
            <ClockIcon className="h-6 w-6 text-[#118024] mr-3" />
            {data?.time_open} - {data?.time_close}
          </p>
          <div>
            <p className="text-xs italic">
              Member since: {data?.createdAt.getDate()}-
              {data?.createdAt.getMonth()}-{data?.createdAt.getFullYear()},{" "}
              {data?.createdAt.toLocaleTimeString()}
            </p>
            <p className="text-xs italic">
              Info updated on: {data?.updatedAt.getDate()}-
              {data?.updatedAt.getMonth()}-{data?.updatedAt.getFullYear()},{" "}
              {data?.updatedAt.toLocaleTimeString()}
            </p>
          </div>
          <div
            className="flex items-center space-x-2 justify-end text-sm font-semibold cursor-pointer"
            onClick={() => router.push("/garages/")}
          >
            <ArrowLeftIcon className="h-6 w-6 text-[#118024] mr-3 " /> back to
            listings
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleGarage;
