import { Button } from "@/components/modules/ui/button"
import { DoorOpen, LogOut } from "lucide-react"
import Link from "next/link"
import React from "react"

const QuickAccess = () => {
  return (
    <div className="">
      <div className="flex justify-end gap-3">
        <Link href={"/"}>
          <Button variant={"outline"} aria-label="خررج از داشبورد" title="خروج از داشبورد">
            <DoorOpen className="icon" />
          </Button>
        </Link>
        <Button variant={"destructiveOutline"} aria-label="خروج از حساب" title="خروج از حساب">
          <LogOut className="icon rotate-180" />
        </Button>
      </div>
    </div>
  )
}

export default QuickAccess
