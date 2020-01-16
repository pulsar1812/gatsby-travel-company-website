import React from 'react'

import Title from './Title'
import img from '../images/defaultBcg.jpeg'
import styles from './about.module.css'

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="About Company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            maxime earum amet?
          </p>
          <button type="button" className="btn-primary">
            Read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
