import React from 'react'
import './Navbar.css'
import profile from '../../assets/profile.png'
import menu from '../../assets/menu.png'

const Navbar = () => {
  return (    
        <div className="nav-bar">
            <div className="logo-and-links">
                <div className="logo">
                    <h1 className="company-name">zyska</h1>           
                </div>
                <ul className="nav-links">                    
                    <li className='link_item'>
                            Home
                    </li>
                    
                    <li>
                        <select className='dropdown'>
                            <option>Products</option>
                        </select>
                    </li>
                    <li>
                        <select className='dropdown'>
                            <option>Resources</option>
                        </select>
                    </li>
                    
                        <li className='link_item'>
                            <option >Pricing</option>
                        </li>
                                                       
                </ul>
            </div>
          
          <div className="Responsive-image">                        
          </div>
        </div>    
  )
}

export default Navbar