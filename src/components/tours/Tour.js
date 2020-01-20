import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { FaMap } from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import styles from './tour.module.css'

// To query for a fallback image file
const getImage = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Tour = ({ tour }) => {
  const data = useStaticQuery(getImage)

  const fallbackImage = data.file.childImageSharp.fluid

  const { name, price, country, days, slug, images } = tour

  // To ensure there is always at least a fallback image
  let mainImage = images ? images[0].fluid : fallbackImage

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single tour" />
        <AniLink fade to={`/tours/${slug}`} className={styles.link}>
          Details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country}
          </h4>
          <div className={styles.detail}>
            <h6>{days} days</h6>
            <h6>From ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}

export default Tour
