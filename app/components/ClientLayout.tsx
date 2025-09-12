'use client'

import { useState, useEffect } from "react"
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Loader from './Loader/Loader'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {isLoading ? (
        <Loader onLoadComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </>
  )
}