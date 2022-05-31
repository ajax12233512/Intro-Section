import React from 'react'
import './Navbar.css'
import {ReactComponent as UpArrow} from '../../images/icon-arrow-up.svg'
import {ReactComponent as DownArrow} from '../../images/icon-arrow-down.svg'
import logo from '../../images/logo.svg'
import navbarItems from './NavbarItems'
import NavbarSubItems from './NavbarSubItems.jsx'
import { featuresSubitems, companySubitems } from './NavbarSubitems';
import Button from '../Button/Button'

import './Navbar.css'

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
            {item?.subitems ? <NavbarSubItems subitems={item.subitems} /> : null}
          </div>)}
      </div>
      <div className='navbar-btns'>
        <Button text='Login' height='60px' />
        <Button text='Register' height='60px'/>
      </div>
    </div>
  )
}

export default Navbar