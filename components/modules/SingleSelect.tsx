import React, { ReactNode, useRef } from "react"

import { cn } from "@/utils/utils.function"

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

export type SingleSelectProps = {
  isOpen?: boolean
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
  trigger: ReactNode
  className?: string
  contentClassName?: string
}

const SingleSelect: React.FC<React.PropsWithChildren<SingleSelectProps>> = ({
  isOpen,
  setIsOpen,
  trigger,
  children,
  className,
  contentClassName,
}) => {
  const myDivRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={myDivRef} className={className}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>{trigger}</PopoverTrigger>
        <PopoverContent
          style={{ width: myDivRef.current?.clientWidth }}
          className={cn("px-3 py-2", contentClassName)}
        >
          {children}
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default SingleSelect
