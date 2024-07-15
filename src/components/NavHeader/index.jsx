import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./NavHeader.module.css"

const NavHeader = ({url, children}) => {
  return (
    
        <Link to={url} className={styles.link}>
            {children}
        </Link>
      
  )
}

export default NavHeader;