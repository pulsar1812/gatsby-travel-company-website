import React from 'react'
import Image from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import styles from './blog-card.module.css'

const BlogCard = ({ blog }) => {
  const { title, slug, image, published } = blog

  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image fluid={image.fluid} className={styles.img} alt="single post" />
        <AniLink fade to={`/blog/${slug}`} className={styles.link}>
          Read More
        </AniLink>
        <h6 className={styles.date}>{published}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default BlogCard
