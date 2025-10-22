"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 z-40 p-8 flex gap-8 text-white text-sm tracking-widest">
      <Link href="#" className="hover:text-copper transition-colors">
        Work
      </Link>
      <Link href="#" className="hover:text-copper transition-colors">
        About
      </Link>
      <Link href="#" className="hover:text-copper transition-colors">
        Contact
      </Link>
    </nav>
  )
}
