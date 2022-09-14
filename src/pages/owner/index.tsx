import { useUserContext } from "../../context/user.context";

import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import {
  ChartBarIcon,
  PencilAltIcon,
  PencilIcon,
  PlusCircleIcon,
  TrashIcon,
  UserAddIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

function GarageOwner() {
  const user = useUserContext();

  const router = useRouter();

  if (!user) {
    return router.push("/owner/login");
  }

  const { data, isLoading } = trpc.useQuery(["owners.me"], {
    onSuccess: () => {},
  });

  const { data: garages } = trpc.useQuery(["garages.garages"], {});

  const deleteCookie = () => {}
  return (
    <div className="h-screen bg-[#F6FBF2]">
      <div className="mx-20 p-5">
        <div className="container bg-white h-auto p-3 rounded-lg shadow-md flex items-center justify-between">
          <h1 className="text-[#118024]/70 text-xl font-bold px-2">eGarage</h1>

          <div
          onClick={() => {
              deleteCookie()
              router.push("/owner/login")
          }}
          className="flex space-x-2 items-center rounded-full cursor-pointer border p-2">
            <UserCircleIcon className="h-6 text-[#118024]/70" />
            <span className="text-sm font-light">{data?.email}</span>
          </div>
        </div>

        <div className="p-6 flex w-full justify-between">
          <h1 className="font-bold text-xl">My Garages</h1>
          <div className="flex space-x-5">
            <button
              className="flex space-x-1 border-[#118024]/50 rounded-lg border p-2"
              onClick={() => router.push("/garages/new")}
            >
              <PlusCircleIcon className="h-6 text-[#118024]/70" />
              <span>Add a Garage</span>
            </button>
            <button
              className="flex space-x-1 border-[#118024]/50 rounded-lg border p-2"
              onClick={() => router.push("/garages/")}
            >
              <ChartBarIcon className="h-6 text-[#118024]/70" />
              <span>View all garages</span>
            </button>
          </div>
        </div>
        <table className="table-auto border w-full border-collapse">
          <thead>
            <tr className="">
              <th className="border border-slate-300">Name</th>
              <th className="border border-slate-300">Location</th>
              <th className="border border-slate-300">Services</th>
              <th className="border border-slate-300">phone</th>
              <th className="border border-slate-300">Opening time</th>
              <th className="border border-slate-300">Closing time</th>
              <th className="border border-slate-300">Date Joined</th>
              <th className="border border-slate-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {garages?.map((garage) => (
              <tr key={garage?.id}>
                <th className="border border-slate-300 font-normal">
                  {garage?.name}
                </th>
                <th className="border border-slate-300 font-normal">
                  {garage?.city}
                </th>
                <th className="border border-slate-300 font-normal">
                  {garage?.services}
                </th>
                <th className="border border-slate-300 font-normal">
                  {garage?.phone}
                </th>
                <th className="border border-slate-300 font-normal">
                  {garage?.time_open}
                </th>
                <th className="border border-slate-300 font-normal">
                  {garage?.time_close}
                </th>
                <th className="border border-slate-300 font-normal">
                  {garage?.createdAt.toLocaleString()}
                </th>
                <th className="border border-slate-300 font-normal p-3 flex space-x-3">
                  <button className="rounded-lg flex items-center border bg-[#118024] px-4 py-2 text-white"><PencilAltIcon className="h-5 mr-1"/>Edit</button>
                  <button className="rounded-lg flex items-center border bg-red-900 text-white px-4 py-2 space-x-2"><TrashIcon className="h-5 mr-1" />Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GarageOwner;
