import React from 'react'
import styles from "./Header.module.css"
import NavHeader from '../NavHeader';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
        <Link to= "/">
        <img src= "/img/LogoMain.png" alt="logo" />
        </Link>
        <nav className={styles.navBar}>
            <NavHeader url = "/">
                Home
            </NavHeader>
            <NavHeader url = "/Newvideo">
                Nuevo Video
            </NavHeader>
        </nav>
    </header>
    
  )
}

export default Header;