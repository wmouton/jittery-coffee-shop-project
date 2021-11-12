import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo.svg'
import { FaCartArrowDown } from 'react-icons/fa'

export default class Navbar extends React.Component {
  state = {
    navbarOpen: false,
    css: 'collapse navbar-collapse',
    links: [
      { id: 1, path: '/', text: 'home' },
      { id: 2, path: '/about', text: 'about' },
    ],
  }

  navbarHandler = () => {
    console.log('hello')
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}
