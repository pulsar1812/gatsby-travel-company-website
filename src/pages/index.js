import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'

const HomePage = () => {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="Continue exploring"
          info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          dolorem minus nobis itaque, aperiam aspernatur neque."
        >
          <Link to="/tours" className="btn-white">
            Explore Tours
          </Link>
        </Banner>
      </SimpleHero>
    </Layout>
  )
}

export default HomePage
