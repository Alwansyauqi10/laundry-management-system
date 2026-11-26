import {
  ClipboardCheck,
  Shirt,
  Truck,
} from "lucide-react";

export const dashboardSidebarMenu = [
  {
    label: "Attendance",
    path: "/attendance",
    icon: ClipboardCheck,
  },
  {
    label: "Worker Management",
    path: "/workers",
    icon: Shirt,
  },
  {
    label: "Driver Management",
    path: "/drivers",
    icon: Truck,
  },
];

export type DashboardSidebarMenuItem = {
  label: string;
  path: string;
  icon: React.ComponentType<{
    size?: number;
    className?: string;
  }>;
};