"use client";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { useSetAtom } from "jotai";
import { isOpenAtom } from "@/components/Sidebar/atom";

export const SidebarToggle = () => {
  const toggle = useSetAtom(isOpenAtom);

  return (
    <div className="grow ">
      <Button variant={"outline"} size={"icon"} onClick={()=>toggle()}>
        <MenuIcon />
      </Button>
    </div>
  );
};
