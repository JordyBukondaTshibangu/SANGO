"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { store, AppStore } from "./store";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = store();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
