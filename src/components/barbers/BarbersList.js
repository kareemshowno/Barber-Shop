import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barber from './Barber';
import {Row,Container} from 'react-bootstrap';
 

const BarbersList = ({barbers}) => {
	return (
<Container  fluid className='d-flex  mt-5'>

  	<Row className='mx-auto'>

  {barbers.map ((user, i) => {
		return( <Barber 
		key={barbers[i].id}
		cost={barbers[i].cost} 
		name={barbers[i].name} 
		img={barbers[i].img} />);
	})
}
</Row>
</Container>


		);

}


export default BarbersList;