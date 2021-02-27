import React from "react";
import { Card, Button } from "react-bootstrap";

const User = (props) => {
  const { name, email, phone, img, Yearlyincome } = props.user;
  const imgStyle = {
    height: "210px",
    overflow: "hidden",
  };

  const cardStyle = {
    height: "380px",
  };

  const infoStyle = {
    fontSize: "14px",
  };
  return (
    <div>
      <Card className='my-2 rounded' style={cardStyle}>
        <Card.Img src={img} style={imgStyle}></Card.Img>
        <Card.Body className='text-center'>
          <Card.Title>
            <p style={infoStyle}>
              <strong>{name}</strong>
            </p>
          </Card.Title>
          <Card.Title>
            <p style={infoStyle}>
              <strong>{email}</strong>
            </p>
          </Card.Title>

          <Card.Title>
            <p style={infoStyle}>
              <strong>Salary:</strong> ${Yearlyincome}
            </p>
          </Card.Title>
          <Card.Text>
            <Button
              onClick={() => props.handleAddToCart(props.user)}
              variant='primary'
              className='btn btn-primary'
            >
              Add to Cart
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
