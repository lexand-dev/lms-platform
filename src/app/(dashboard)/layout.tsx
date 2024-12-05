const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex flex-col h-full w-56 fixed inset-y-0"></div>
      {children}
    </div>
  );
};

export default DashboardLayout;
