import React from 'react'
import './Navbar.css'
import {ReactComponent as UpArrow} from '../../images/icon-arrow-up.svg'
import {ReactComponent as DownArrow} from '../../images/icon-arrow-down.svg'
import logo from '../../images/logo.svg'
import navbarItems from './NavbarItems'
function Navbar() {
  return (
    <div className='navbar'>
      {/* Navbar Logo */}
      <div className='navbar__logo'>
        <img src={logo} alt='logo' />
      </div>
      {/* Navbar Items */}
      <div className='navbar__items' >
        {navbarItems.map(item => <div className='navbar__item'>
            {item.text}
             <UpArrow />
            {item?.subitems ? item.subitems.map(item => <p>{item}</p>) : null}
          </div>)}
      </div>
      <div className='navbar-btns'>

      </div>
    </div>
  )
}

export default Navbar