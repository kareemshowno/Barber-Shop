import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form, Row, Col} from 'react-bootstrap';

const SearchBox = ({SearchChange}) => {
	return( <Container className='my-5'>
		<h2 className='text-center py-4'>Our Products</h2>
		<Row  >
			<Col xs={8} md={6} className='mx-auto'>
		<Form.Control type='search' placeholder='Search Products' onChange={SearchChange}/>
		</Col>
		</Row>
		</Container>
		);
}







export default SearchBox;