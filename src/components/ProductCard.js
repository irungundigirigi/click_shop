import './ProductCard.css';
import {Button} from 'react-bootstrap';
import {CartState} from '../context/Context';


const SingleProduct = ({product}) => {

  const { state: {cart},
  dispatch,} = CartState();

  console.log(cart);

  return (
    <div className="product-card">
      <img src={product.image} className="product-image" />
      <span className="title">{product.title}</span>
      <p className="description">{product.description}</p>
      <div className="buttons">
      {cart.some((p) => p.id === product.id) ? (
        <Button variant="danger" onClick={() => {dispatch({type: "REMOVE_FROM_CART", payload: product,})}}> Remove </Button>
      ): ( <Button onClick={() => {dispatch({type: "ADD_TO_CART", payload: product,})}} style={{height:"30px"}} disabled={!product.rating.count}>Add to cart</Button>)}
      </div>

    </div>
  );
}

export default SingleProduct;
