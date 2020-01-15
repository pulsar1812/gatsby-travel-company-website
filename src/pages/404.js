import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import styles from './error.module.css'

const NotFound = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Oops! It's a dead end.">
          <Link to="/" className="btn-white">
            Back to Home Page
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default NotFound
