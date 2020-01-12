import React, { useState } from 'react'
import { Link, useStaticQuery } from 'gatsby'
import { FaAlignRight } from 'react-icons/fa'

import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import logo from '../images/logo.svg'
import styles from './navbar.module.css'

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="Backroads Logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>

        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.path}>{link.text}</Link>
              </li>
            )
          })}
        </ul>

        <div className={styles.navSocialLinks}>
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
      </div>
    </nav>
  )
}

export default Navbar
