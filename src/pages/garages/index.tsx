import {
  ArrowLeftIcon,
  LocationMarkerIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useUserContext } from "../../context/user.context";
import { trpc } from "../../utils/trpc";
import React from "react"

function GarageListingPage() {
  const { data, isLoading } = trpc.useQuery(["garages.garages"]);
  const router = useRouter();

  const [searchTerm, setSearchTerm] = React.useState("");

  const user = useUserContext();
  return (
    <div className="bg-[#F6FBF2]  min-h-screen">
      <Head>
        <title>All Garages</title>
      </Head>
      <div className="mx-20 p-10">
        <div className="pb-5 flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <ArrowLeftIcon className="h-4 text-[#118024]" />
            <p className="text-sm italic">
              {user ? (
                <div
                  onClick={() => router.push("/dashboard")}
                  className="cursor-pointer"
                >
                  Dashboard
                </div>
              ) : (
                <div
                  onClick={() => router.push("/")}
                  className="cursor-pointer"
                >
                  Home
                </div>
              )}
            </p>
          </div>
          {/* Searchbar */}
          <div className="border-[#118024] w-96 border-2 rounded-full flex items-center">
            <SearchCircleIcon className="h-10 text-[#118024]/70" />
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-12  outline-none bg-[#f6FBF2]"
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold pb-6">Available Garages</h1>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {data
            ?.filter((garage) => {
              if (searchTerm === "") {
                return garage;
              } else if (
                garage.city.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return garage;
              }
            })
            .map((garage) => {
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
    </div>
  );
}

export default GarageListingPage;
