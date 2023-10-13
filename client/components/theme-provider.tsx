"use client";
import { Provider, createStore, atom } from "jotai";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
const myStore = createStore()

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <Provider store={myStore}>{children}</Provider>
    </NextThemesProvider>
  );
}
