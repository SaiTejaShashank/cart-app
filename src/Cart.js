import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component{

    constructor(){
        super();
        this.state = {
            products: [
              {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: '',
                id: 1
              },
              {
                price: 999,
                title: 'Mobile Phone',
                qty: 10,
                img: '',
                id: 2
              },
              {
                price: 999,
                title: 'Laptop',
                qty: 4,
                img: '',
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

    
    render(){

        const {products}=this.state;


        return(
            <div className="cart">
                {products.map((product)=>{
                   return <CartItem product={product}  key={product.id} increaseQuantity={this.increaseQuantity} decreaseQuantity={this.decreaseQuantity} deleteProduct={this.deleteProduct}/>
                })}
            </div>
        )
    }
}

export default Cart;