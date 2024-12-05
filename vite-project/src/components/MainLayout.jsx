import React from 'react'
import {Link } from "react-router-dom"
import "./MainLayout.css"

function MainLayout() {
  return (
    <div className="aa">
      <h1>Welcome to Main Layout</h1>
      <nav>
        <ul>
            <li> <Link to="/login">LOGIN</Link></li>
            <li> <Link to="/registration">REGISTRATION</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default MainLayout
