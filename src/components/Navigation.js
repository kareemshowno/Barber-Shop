import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import './Navigation.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCut} from'@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';

const Navigation = ({count}) => {
	return (
    <div className='container-fluid px-0' >
	
  <Navbar className='nav_bar' expand="lg" fixed='top' bg='dark' variant='dark'>
    <Navbar.Brand  className='logo' href="#home">
      <FontAwesomeIcon
       icon={faCut}
        width="30"
        height="30"
      />
    </Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
      <Nav  className="ml-auto" >
   
      <NavLink  to={{pathname:'/'}} exact >Home</NavLink>
   
      <NavLink  to={{pathname:'/services'}}  >Services</NavLink>
            <NavLink  to={{pathname:'/products'}}  >Products</NavLink>
      <NavLink  to={{pathname:'/reservation'}}  >Reservation</NavLink>

   
    <NavLink  to={{pathname:'/cart'}} >Cart {count}</NavLink>
  </Nav>
  </Navbar.Collapse>
  </Navbar>
  
</div>);
}




export default Navigation;




