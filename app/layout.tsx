import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/modules/Header/Header"

export const metadata: Metadata = {
  title: "Clone Jobvison Website",
  description: "Made With Hearth 🧡 In Iran",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <Header />
        <div className="container">{children}</div>
      </body>
    </html>
  )
}
