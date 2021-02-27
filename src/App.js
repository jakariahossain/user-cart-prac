import User from "./components/User/User";
import userData from "./data.json";
import { useState, useEffect } from "react";
import { Col, Container, Row, Badge } from "react-bootstrap";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [users, setUser] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setUser(userData);
  }, []);

  const handleAddToCart = (user) => {
    const newCart = [...cart, user];
    setCart(newCart);
  };

  return (
    <>
      <Container>
        <Row className='my-3 text-left'>
          <Col>
            <h4>
              User and Cart UI on <Badge variant='secondary'>REACT </Badge>
            </h4>
          </Col>
        </Row>
        <Row>
          <Col md={8} lg={8} xl={8}>
            <Row>
              {users.map((user) => (
                <Col md={4} lg={4} xl={4} key={user.id}>
                  <User user={user} handleAddToCart={handleAddToCart}></User>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={4} lg={4} xl={4}>
            <Cart cart={cart}></Cart>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
