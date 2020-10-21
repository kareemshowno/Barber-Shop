import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reservation from '../components/reserv/Reservation';
import Navigation from '../components/Navigation';
import Banner from '../components/banner/Banner';
import Banner2 from '../components/banner/Banner2';
import BarbersList from '../components/barbers/BarbersList';
import {barbers} from '../components/barbers/barbers.js';
import ProductsList  from '../components/products/ProductsList';
import {prods} from '../components/products/prods'
import SearchBox from '../components/products/SearchBox';
import Cart from '../components/shop-cart/Cart';
import {HashRouter as Router ,Switch, Route} from 'react-router-dom';

class App extends React.Component {
constructor() {
  super()

  this.state={
    barbers:barbers,
    prods:prods,
    searchfield:'',
    cartItems:[],
   

    
  }

}


removeFromCart = (product) =>{
    const cartItems = this.state.cartItems.slice();
    
    this.setState({cartItems:cartItems.filter(x => x.id !== product.id)});
}
addToCart=(product) => {
  
  let alreadyInCart= false;
  const cartItems = this.state.cartItems.slice();

  cartItems.forEach(item => {
    if(item.id === product.id) {
      item.count++;
      alreadyInCart= true;
    } 
    
  });
  if(!alreadyInCart){
      cartItems.push({...product, count: 1})
    }
    this.setState({cartItems});
}


 

  onSearchChange =(event) => {
  this.setState({searchfield: event.target.value})


}
  
  render() {


      const filteredProducts = this.state.prods.filter(products => {
  return products.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
})

    return (<React.Fragment>
<Router>
      <Navigation  count={this.state.cartItems.length} />
     <Switch>
     <Route path='/' exact>
          <Banner  /></Route>
          <Route path='/services' >
            <Banner2 />
        <BarbersList barbers={this.state.barbers} />
        </Route>
        <Route path='/products'>
            <SearchBox SearchChange={this.onSearchChange}  /> 
         <ProductsList  addToCart={this.addToCart} prods={filteredProducts} />
         </Route>
         <Route path='/reservation'>
          <Reservation />
    </Route>
    <Route path='/cart'>
          <Cart count={this.state.cartItems.length}  removeFromCart={this.removeFromCart} cartItems={this.state.cartItems}/>
          </Route>
</Switch>
 </Router>
        </React.Fragment>
      );
  }
}
  
      

export default App;
