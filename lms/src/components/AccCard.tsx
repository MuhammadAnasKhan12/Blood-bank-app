import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./card.css"
type propss = {
  namee: any;
  bgg: any;
  email: any;
  no: any;
};

function ACard(props: propss) {
  return (
    <Card className='donor-card' style={{width: '18rem',margin:"10px",border:"solid 2px  #dc3545" }}>
      <Card.Body>
        <Card.Title className="donor-title">Acceptor {props.no}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="donor-info">Name: {props.namee}</ListGroup.Item>
        <ListGroup.Item className="donor-info">Blood Group: {props.bgg}</ListGroup.Item>
        <ListGroup.Item className="donor-info">Email: {props.email}</ListGroup.Item>

      </ListGroup>
    </Card>
  );
}

export default ACard;
