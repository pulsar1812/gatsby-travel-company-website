import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((link, index) => {
          return (
            <AniLink fade key={index} to={link.path}>
              {link.text}
            </AniLink>
          )
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((socialIcon, index) => {
          return (
            <a
              key={index}
              href={socialIcon.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {socialIcon.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        Copyright &copy; Travel Corp. {new Date().getFullYear()} All Rights
        Reserved{' '}
      </div>
    </footer>
  )
}

export default Footer
