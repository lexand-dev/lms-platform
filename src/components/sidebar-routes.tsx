"use client";

import { guestRoutes, teacherRoutes } from "@/config/routes";
import { SidebarItem } from "@/components/sidebar-item";
import { usePathname } from "next/navigation";

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <nav className="flex flex-col w-full">
      {routes.map((route) => (
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
