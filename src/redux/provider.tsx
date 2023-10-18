"use client"

import { store } from "./store";
import { Provider } from "react-redux";

type ProviderProps = {
  children: React.ReactNode
};

export function ReduxProvider({ children }: ProviderProps) {
  return <Provider store={store}>{children}</Provider>
}