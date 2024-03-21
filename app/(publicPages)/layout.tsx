import Footer from "@/components/modules/Footer"
import Header from "@/components/modules/Header/Header"
import React from "react"

const layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </div>
  )
}

export default layout
