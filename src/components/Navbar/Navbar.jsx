import React from 'react';
import style from './Navbar.module.scss';


const Navbar = () => {
  return (
    <div className={style.navbar}>
        <div className={style.navbarContainer}>
            <span className={style.logo}>Booking.com</span>
            <div className={style.navItems}>
                <span className={style.navSpan}>Cur</span>
                <span className={style.navSpan}>Lang</span>
                <button className={style.navButton}>Register</button>    
                <button className={style.navButton}>Login</button>    
            </div>    
        </div>
    </div>
  )
}
export default Navbar;
