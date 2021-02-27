import React from "react";
import { Card } from "react-bootstrap";

const Cart = (props) => {
  const cart = props.cart;
  //   let total = 0;
  //   for (let i = 0; i < cart.length; i++) {
  //     const user = cart[i];

  //     total = total + user.Yearlyincome;
  //   }

  const total = cart.reduce((sum, user) => sum + Number(user.Yearlyincome), 0);
  return (
    <div>
      <Card className='my-2 py-2'>
        <Card.Header as='h5'>Count total user and their salary</Card.Header>
        <Card.Body>
          <Card.Title>Total User Added: {cart.length}</Card.Title>
          <Card.Text>Total Salary Added: ${total}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cart;
