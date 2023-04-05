import "./globals.css"

export const metadata = {
  title: "TARIAP",
  description: "Simple pairat particle web application!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
