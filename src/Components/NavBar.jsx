import React from 'react'
import "./NavBar.css"
import FastfoodIcon from '@material-ui/icons/Fastfood';

export default function NavBar() {
    return (
        <div className="nav-bar">
            <div className="icon">
                <FastfoodIcon />
            </div>
            <div className="nav-links">
                <ul>
                    <li>About&nbsp;Us</li>
                    <li>Our&nbsp;Blog</li>
                    <li>Our&nbsp;Shop</li>
                </ul>
                <button>Order&nbsp;Now</button>
            </div>
        </div>
    )
}
