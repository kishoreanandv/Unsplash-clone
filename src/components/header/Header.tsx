import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
// import logo from '../../assets/logo.png'
const logo = require("../../assets/logo.png")


const Header = ({ imageClickHandler}:any) => {
  return (
    <header>  
      <Link to='/'>
      <img onClick={ imageClickHandler} className='logo' src={logo} alt='logo' />
      </Link>
      
      <div className='navbar'>       
        <ul>          
          <Link to='/signup'><li>SignUp</li></Link>
          <Link to='/login'><li>Login</li></Link>
        </ul>          
        
      </div> 
      
      
    </header>
   
    
  )
}

export default Header 