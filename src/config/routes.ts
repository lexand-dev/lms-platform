import { BarChart, Compass, Layout, List, type LucideIcon } from "lucide-react";

interface Route {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const guestRoutes: Route[] = [
  {
    icon: Layout,
    label: "Home",
    href: "/"
  },
  {
    icon: Compass,
    label: "Browser",
    href: "/search"
  }
];

export const teacherRoutes: Route[] = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses"
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics"
  }
];
