import React from 'react'
import Layout from '../components/layout'
import '../components/layout.css'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import logo from '../images/jittery-logo.png'
import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from '../components/Home/Info'

export default function Home({ data }) {
  return (
    <Layout>
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title=""
        styleClass="default-background"
      >
        <img className="logo-landing" src={logo} alt="logo-landing" />
        <h2>Welcome to Jittery!</h2>
        <h5>A shot of jitters to feed your focus.</h5>
        <div className="application">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Jittery Coffee Shop</title>
          </Helmet>
        </div>
      </BackgroundSection>
      <Info />
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
