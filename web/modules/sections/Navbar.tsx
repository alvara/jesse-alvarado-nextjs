import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
    <div className="container-fluid">
     <Link href="/"><a className="navbar-brand">Jesse Alvarado</a></Link>
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar" aria-controls="collapseNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapseNavbar">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                    <Link href="/#about"><a className="nav-link">About</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/#portfolio"><a className="nav-link">Portfolio</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/blog"><a className="nav-link">Blog</a></Link>
                </li>
            </ul>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link href="/#about"><a className="nav-link">Github</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/#about"><a className="nav-link">LinkedIn</a></Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

    // <nav>
    //   {/* logo */}
    //   <Link href="/">Jesse Alvarado</Link>

    //   {/* menu */}
    //   <div>
    //     
    //     
    //     
    //   </div>

    //   {/* socials */}
    //   <div>
    //   
    //   
    //   </div>
    // </nav>