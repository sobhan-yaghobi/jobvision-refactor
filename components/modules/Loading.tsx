"use client"

import React from "react"
import { Dialog, DialogContent } from "./ui/dialog"
import Title from "./Title"
import { PuffLoader } from "react-spinners"

export default function Loading() {
  return (
    <Dialog open>
      <DialogContent className="w-32 border-none" isCloseHidden>
        <div className="center flex-col">
          <Title className="text-primary text-center mb-4">
            <span>جاب ویژن</span>
          </Title>
          <PuffLoader className="w-full center" speedMultiplier={1.5} size="30px" color="#5660f2" />
        </div>
      </DialogContent>
    </Dialog>
  )
}
