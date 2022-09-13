import dynamic from "next/dynamic";

const GarageOwnerLoginForm = dynamic(
  () => import("../../components/forms/OwnerLoginForm")
);

function GarageOwnerLogin() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#F6FBF2]">
      <GarageOwnerLoginForm />
    </div>
  );
}

export default GarageOwnerLogin;
