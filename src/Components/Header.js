import React from 'react'
import "./header.css"
import logo from"../image/d.png"
const Header = () => {
    return (
        <div className="header">
    <img src={logo} alt=""  />
    <p> KEEPER</p>
        </div>
    )
}

export default Header
