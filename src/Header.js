
import {Navbar, Container, FormControl, Dropdown, DropdownButton, Badge} from 'react-bootstrap';
import {FaShoppingCart} from "react-icons/fa";


const Header = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
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
            <Badge>{10}</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </Container>
    </Navbar>
  )
}

export default Header;
