import { LocationMarkerIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { trpc } from "../../utils/trpc";

function GarageListingPage() {
  const { data, isLoading } = trpc.useQuery(["garages.garages"]);
  return (
    <div className="bg-[#F6FBF2]  min-h-screen">
      <Head>
        <title>All Garages</title>
      </Head>
      <div className="mx-20 p-10">
        <h1 className="text-xl font-bold pb-6">Available Garages</h1>
        {data?.map((garage) => {
          return (
            <div key={garage.id} className="border-2 w-96 rounded-xl">
              <div className="relative h-56">
                <Image
                  src={garage.image}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-2 space-y-4">
                <h2 className="font-bold">{garage.name}</h2>
                <div className="flex items-center justify-between">
                  <p className="text-sm italic">{garage.services}</p>
                  <p className="flex items-center space-x-3">
                    <LocationMarkerIcon className="h-4 w-4 text-[#118024]" />
                    <span className="text-sm">{garage.city}</span>
                  </p>
                </div>
                <button className="bg-[#118024] text-white border-transparent px-2 text-sm py-4 rounded-md">
                  <Link href={`/garages/${garage.id}`} className="">
                    View Garage Details
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GarageListingPage;
