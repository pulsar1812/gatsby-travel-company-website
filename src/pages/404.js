import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import styles from './error.module.css'

const NotFound = () => {
  return (
    <Layout>
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
