"use client"

import React, { ReactNode, useRef, useState } from "react"
import { filter, some } from "lodash"

import { CirclePlus, X } from "lucide-react"

import { Input } from "../ui/input"
import { Button } from "../ui/button"

type MultipleTextInputProps = {
  state: string[]
  setState: React.Dispatch<React.SetStateAction<string[]>>
  placeholder?: string
  icon: ReactNode
  message?: string | ReactNode
}

const MultipleTextInput: React.FC<MultipleTextInputProps> = ({
  state,
  setState,
  placeholder,
  icon,
  message,
}) => {
  const myInput = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState("")

  //! ---------- Actions
  const clickAction = () => {
    const isexist = some(state, function (stateVal) {
      return stateVal === value
    })

    if (!isexist && value.length) {
      setState((prev) => [...prev, value])
    }
    setValue("")
    myInput.current?.focus()
  }
  const enterAction = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      e.preventDefault()
      clickAction()
    }
  }
  return (
    <div className="flex flex-col gap-2">
      <div
        onClick={() => myInput.current?.focus()}
        className="min-h-10 relative flex flex-wrap items-center gap-1 m-0 py-1 pr-12 border-2 border-muted rounded-sm cursor-text focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
      >
        <span className="center absolute right-3">
          {value.length ? (
            <Button
              title="اضافه کن"
              variant={"secondary"}
              size={"sm"}
              className="w-7 h-7 p-1"
              onClick={clickAction}
            >
              <CirclePlus className="icon-sm" />
            </Button>
          ) : (
            icon
          )}
        </span>
        {state.length
          ? state.map((item) => (
              <Button
                onClick={(e) => {
                  e.preventDefault()
                  setState((prev) =>
                    filter(prev, function (prevItem) {
                      return prevItem !== item
                    })
                  )
                }}
                key={`multiple-text-${item}`}
                size={"sm"}
                variant={"fill"}
                className="h-7 max-w-52 group"
              >
                <span className="flex-1 truncate">{item}</span>
                <X className="icon btn-icon-r p-1 rounded-sm group-hover:bg-destructive/50 group-hover:text-destructive-foreground" />
              </Button>
            ))
          : null}
        <Input
          placeholder={!state.length ? placeholder : undefined}
          ref={myInput}
          value={value}
          wrapperClassName="h-7 flex-1"
          className="border-none !ring-0 !ring-offset-0 pr-0"
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={enterAction}
        />
      </div>
      {message && typeof message === "string" ? (
        <p className="text-destructive text-xs">{message}</p>
      ) : (
        message
      )}
    </div>
  )
}

export default MultipleTextInput
