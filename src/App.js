
import React from "react";
import Navbar from "./NavBar";
import Cart from "./Cart";

class  App extends React.Component{

  constructor(){
    super();
    this.state = {
        products: [
          {
            price: 99,
            title: 'Watch',
            qty: 1,
            img: 'https://images.unsplash.com/photo-1605101232508-283d0cd4909e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
            id: 1
          },
          {
            price: 999,
            title: 'Mobile Phone',
            qty: 10,
            img: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
            id: 2
          },
          {
            price: 999,
            title: 'Laptop',
            qty: 4,
            img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2052&q=80',
            id: 3
          }
        ]
    }
}

increaseQuantity = (prod) => {

  const {products}=this.state;

  const index=products.indexOf(prod);

  products[index].qty+=1;

  this.setState({
      products:products
      //products
  });
}

decreaseQuantity=(prod)=>{


  if(prod.qty==0){
      return;
  }
  const {products}=this.state;

  const index=products.indexOf(prod);

  products[index].qty-=1;

  this.setState({
      products:products
      //products
  });
}

deleteProduct=(id)=>{
  const {products}=this.state;

  const items=products.filter((item)=>item.id!==id);

  this.setState({
      products:items
  })
}

getCartCount=()=>{
   const {products}=this.state;

   let count=0;

   products.forEach((product)=>{
    count+=product.qty;
   })

   return count;
}

getCartTotal=()=>{
  const {products}=this.state;
  let cartTotal=0;
  products.map((product)=>{
    cartTotal=cartTotal+product.qty*product.price;
  })
  return cartTotal;
}

render(){

  const {products}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart products={products}  key={products.id} increaseQuantity={this.increaseQuantity} decreaseQuantity={this.decreaseQuantity} deleteProduct={this.deleteProduct}  />
      <h1>Total:{this.getCartTotal()}</h1>
    </div>
  );
}
}

export default App;
