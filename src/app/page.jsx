"use client"

import { useEffect, useState } from "react"
import Loader from "@/components/loader"
import Navbar from "@/components/navbar"
import Slide1 from "@/components/slides/slide-1"
import Slide2 from "@/components/slides/slide-2"
import Slide3 from "@/components/slides/slide-3"
import Slide4 from "@/components/slides/slide-4"
import Footer from "@/components/Footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <Loader />}
      <div className={`transition-opacity duration-1000 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <Navbar />
        <main className="scroll-smooth">
          <div id="home">
            <Slide1 />
          </div>
          <div id="about">
            <Slide2 />
          </div>
          <div id="work">
            <Slide3 />
          </div>
          <div id="contact">
            <Slide4 />
          </div>
          <Footer />
        </main>
      </div>
    </>
  )
}
