'use client'
import { isOpenAtom } from "./atom";
import { useAtom } from 'jotai'

export const Sidebar = () => {
  const [sidebar] = useAtom(isOpenAtom)
  return (
    <div className={`${sidebar ? "block" : "hidden"} border-r w-[250px]`}>
      asdasd
    </div>
  );
};
