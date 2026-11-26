import { Link, NavLink } from "react-router-dom";
import type { DashboardSidebarMenuItem } from "./DashboardSidebarMenu";

interface SidebarProps {
  menuItems: DashboardSidebarMenuItem[];
}

const Sidebar = ({ menuItems }: SidebarProps) => {
  return (
    <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col bg-[#0F4C81] text-white">
      {/* Logo */}
      <div className="flex h-20 shrink-0 items-center justify-center border-b border-white/10">
        <Link to="/" className="flex items-center justify-center">
          <img
            src="/Laundrix Sparkling Water Drop Logo.png"
            alt="Laundrix"
            className="h-16 mt-2 w-auto max-w-55 object-contain"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white text-[#0F4C81] shadow-sm"
                    : "text-blue-100 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="shrink-0 border-t border-white/10 p-4">
        <p className="text-xs text-blue-200">© 2026 Laundrix</p>
      </div>
    </aside>
  );
};

export default Sidebar;
