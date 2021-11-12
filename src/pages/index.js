import React from 'react'
import Layout from '../components/layout'
import '../components/layout.css'
import { Helmet } from 'react-helmet'
// import { FaCoffee } from 'react-icons/fa'
import { Link } from 'gatsby'
import logo from '../images/jittery-logo.png'

export default function Home() {
  return (
    <Layout>
      <Link to="/" className="navbar-brand">
        <img className="logo-landing" src={logo} alt="logo-landing" />
      </Link>
      <h2>Welcome to Jittery!</h2>
      <h6>A shot of jitters to feed your focus.</h6>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jittery Coffee Shop</title>
        </Helmet>
      </div>
      {/* <FaCoffee /> */}
    </Layout>
  )
}
