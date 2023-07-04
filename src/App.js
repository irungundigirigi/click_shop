import "./App.css";
import Header from './Header.js'
import {CartState} from './context/Context';
import ProductCard from './components/ProductCard';

function App() {
  const {state: {products}} = CartState();
  console.log(products);
  return <div className="App">
    <Header />
    <div className="products">
      {products.map((product) => {
        return <ProductCard product={product} key={product.id}/>
      })}
    </div>
  </div>
}

 export default App;
