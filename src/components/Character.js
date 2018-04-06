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
  ListGroupItem,
  Jumbotron
} from "reactstrap";

const Character = ({ character }) => {
  let divStyle = {
    maxWidth: "280px",
    fontSize: "12px",
    margin: "15px 15px"
  };

  return (
    <div style={divStyle}>
      <Card height="100%">
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
            </ListGroup>
          </CardText>
          <Button>Complete Profile</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Character;
