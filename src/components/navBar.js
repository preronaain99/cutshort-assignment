import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import navbarLogo from '../assets/navbarLogo.png';
import "../../src/styles.css"
export default function Navbar() {
  return (
    <div>
    <nav className="nav">
      <Link to="/" >
        <img className='photo'
        src= {navbarLogo }
        />
      </Link>
      <ul>
        <CustomLink to="/blog">Blog</CustomLink>
        <CustomLink to="/about">About Us</CustomLink>
        <CustomLink to="/technology">Technology</CustomLink>
        <CustomLink to="/demo">Demo</CustomLink>
      </ul>
    </nav>
    </div>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}