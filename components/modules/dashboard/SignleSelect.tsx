import { ReactNode, useRef, useState } from "react"

import { cooperation_type, gender, seniority_level } from "@prisma/client"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type SingleSelectProps = {
  state: TypeMainSelect
  setState: React.Dispatch<React.SetStateAction<TypeMainSelect>>
  placeholder: string
  icon: ReactNode
  items: TypeMainSelect[]
}
export type TypeMainSelect = {
  type: gender | seniority_level | cooperation_type
  name: string
}
const SingleSelect: React.FC<SingleSelectProps> = ({
  placeholder,
  icon,
  items,
  state,
  setState,
}) => {
  const myDivRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div ref={myDivRef} className="w-full h-10">
      <Popover>
        <PopoverTrigger asChild>
          <div
            role="combobox"
            aria-expanded={isOpen}
            className={`h-full relative flex items-center pr-12 border-2 border-muted rounded-sm cursor-pointer`}
          >
            <span className="absolute right-3">{icon}</span>
            <span className="text-muted-foreground text-sm">{state.name ?? placeholder}</span>
          </div>
        </PopoverTrigger>
        <PopoverContent style={{ width: myDivRef.current?.clientWidth }} className="px-3 py-2">
          {items.map((item) => (
            <div
              key={item.type}
              className="flex my-1 py-2 cursor-pointer rounded-md hover:bg-muted"
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
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default SingleSelect
