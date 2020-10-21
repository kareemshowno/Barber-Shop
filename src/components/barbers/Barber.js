import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Card, Button} from 'react-bootstrap';
import './Barber.css';



const Barber = (props) => {
	return (<Col className='mt-3 border shadow'  xs={12} md={4} lg={4}>
		<Container fluid>
			<Row>
				<Col>
					<img className='img-fluid' src={props.img} />
					<h3 className='text-center text-capitalize py-3'>{props.name}</h3>
					<p className='text-center text-capitalize'>{'hire for:' + props.cost}</p>
				</Col>
			</Row>
		</Container>
</Col>);
}




export default Barber;