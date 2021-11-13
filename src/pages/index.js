import React from 'react'
import Layout from '../components/layout'
import '../components/layout.css'
import { Helmet } from 'react-helmet'
import {graphql} from 'gatsby'
// import { FaCoffee } from 'react-icons/fa'
import logo from '../images/jittery-logo.png'

export default function Home({data}) {
  return (
    <Layout>
      <img className="logo-landing" src={logo} alt="logo-landing" />
      <h3>Welcome to Jittery!</h3>
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

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childrenImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
