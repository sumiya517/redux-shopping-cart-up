import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { products } from "../../Data/products";
import { addToCart } from "../../Store/Cart/cartReducer";

export const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleAddCart =(product) =>{
        dispatch(addToCart(product))
        navigate('/cart')
    }
    return (
        <div className="product-container">
            <h1>Products</h1>
            <div className="product-list">
                {products.map((item) => (
                    <div className="product-list-card" key={item.id}>
                        <img className="product-list-card-img" src={item.image} alt="product-img" />
                        <h3 className="product-list-card-title" >{item.title}</h3>
                        <h4 className="product-list-card-price">Price: ${item.price}</h4>
                        <button className="product-list-card-btn" onClick={()=>{handleAddCart(item)}} >Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>

    )
}
