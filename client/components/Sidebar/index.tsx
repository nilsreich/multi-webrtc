"use client";
import { Button } from "@/components/ui/button";
import { PanelLeftCloseIcon, PanelLeftOpenIcon } from "lucide-react";
import { useState } from "react";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${isOpen ? "w-[250px]" : "w-[56px]"} border-r  `}>
      <div className="border-b  h-14 p-2">
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <PanelLeftCloseIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          ) : (
            <PanelLeftOpenIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          )}
        </Button>
      </div>
    </div>
  );
};
