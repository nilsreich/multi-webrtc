import { LangToggle } from "@/components/Navbar/LangToggle";
import { ModeToggle } from "@/components/Navbar/ModeToggle";
import { SidebarToggle } from "@/components/Navbar/SidebarToggle";

export const Navbar = () => {
  return (
    <nav className="flex gap-2  p-2 border-b w-full items-center justify-start">
      <SidebarToggle />
      <ModeToggle />
      <LangToggle />
    </nav>
  );
};
