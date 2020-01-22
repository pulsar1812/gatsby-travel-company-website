import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from '../components/Layout'
import BlogCard from '../components/blog/BlogCard'
import Title from '../components/Title'
import SEO from '../components/SEO'
import styles from './blog-list-template.module.css'

const blogListTemplate = props => {
  const { currentPage, numPages } = props.pageContext
  const { data } = props

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const prevPage =
    currentPage - 1 === 1 ? `/blogs` : `/blogs/${currentPage - 1}`
  const nextPage = `/blogs/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Blogs" />
      <section className={styles.blog}>
        <Title title="Latest" subtitle="Posts" />
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => {
            return <BlogCard key={node.id} blog={node} />
          })}
        </div>
        <section className={styles.links}>
          {!isFirst && (
            <AniLink fade to={prevPage} className={styles.link}>
              Prev
            </AniLink>
          )}
          {Array.from({ length: numPages }, (_, i) => {
            return (
              <AniLink
                fade
                to={`/blogs/${i === 0 ? '' : i + 1}`}
                key={i}
                className={
                  i + 1 === currentPage
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                {i + 1}
              </AniLink>
            )
          })}
          {!isLast && (
            <AniLink fade to={nextPage} className={styles.link}>
              Next
            </AniLink>
          )}
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          id: contentful_id
          published(formatString: "MMMM Do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default blogListTemplate
