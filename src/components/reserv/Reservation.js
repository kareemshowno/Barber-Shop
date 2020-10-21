import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Form, Button} from 'react-bootstrap';
import './Reservation.css'
const Reservation = () =>{
	return(	<div className='mt-5 d-flex align-items-center'>
		<div id='res' className='container mt-5 shadow p-5'>

		<h1  className='py-2'>Reservation Form</h1>
		<Form>
  <Form.Row>
    <Form.Group as={Col} >
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Mobile Number</Form.Label>
      <Form.Control  placeholder="Your Number" />
    </Form.Group>
  </Form.Row>
 
  <Form.Row>

    <Form.Group as={Col} >
      <Form.Label>Barber</Form.Label>
      <Form.Control as="select" defaultValue="Choose">
        <option> Available Barbers</option>
        <option>Jack Black</option>
        <option>Fonzy Ipsum</option>
       
      </Form.Control>
    </Form.Group>
    <Form.Group as={Col} >
      <Form.Label>Apointment</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose From Available Times</option>
        <option>12:00PM</option>
        <option>2:00PM</option>
        <option>6:00PM</option>
        <option>7:00PM</option>
      </Form.Control>
    </Form.Group>
 
  </Form.Row>

   <Button  variant="warning" type="submit">
    Submit
  </Button>
 

</Form></div></div>);
}
export default Reservation;