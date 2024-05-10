import React, { ReactNode, useRef, useState } from "react"

import { Tags } from "lucide-react"

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

type MultipleTagsSelectProps = {
  trigger: ReactNode
  placeholder?: string
  message?: string | ReactNode
}

const MultipleTagsSelect: React.FC<React.PropsWithChildren<MultipleTagsSelectProps>> = ({
  trigger,
  children,
  message,
}) => {
  const myDivRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col gap-2">
      <div ref={myDivRef} className="w-full">
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <div
              role="combobox"
              aria-expanded={isOpen}
              aria-controls="joketypes"
              className={`min-h-10 relative flex items-center flex-wrap gap-1 py-1 pr-12 border-2 border-muted rounded-sm cursor-pointer`}
            >
              <Tags className="icon-stroke-light absolute right-3" />
              {trigger}
            </div>
          </PopoverTrigger>
          <PopoverContent style={{ width: myDivRef.current?.clientWidth }} className="px-3 py-2">
            {children}
          </PopoverContent>
        </Popover>
      </div>
      {message && typeof message === "string" ? (
        <p className="text-destructive text-xs">{message}</p>
      ) : (
        message
      )}
    </div>
  )
}

export default MultipleTagsSelect
