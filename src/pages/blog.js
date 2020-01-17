import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const BlogPage = () => {
  return (
    <Layout>
      Blog Page
      <Link to="/">Back Home</Link>
    </Layout>
  )
}

export default BlogPage
