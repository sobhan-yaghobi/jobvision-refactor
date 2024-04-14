import { user } from "@/types/utils.type"
import { create } from "zustand"

type TypeUseUser = {
  user: user | null
  setUser: (user: TypeUseUser["user"]) => void
}

const useUser = create<TypeUseUser>((set) => ({
  user: null,
  setUser: (user) => set((prevState) => ({ ...prevState, user })),
}))

export default useUser
