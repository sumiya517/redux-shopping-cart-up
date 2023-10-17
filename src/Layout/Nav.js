import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { showData } from "../Store/Cart/cartReducer"
const Nav = () => {
    const products = useSelector(showData);
    const navigate = useNavigate();
    const handleCart = () => {
        navigate('/cart')
    }
    return (
        <nav>
            <h2>Online Shopping</h2>
            <div className="cart-img" >
                <img src='./cart.png' alt='cart-png' onClick={handleCart} />
                <p className="count">{products.cart.length ? products.cart.length: 0 }</p>
            </div>
            
        </nav>
    )
}

export default Nav