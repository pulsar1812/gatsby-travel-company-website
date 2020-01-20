import React from 'react'

import Title from '../Title'
import services from '../../constants/services'
import styles from './services.module.css'

const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="Our" subtitle="Services" />
      <div className={styles.center}>
        {services.map((service, index) => {
          return (
            <article key={index} className={styles.service}>
              <span>{service.icon}</span>
              <h4>{service.title}</h4>
              <p>{service.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
