"use client";

import { ROUTES } from "@/config/routes";
import { SidebarItem } from "./sidebar-item";

export const SidebarRoutes = () => {
  return (
    <nav className="flex flex-col w-full">
      {ROUTES.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </nav>
  );
};
