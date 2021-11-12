import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo.svg'
import { FaCartArrowDown } from 'react-icons/fa'

const obj = [
  { id: 1, path: '/', text: 'home' },
  { id: 2, path: '/about', text: 'about' },
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [css, setCss] = useState('collapse navbar-collapse')
  const [links, setLinks] = useState(obj)

  const navbarHandler = () => {
    console.log('hello')
  }
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <h1>Navbar Content</h1>
    </nav>
  )
}

export default Navbar
