import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 w-full inset-y-0 fixed z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex flex-col h-full w-56 fixed inset-y-0">
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[80px] h-screen">{children}</main>
    </div>
  );
};

export default DashboardLayout;
