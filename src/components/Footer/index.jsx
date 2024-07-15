import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div>
        <footer className={styles.footer}>
            <img src="/img/LogoMain.png" alt="logoFooter" />
            <strong>| Desarrollado por Sergio Chávez</strong>
        </footer>
    </div>
  )
}

export default Footer;