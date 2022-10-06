import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {links} from '../data'
import Logo from '../images/Logo_coloured.png'
import { MdOutlineClose } from 'react-icons/md'
import {GoThreeBars} from 'react-icons/go'
import './navbar.css'


const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
  return (
      <nav>
          <div className="container nav__container">
              <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                    <img src={Logo} alt="Nav Logo" />
              </Link>
              <ul class={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                  {
                      links.map(({ name, path }, index) => {
                      return (
                          <li key={index}>
                              <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ' '} onClick={()=> setIsNavShowing (prev => !prev)}>{name}</NavLink>
                          </li>
                        )
                  })
                  }
                  <div className="nav__btn">
                  <button className='login-btn'>Log In</button>
              <button className='register-btn'>Register</button>
              </div>
              </ul>
              
              
              <button className='nav__toggle-btn' onClick={()=> setIsNavShowing (prev => !prev)}>
                  {
                      isNavShowing ? <MdOutlineClose/> : <GoThreeBars/>
                  }
                  </button>
          </div>
    </nav>
  )
}

export default Navbar