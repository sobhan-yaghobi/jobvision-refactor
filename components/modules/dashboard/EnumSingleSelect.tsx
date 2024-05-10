import { ReactNode, useState } from "react"
import { cn } from "@/utils/utils.function"

import { cooperation_type, gender, seniority_level } from "@prisma/client"

import { CheckIcon } from "lucide-react"

import SingleSelect from "../SingleSelect"

type EnumSingleSelectProps = {
  state: TypeMainSelect
  setState: React.Dispatch<React.SetStateAction<TypeMainSelect>>
  icon: ReactNode
  items: TypeMainSelect[]
  placeholder: string
  message?: string | ReactNode
}

export type TypeMainSelect = {
  type: gender | seniority_level | cooperation_type
  name: string
}

const EnumSingleSelect: React.FC<EnumSingleSelectProps> = ({
  state,
  setState,
  icon,
  items,
  placeholder,
  message,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col gap-2">
      <SingleSelect
        className="w-full h-10"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        trigger={
          <div
            role="combobox"
            aria-expanded={isOpen}
            aria-controls="joketypes"
            className={`h-full relative flex items-center pr-12 border-2 border-muted rounded-sm cursor-pointer`}
          >
            <span className="absolute right-3">{icon}</span>
            <span className="text-muted-foreground text-sm">{state.name ?? placeholder}</span>
          </div>
        }
      >
        {items.map((item) => (
          <div
            key={item.type}
            className="flex my-1 py-2 rounded-md cursor-pointer hover:bg-muted"
            onClick={() => {
              setState(item)
              setIsOpen(false)
            }}
          >
            <CheckIcon
              className={cn(
                "icon btn-icon btn-icon-l",
                state.type === item.type ? "opacity-100" : "opacity-0"
              )}
            />
            {item.name}
          </div>
        ))}
      </SingleSelect>
      {message && typeof message === "string" ? (
        <p className="text-destructive text-xs">{message}</p>
      ) : (
        message
      )}
    </div>
  )
}

export default EnumSingleSelect
