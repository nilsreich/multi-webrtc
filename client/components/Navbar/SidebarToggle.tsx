"use client";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { useAtom } from "jotai";
import { sidebarOpenAtom } from "@/components/Sidebar/atom";

export const SidebarToggle = () => {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarOpenAtom);

  return (
    <div className="grow ">
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <MenuIcon />
      </Button>
    </div>
  );
};
