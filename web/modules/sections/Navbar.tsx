import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
      {/* logo */}
      <div>Jesse Alvarado</div>

      {/* menu */}
      <div>
        <Link href="/#about"><a>About</a></Link>
        <Link href="/#portfolio"><a>Portfolio</a></Link>
      </div>

      {/* socials */}
      <div>
      <Link href="/#about"><a>Github</a></Link>
      <Link href="/#about"><a>LinkedIn</a></Link>
      </div>
    </nav>
  )
}
