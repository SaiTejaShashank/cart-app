import React from 'react';

const CartItem =(props)=> {

    const { price, title, qty } = props.product;
  const {
    product,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
  } = props;

  

    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={product.img}/>
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img alt="increase" className="action-icons" src="https://as2.ftcdn.net/v2/jpg/04/91/21/35/1000_F_491213526_YSg0K2hbLWtlRzcwubYVkMt3lxAi7sD4.jpg" onClick={()=>{increaseQuantity(product)}} />
            <img alt="decrease" className="action-icons" src="https://as2.ftcdn.net/v2/jpg/04/91/21/35/1000_F_491213556_mkPmpdbaTvDYYEbNNCHntfKC9XC51W6j.jpg" onClick={()=>{decreaseQuantity(product)}}/>
            <img alt="delete" className="action-icons" src="https://as1.ftcdn.net/v2/jpg/04/92/30/88/1000_F_492308833_xXc7hxGdBrk3OQtb9NKCKq0s1hZ40PC6.jpg"  onClick={()=>{deleteProduct(product.id)}} />
          </div>
        </div>
      </div>
    );
  }


const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;