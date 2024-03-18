import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/modules/Header/Header"
import Footer from "@/components/modules/Footer"
import addInitalDataAction from "./action/addInitalDataToDb"

export const metadata: Metadata = {
  title: "Clone Jobvison Website",
  description: "Made With Hearth 🧡 In Iran",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  await addInitalDataAction()
  return (
    <html lang="en" dir="rtl">
      <body>
        <Header />
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
