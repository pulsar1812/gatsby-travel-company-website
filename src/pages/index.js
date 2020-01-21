import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import About from '../components/home/About'
import Services from '../components/home/Services'
import FeaturedTours from '../components/home/FeaturedTours'

const HomePage = ({ data }) => {
  return (
    <Layout>
      <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="Explore Endless Possibilities"
          info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          dolorem minus nobis itaque, aperiam aspernatur neque."
        >
          <AniLink fade to="/tours" className="btn-white">
            Explore Tours
          </AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Services />
      <FeaturedTours />
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default HomePage
