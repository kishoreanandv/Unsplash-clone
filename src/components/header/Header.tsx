import React from 'react'
import './Header.css'
import logo from '../../logo.png'

const Header = ({ imageClickHandler}) => {
  return (
    <header>      
      <img onClick={ imageClickHandler} className='logo' src={logo} alt='logo' />
      <div className='buttons'>
        <button>Travel</button>
        <button>Animals</button>
        <button>Nature</button>
        <button>SignUp</button>
        <button>Login</button>
      </div>      
    </header>
  )
}

export default Header 