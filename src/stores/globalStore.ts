"use client"

import { create } from "zustand"

const useGlobalStore = create((set) => ({
    count: 0,
    setCount: () => set((state) => { count: state.count }),
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export default useGlobalStore;
