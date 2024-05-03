import React from "react"
import Footer from "@/components/modules/Footer"
import Header from "@/components/template/Header/Header"

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
