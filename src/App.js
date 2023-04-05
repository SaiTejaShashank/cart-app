
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
    this.db=firebase.firestore();
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

  const docRef=this.db.collection('products').doc(products[index].id);

  docRef.update({
    qty:products[index].qty+1,
  })
  .then(()=>{
    console.log("updated Successfully");
  })
  .catch((error)=>{
    console.log('Error:',error);
  })

}

decreaseQuantity=(prod)=>{


  const {products}=this.state;

  const index=products.indexOf(prod);

  const docRef=this.db.collection('products').doc(products[index].id);

  docRef.update({
    qty:products[index].qty-1,
  })
  .then(()=>{
    console.log("updated Successfully");
  })
  .catch((error)=>{
    console.log('Error:',error);
  })
}

deleteProduct=(id)=>{
  const {products}=this.state;

  const docRef=this.db.collection('products').doc(id);

  docRef.delete()
        .then(()=>{
          console.log('Deleted Successfully')
        })
        .catch((error)=>{
          console.log('Error:',error)
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

addProduct=()=>{
  this.db
      .collection('products')
      .add({
        img:'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        price:4999,
        qty:23,
        title:'apple',
      })
      .then((docRef)=>{
        console.log(docRef);
      })
      .catch((error)=>{
        console.log('Error :',error);
      })
}

render(){

  const {products,loading}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart products={products}  key={products.id} increaseQuantity={this.increaseQuantity} decreaseQuantity={this.decreaseQuantity} deleteProduct={this.deleteProduct}  />
      {loading && <h1>Loading Products...</h1>}
      <h1>Total:{this.getCartTotal()}</h1>


      <button onClick={this.addProduct}>Add Products</button>
    </div>
  );
}
}

export default App;
