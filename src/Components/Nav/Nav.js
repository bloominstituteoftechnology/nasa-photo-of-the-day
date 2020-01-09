import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import './Nav.scss';
// import { MenuData } from './MenuData';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';


const Navigation = (props) => {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  //  const [open, setOpen] = useState(true)

  // console.warn('state', open)

  return (
    <div>
    <Navbar color="faded" dark>
     <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="./MarsRover">Mars Rover</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>


    // <div className='NavBar'>
    //   {/* <div className='logo'><img src={} /></div> */}
    //   {/* <div className="search"><input type="search" results="5" name="s" placeholder="Search" /></div> */}
    //     <div className="container">
    //         <div className="menu-button" onClick={() => setOpen(!open)}>
    //           <i className="fas fa-bars"></i>
    //         </div>
    //         {/* Sidebar */ }
    //           {MenuData.length && (
    //             <nav className= { `nav ${open ? 'hide' : 'show'}` }><ul className="menu-items">
    //               {MenuData.map( item => (
    //                 <li className="menu-list" key={item.label}>
    //                   <Link className="menu-link" to={item.url}>{item.label}</Link>
    //                 </li>
    //               ))}
    //             </ul>
    //             </nav>
    //           )}
    //     </div>
    // </div>
  );
};

export default Navigation;