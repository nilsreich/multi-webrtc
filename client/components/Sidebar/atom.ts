import { WritableAtom, atom } from "jotai";

 function atomWithToggle(
  initialValue?: boolean
): WritableAtom<boolean, (boolean | undefined)[], void> {
  const anAtom = atom(initialValue, (get, set, nextValue?: boolean) => {
    const update = nextValue ?? !get(anAtom);
    set(anAtom, update);
  });

  return anAtom as WritableAtom<boolean, (boolean | undefined)[], void>;
}
 export const isOpenAtom = atomWithToggle(true)

