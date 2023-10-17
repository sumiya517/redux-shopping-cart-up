import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { showData } from '../../Store/Cart/cartReducer';

export const Cart = () => {
    const navigate = useNavigate();
    const cart = useSelector(showData);

    let total=0;
    cart?.cart?.map((item)=>{
        total = total + item.price*item.cartQuantity;
    })

    const handleBack = () => {
        navigate('/')
    }
    return (
        <div className='cart'>
            <h1>Your Cart</h1>
            <button onClick={handleBack} className='cart-back-btn'><img src='./back.png' alt='' />Continue Shopping</button>
            {cart.cart.length === 0 ? (
                <p>Your cart is currently empty</p>
            ) : (
                <div className='cart-container'>
                    <div className='cart-container-title'>
                        <div className='cart-container-title-card'>
                            <h3>Product</h3>
                            <h3>Price</h3>
                            <h3>Quantity</h3>
                            <h3>Sub-Total</h3>
                        </div>
                    </div>
                    <div className='cart-container-items'>
                        {cart.cart?.map(item => (
                            <div className='cart-container-items-card'>
                                <div className='cart-container-items-card-list'>
                                    <img src={item.image} alt='cart' />
                                    <p>{item.title}</p>
                                </div>
                                <p>${item.price}</p>
                                <p>{item.cartQuantity}</p>
                                <p>${item.price * item.cartQuantity}</p>
                            </div>

                        ))}
                    </div>
                    <div className='cart-container-items'>
                        <div className='cart-container-items-card'>
                            <div className='cart-container-items-card-list'>
                                <h2>Total</h2>
                            </div>
                            <p></p>
                            <p></p>
                            <p>$ {total}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
