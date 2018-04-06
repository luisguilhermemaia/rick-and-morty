import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  ListGroup,
  ListGroupItem
} from "reactstrap";

const Character = ({ character }) => {
  let divStyle = {
    maxWidth: "300px",
    fontSize: "12px",
    marginLeft: "15px"
  };

  return (
    <div style={divStyle}>
      <Card>
        <CardImg top width="100%" src={character.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{character.name}</CardTitle>
          <CardText>
            <ListGroup>
              <ListGroupItem>ID: {character.id}</ListGroupItem>
              <ListGroupItem>Status: {character.status}</ListGroupItem>
              <ListGroupItem>Species: {character.species}</ListGroupItem>
              <ListGroupItem>Gender: {character.gender}</ListGroupItem>
              <ListGroupItem>Origin: {character.origin.name}</ListGroupItem>
              <ListGroupItem>
                Last Location: {character.location.name}
              </ListGroupItem>
              <ListGroupItem>Created: {character.created}</ListGroupItem>
            </ListGroup>
          </CardText>
          <Button>Complete Profile</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Character;
