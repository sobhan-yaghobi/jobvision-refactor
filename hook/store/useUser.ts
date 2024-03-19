import { users } from "@prisma/client"
import { create } from "zustand"

type TypeUseUser = {
  user: users | null
  setUser: (user: TypeUseUser["user"]) => void
}

const useUser = create<TypeUseUser>((set) => ({
  user: null,
  setUser: (user) => set((prevState) => ({ ...prevState, user })),
}))

export default useUser
