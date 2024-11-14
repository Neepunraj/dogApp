import React from 'react'

/* This is the Header section with simple demonstraction of the navbar each menu items are mapped into a li hamburger menu can also be implement for the small screen */
const menuList = [
    'Home',
    'About',
    'Services',
    'Gallery',
    'Contact'
  ];
const Header = () => {
  return (
    
     <nav className='container'>
        <div className="logo">
           <img src="/images/logo.png" alt="logo" className='logoImg' />
        </div>
        <ul>
            {
                menuList.map(menuItem=>
                    <li>{menuItem}</li>
                )
            }
            
        </ul>
        <button>Login</button>
     </nav>
     
    
  )
}

export default Header
