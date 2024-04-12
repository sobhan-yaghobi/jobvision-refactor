import Title from "@/components/modules/Title"
import { Button } from "@/components/modules/ui/button"
import { Menu, Rocket } from "lucide-react"
import Link from "next/link"
import React from "react"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-3 shadow-lg relative z-20">
      <Button title="منو" size={"sm"} variant={"fill"}>
        <Menu className="icon" />
      </Button>
      <Link href={"/"}>
        <Title size={"md"} className="text-primary w-auto">
          <h2>جاب ویژن</h2>
        </Title>
      </Link>
      <Button title="دسترسی سریع" size={"sm"} variant={"fill"}>
        <Rocket className="icon" />
      </Button>
    </div>
  )
}

export default Navbar
