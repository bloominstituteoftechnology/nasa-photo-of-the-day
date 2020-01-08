import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import { MenuData } from './MenuData';


const Nav = () => {
   const [open, setOpen] = useState(true)

  console.warn('state', open)

  return (

    <div className='NavBar'>
      {/* <div className='logo'><img src={} /></div> */}
      {/* <div className="search"><input type="search" results="5" name="s" placeholder="Search" /></div> */}
        <div className="container">
            <div className="menu-button" onClick={() => setOpen(!open)}>
              <i className="fas fa-bars"></i>
            </div>
            {/* Sidebar */ }
              {MenuData.length && (
                <nav className= { `nav ${open ? 'hide' : 'show'}` }><ul className="menu-items">
                  {MenuData.map( item => (
                    <li className="menu-list" key={item.label}>
                      <Link className="menu-link" to={item.url}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
                </nav>
              )}
        </div>
    </div>
  );
};

export default Nav;