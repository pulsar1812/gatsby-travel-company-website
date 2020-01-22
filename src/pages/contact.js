import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import Contact from '../components/contact/Contact'
import SEO from '../components/SEO'

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <StyledHero img={data.connectBcg.childImageSharp.fluid} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default ContactPage
