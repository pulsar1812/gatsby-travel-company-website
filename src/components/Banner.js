import React from 'react'

import styles from './banner.module.css'

// A reusable banner component
const Banner = ({ title, info, children }) => {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </div>
  )
}

export default Banner
