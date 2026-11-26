import { Outlet } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import { dashboardSidebarMenu } from "../components/dashboard/DashboardSidebarMenu";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar menuItems={dashboardSidebarMenu} />

      {/* Main Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Header */}
        <DashboardHeader
          title="Dashboard"
          breadcrumb="Overview"
          userName="Alwansky"
          userRole="Worker"
        />

        {/* Page Content */}
        <main className="flex-1 p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;