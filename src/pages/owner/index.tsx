import { useUserContext } from "../../context/user.context";

import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import { UserCircleIcon } from "@heroicons/react/outline";

function GarageOwner() {
  const user = useUserContext();

  const router = useRouter();

  if (!user) {
    return router.push("/owner/login");
  }

  const { data, isLoading } = trpc.useQuery(["owners.me"], {
    onSuccess: () => {},
  });

  const {data: garage} = trpc.useQuery(["garages.garages"], {

  })
  return (
    <div className="h-screen bg-[#F6FBF2]">
      <div className="mx-20 p-5">
        <div className="container bg-white h-auto p-3 rounded-lg shadow-md mx-5 flex items-center justify-between">
          <h1 className="text-[#118024]/70 text-xl font-bold px-2">eGarage</h1>

          <div className="flex space-x-2 items-center rounded-full border p-2">
            <UserCircleIcon className="h-6 text-[#118024]/70" />
            <span className="text-sm font-light">{data?.email}</span>
          </div>
        </div>

        <h1 className="p-5 font-bold text-xl">My Garages</h1>
      </div>
    </div>
  );
}

export default GarageOwner;
