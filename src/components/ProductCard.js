import './ProductCard.css';


const SingleProduct = ({product}) => {
  return (
    <div className="product-card">
      <img src={product.image} className="product-image" />
      <span className="title">{product.title}</span>
      <p className="description">{product.description}</p>
    </div>
  );
}

export default SingleProduct;
