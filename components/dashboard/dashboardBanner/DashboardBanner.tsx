export interface IDashboardBanner {}

const DashboardBanner: React.FC<IDashboardBanner> = () => {
  return <div className="border-2 md:h-48 md:w-[100vh] bg-white">
    <h1 className="text-6xl w-auto text-green">A genuine solution to all your vehicle problems</h1>
  </div>;
};

export default DashboardBanner;
