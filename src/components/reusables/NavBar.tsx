import Link from "next/link";
import { useRouter } from "next/router";

function NabBar() {
  const router = useRouter();

  return (
    <div className="bg-white">
      <div className="px-20 h-auto shadow-lg flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-[#118024]/70 text-xl font-bold">eGarage</h1>

        <div className="flex items-center space-x-5">
          <ul className="flex space-x-10">
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/garages">Garages</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
          <div>
            <button
              onClick={() => router.push("/register")}
              className="px-5 py-3 bg-[#118024] rounded-xl text-white focus:border-2"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NabBar;
