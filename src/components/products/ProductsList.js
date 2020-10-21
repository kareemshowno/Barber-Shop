import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css'
import {Container, Row,Card, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from'@fortawesome/free-solid-svg-icons';
import formaCurrency from '../formaCurrency.js'

const ProductsList = ({prods, addToCart, count}) => {
	return (<Container  id='pro' className='my-5 '>

		<Row className='text-center mx-auto ' >
		{prods.map((product, i)=> {
			return (<Col  key={prods[i].id}  xs={12} md={4} className='mt-2 '><Card className='cardd mx-auto' style={{ width: '18rem', }}>
 <div className='img_container '  > 

  <Card.Img className='pro_img' variant="top" src={prods[i].img} height='170' />
  <span onClick={() => addToCart(product)} className="store-item-icon">
						<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
					</span>
  </div>
  <div className='card-body pb-5   crd '>
    <div className='card-text  text-capitalize '><h5>{prods[i].name}</h5>
 <h5 className='mb-3'>{formaCurrency(prods[i].price)}</h5>
</div>
  </div>
   
</Card>
</Col>
				)
		})}
		</Row>
	</Container>);
}
export default ProductsList;