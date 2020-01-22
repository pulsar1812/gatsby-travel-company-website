import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import SEO from '../components/SEO'
import styles from './error.module.css'

const NotFound = () => {
  return (
    <Layout>
      <SEO title="Not Found" />
      <header className={styles.error}>
        <Banner title="Oops! It's a dead end.">
          <AniLink fade to="/" className="btn-white">
            Back to Home Page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default NotFound
