import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <h1 className="text-3xl font-bold text-orange-300">LMS</h1>
        <p className="text-base text-muted-foreground">
          Learning Management System
          <UserButton />
        </p>
      </div>
    </div>
  );
}