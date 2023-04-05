
import React from "react";
import Navbar from "./NavBar";
import Cart from "./Cart";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

class  App extends React.Component{

  constructor(){
    super();
    this.state = {
        products: [],
        loading:true
    }
}

componentDidMount(){
  /*firebase
          .firestore()
          .collection('products')
          .get()
          .then((snapshot)=>{
            console.log(snapshot)
            snapshot.docs.map((doc)=>{
              console.log(doc.data())
            })

            const products=snapshot.docs.map((doc)=>{
              const data=doc.data();
              data['id']=doc.id;
              return data;
            })

            this.setState({
              products,
              loading:false
            })
          })*/


          firebase
          .firestore()
          .collection('products')
          .onSnapshot((snapshot)=>{
            console.log(snapshot)
            snapshot.docs.map((doc)=>{
              console.log(doc.data())
            })

            const products=snapshot.docs.map((doc)=>{
              const data=doc.data();
              data['id']=doc.id;
              return data;
            })

            this.setState({
              products,
              loading:false
            })
          })

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


  if(prod.qty===0){
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
    return '';
  })
  return cartTotal;
}



render(){

  const {products,loading}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart products={products}  key={products.id} increaseQuantity={this.increaseQuantity} decreaseQuantity={this.decreaseQuantity} deleteProduct={this.deleteProduct}  />
      {loading && <h1>Loading Products...</h1>}
      <h1>Total:{this.getCartTotal()}</h1>
    </div>
  );
}
}

export default App;
