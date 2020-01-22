import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import Contact from '../components/contact/Contact'

const ContactPage = ({ data }) => {
  return (
    <Layout>
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
