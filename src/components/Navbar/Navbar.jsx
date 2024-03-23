import React, { useState } from 'react'
import './navbar.scss'

export default function Navbar() {
    const [open , setOpen] = useState(false)



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

            <img src="/menu.png" alt="" className="menuIcon" onClick ={()=>setOpen((prev)=>!open)} />
            <div className={open ? "menulist active" : "menulist"}>
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
            <a href="/">
                Sign in
            </a>
            <a href="/">
                Sign up
            </a>
        </div>
        </div>

        
    </nav>
  )
}
