import { UserButton } from "@clerk/nextjs";

export const NavbarRoutes = () => {
  return (
    <div className="ml-auto gap-x-2 flex">
      <UserButton />
    </div>
  );
};
