export interface IDashboardBanner {}

const DashboardBanner: React.FC<IDashboardBanner> = () => {
  return (
    <div
      className="w-[155%] rounded-md bg-gradient-to-r from-[#118024]/10  to-[#118024]/60
  p-10"
    >
      <h1 className="text-2xl w-[400px] text-[#118024] leading-relaxed">
        A genuine solution to all your vehicle problems
      </h1>
    </div>
  );
};

export default DashboardBanner;
