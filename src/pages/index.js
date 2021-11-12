import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import { FaCoffee } from 'react-icons/fa'

export default function Home() {
  return (
    <Layout>
      <h2>Welcome to Jittery!</h2>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jittery Coffee Shop</title>
        </Helmet>
      </div>
      <FaCoffee />
    </Layout>
  )
}
