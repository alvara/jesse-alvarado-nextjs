import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light border-bottom">
    <div className="container">
     <Link href="/"><a className="navbar-brand">Jesse Alvarado</a></Link>
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar" aria-controls="collapseNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapseNavbar">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                    <Link href="/#about"><a className="nav-link"  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/#portfolio"><a className="nav-link"  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Portfolio</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/blog"><a className="nav-link"  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Blog</a></Link>
                </li>
            </ul>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link href="https://github.com/alvara"><a className="nav-link" target={'_blank'} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Github</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="https://www.linkedin.com/in/jesse-alvarado/"><a className="nav-link" target={'_blank'} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">LinkedIn</a></Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}
