import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col , Container} from 'react-bootstrap';
import './Banner.css';
import {NavLink} from 'react-router-dom';

const Banner= () => {
	return (
	
	
		<Container id='home' className='banner-1 mb-5 justify-content-center' 
		fluid style=
		{{backgroundImage:`url(imgs/headery.jpg)`,
			backgroundPosition:'bottom',
		backgroundSize:'cover',backgroundAttachment:'fixed'}}>
			<Row className='justify-content-center'>
		<Col xs={12} md={12} className='mx-auto 
		 px-0 justify-content-center'>
  <h1 className='title ml-2 pt-5 text-center   my-5 align-text-top'>Barber-<span className='light'>Shop</span></h1> 

<p className='text-light welcome py-3 px-1 h4 text-center'>Welcome.. Here You Can Find Our Services  & Products</p>



</Col>		
	<NavLink to='/products' className='btn btn-dark mx-auto  explore'>explore</NavLink>
		</Row>

		
</Container>
	
		

		);

}








export default Banner;