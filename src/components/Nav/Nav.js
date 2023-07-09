import React from 'react'
import logo from './image-nav/Frame 2 1.png';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.navigation}>
        <div className='logo'>
            <img src={logo} alt='do some coding logo'/>
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Nav