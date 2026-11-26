import { Bell, ChevronDown } from "lucide-react";

interface DashboardHeaderProps {
  title: string;
  breadcrumb?: string;
  userName?: string;
  userRole?: string;
}

const DashboardHeader = ({
  title,
  breadcrumb,
  userName = "Alwansky",
  userRole = "Worker",
}: DashboardHeaderProps) => {
  return (
    <header className="sticky top-0 z-30 flex h-20 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6 md:px-8">
      {/* Page Information */}
      <div>
        <div className="mb-1 flex items-center gap-2 text-sm text-slate-500">
          <span>Laundrix</span>

          {breadcrumb && (
            <>
              <span>/</span>
              <span>{breadcrumb}</span>
            </>
          )}
        </div>

        <h1 className="text-xl font-semibold text-slate-900">
          {title}
        </h1>
      </div>

      {/* Header Actions */}
      <div className="flex items-center gap-3 md:gap-6">
        {/* Notification */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
        >
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* User Profile */}
        <button
          type="button"
          className="flex items-center gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-slate-50"
        >
          {/* Avatar */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-[#0F4C81]">
            {userName.charAt(0).toUpperCase()}
          </div>

          {/* User Information */}
          <div className="hidden text-left sm:block">
            <p className="text-sm font-medium text-slate-900">
              {userName}
            </p>

            <p className="text-xs text-slate-500">
              {userRole}
            </p>
          </div>

          <ChevronDown
            size={16}
            className="text-slate-400"
          />
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;