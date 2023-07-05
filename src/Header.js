
import {Navbar, Container, FormControl, Dropdown, DropdownButton, Badge} from 'react-bootstrap';
import {AiFillDelete} from "react-icons/ai";
import {FaShoppingCart, } from "react-icons/fa"
import {CartState} from "./context/Context";
import "./Header.css";


const Header = () => {
  const {dispatch,state:{cart}} = CartState();
  return (
    <Navbar style={{position:"fixed",left:"0",right:"0"}}bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          Shopping cart
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
          style={{width:500, backgroundColor: "white", border: "none"}} placeholder="Search product" className="m-auto"/>
        </Navbar.Text>
        <Dropdown alignRight>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FaShoppingCart color="white" fontSize="15px" />
            <Badge>{cart.length}</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu>
          {cart.length > 0 ? (
            <>
              {cart.map((product) => (
                <span className="cartItem" key={product.id}>
                  <img src={product.image} className="cartItemImg" />
                  <div className="cartItemDetail">
                    <span>{product.title}</span>
                    <span>{product.price}</span>
                  </div>
                  <AiFillDelete fontSize="20px"
                          style={{ cursor: "pointer"}}
                          onClick={() => dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product,
                          })} />
                </span>
              ))}
            </>
          ):(<span style={{padding:10}}>Cart is Empty!</span>)}
          </Dropdown.Menu>
        </Dropdown>
        </Container>
    </Navbar>
  )
}

export default Header;
