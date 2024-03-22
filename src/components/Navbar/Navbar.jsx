import React from 'react'
import './navbar.scss'

export default function Navbar() {
  return (
    <nav>
        <div className="left">
            <a href="/" className='Logo'>
                <img src="/logo.png" alt="" className="logo" />
                <span>RealEstate</span>
            </a>
            <a href="/">
                Home
            </a>
            <a href="/">
                About
            </a>
            <a href="/">
                Contact
            </a>
            <a href="/">
                Agents
            </a>
        </div>
        <div className="right">
            <a href="" className="signin">Sign in</a>
            <a href="" className="signup">Sign up</a>
        </div>
    </nav>
  )
}
