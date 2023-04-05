import React from 'react';

const Navbar = (props) => {
  return (
  
    <div style={styles.nav}>
     <h1>Cart Project</h1>
      <div style={styles.cartIconContainer}>
        <img style={styles.cartIcon} src="https://t3.ftcdn.net/jpg/03/58/01/44/240_F_358014418_TqVdMKXYwo5MM4XnREFMT9SyEO1SaDiu.jpg" alt="cart-icon" />
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
    
  );
}

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  nav: {
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    right: 0,
    top: -9
  }
};


export default Navbar;