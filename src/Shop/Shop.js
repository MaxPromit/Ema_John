import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Component/Cart/Cart';
import Product from '../Component/Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])
    const handleAddToCart = (product) =>{
     const newCart = [...cart, product];
     setCart(newCart);
    }
    return (
        <div className='shop_container'>
            <div className='products_container'>
             {
                products.map(product => <Product key={product.id} product={product}
                handleAddToCart={handleAddToCart}></Product>)
             }
            </div>
            <div className='cart_container'>
           <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;