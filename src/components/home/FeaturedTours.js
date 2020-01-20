import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Tour from '../tours/Tour'
import Title from '../Title'
import styles from './items.module.css'

const getTours = graphql`
  query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const FeaturedTours = () => {
  const res = useStaticQuery(getTours)
  const tours = res.featuredTours.edges

  return (
    <section className={styles.tours}>
      <Title title="Featured" subtitle="Tours" />
      <div className={styles.center}>
        {tours.map(({ node }) => {
          return <Tour key={node.contentful_id} tour={node} />
        })}
      </div>
      <AniLink fade to="/tours" className="btn-primary">
        All Tours
      </AniLink>
    </section>
  )
}

export default FeaturedTours
