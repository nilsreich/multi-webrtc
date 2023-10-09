import { sidebarOpenAtom } from "./atom";

export const Sidebar = () => {

  return (
    <div className={`${sidebarOpenAtom ? "block" : "hidden"} border-r w-[250px]`}>
      asdasd
    </div>
  );
};
