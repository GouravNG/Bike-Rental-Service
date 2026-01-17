import { create } from "zustand"
import { combine, persist } from "zustand/middleware"
import { useShallow } from "zustand/shallow"
export const useCommonStore = create(
  persist(
    combine({ token: null as null | string }, (set) => ({
      setToken: (token: string | null) => set({ token: token }),
    })),
    { name: "common-store" }
  )
)

export const useToken = () =>
  useCommonStore(useShallow(({ setToken, token }) => ({ setToken, token })))
