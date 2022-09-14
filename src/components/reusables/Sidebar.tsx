import Image from "next/image";
import Link from "next/link";
import { trpc } from "../../utils/trpc";

function Sidebar() {
  const { data, isLoading } = trpc.useQuery(["users.me"]);
  return (
    <div className="p-2">
      <div
        className="border-2 h-[90vh] w-72 rounded-lg bg-white p-3
        "
      >
        <div className="flex flex-col items-center w-full">
          <div className="border-2 h-20 w-20 rounded-full relative border-[#F6FBF2]">
            <Image
              src="https://rebrand.ly/dy5sp0e"
              className="rounded-full"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-xs text-center font-semibold w-32">
            Welcome back{" "}
            <span className="text-[#118024] text-sm font-light text-center italic">
              {data?.email}
            </span>
          </div>
        </div>
        <div>
            <ul>
                <li><Link href="/garages">Search</Link></li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
