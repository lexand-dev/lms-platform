import { Layout, type LucideIcon } from "lucide-react";

interface Route {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const ROUTES: Route[] = [
  {
    icon: Layout,
    label: "Home",
    href: "/"
  },
  {
    icon: Layout,
    label: "Browser",
    href: "/search"
  }
];
