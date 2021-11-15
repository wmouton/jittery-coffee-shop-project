import React from 'react'
import Layout from '../components/layout'
import '../components/layout.css'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from '../components/Home/Info'

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jittery Coffee Shop</title>
        </Helmet>
      </div>
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="About Us"
        styleClass="about-background"
      />
      <Info />
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default AboutPage
