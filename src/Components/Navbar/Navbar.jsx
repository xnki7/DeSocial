import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='Navbar'>
      <div className="top">
        <div className="logo"></div>
        <p className="navBtn">Home</p>
        <p className="navBtn">Bookmark</p>
        <p className="navBtn">Profile</p>
      </div>
      <div className="bottom">
        <button>Connect Wallet</button>
      </div>
    </div>
  )
}

export default Navbar