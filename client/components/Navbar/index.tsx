import { LangToggle } from "@/components/Navbar/LangToggle";
import { ModeToggle } from "@/components/Navbar/ModeToggle";

export const Navbar = () => {
  return (
    <nav className="flex gap-2  p-2 border-b w-full items-center justify-end h-14">
      <ModeToggle />
      <LangToggle />
    </nav>
  );
};
