import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <Layout>
      <h1>jittery coffee shop</h1>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jittery Coffee Shop</title>
        </Helmet>
      </div>
    </Layout>
  )
}
