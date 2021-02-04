import React from 'react'
import "./AppBody.css"
import MainBody from './MainBody'
import NavBar from './NavBar'

function AppBody() {
    return (
        <div className="app-body">
            <NavBar/>
            <MainBody />
        </div>
    )
}

export default AppBody
