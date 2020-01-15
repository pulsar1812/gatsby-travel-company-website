import React from 'react'
import { Link } from 'gatsby'

import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((link, index) => {
          return (
            <Link key={index} to={link.path}>
              {link.text}
            </Link>
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
        Copyright &copy; Backroads Travel Ltd. {new Date().getFullYear()} All
        Rights Reversed{' '}
      </div>
    </footer>
  )
}

export default Footer
