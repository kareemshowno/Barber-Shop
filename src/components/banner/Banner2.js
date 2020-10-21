import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row , Col} from 'react-bootstrap';
import './Banner.css';




const Banner2 = () =>{
	return(
			<Container  fluid  className='banner_second  justify-content-center mt-5 pt-1 mb-5'>
			<Row >
			<Col className='mx-auto text-center border-right '  xs={12} md={6}>
			<img  src='imgs/mustache3.png' alt='mustache_logo' width='90em' 
			className='img-fluid rounded' />
			<h2 className='text-center'>Our Services</h2>
			<hr style={{width:'50%'}} />
			<p className='h4 pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
			Phasellus sed lectus consectetur, pharetra urna quis, fermentum mauris.
			 Morbi malesuada diam euismod, finibus neque in, 
			commodo massa. In hac habitasse platea dictumst. Maecenas vitae ultricies diam. Aliquam</p>
			</Col>
			<Col xs={12} md={6} className='mx-auto text-center p-0 col-xs-mt-2'>
			<img src='imgs/header.jpg' className='banner2 img-fluid ' alt='logo' />
				</Col>
			</Row>
			</Container>

		);
 }

 export default Banner2;