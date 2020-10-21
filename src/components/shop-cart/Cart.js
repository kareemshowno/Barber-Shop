import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table}from 'react-bootstrap';
import formaCurrency from '../formaCurrency';
import'./Cart.css';
const Cart = ({cartItems, removeFromCart, count}) => {



		return (
			<div id='cart' className='container shadow pb-5'>
			<div className='row'>
			<div className='col-xs-12 col-md-12 '>
			<Table >
			<thead className='table-h text-center text-capitalize mt-5'>
				<tr>
					<th>product</th>
					<th>quant</th>
					<th>price</th>
					<th></th>
				
				</tr>
			</thead>
			<tbody className=' d-felx justify-content-space-between'>
						{cartItems.map( (item ,i) => {
				return (<React.Fragment><tr className=' text-center text-capitalize' key={item.id}>
<td  >{item.name}</td>
					<td>{item.count} </td>
						<td id='price'>{formaCurrency(item.price)}</td>
						<td><button type='button' className='btn btn-warning  btn-sm mx-auto' onClick={() => removeFromCart(item)} >Remove</button></td>
						</tr>
						<br/>

								</React.Fragment>
						)}
				)
		}
				
			</tbody>

			
		</Table>

		
		</div>
			</div>
				
			<div className='row mt-5 mx-auto'>
		
		
			<div className='col-md-2 mx-auto px-1 col-xs-12 h4 py-2  text-center total'>Total = {formaCurrency(cartItems.reduce((a, c)=>a + c.price*c.count,0 ))}</div>
			</div>
			</div>);
	}

export default Cart;