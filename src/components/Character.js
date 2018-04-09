import React, { Component } from "react";
import {
  Collapse,
  CardBody,
  Card,
  ListGroup,
  ListGroupItem,
  CardImg,
  CardText,
  CardTitle
} from "reactstrap";

class Character extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  divStyle = {
    maxWidth: "280px",
    fontSize: "12px",
    margin: "15px 15px"
  };

  render() {
    return (
      <div onClick={this.toggle} style={this.divStyle}>
        >
        <Card height="100%">
          <CardImg
            top
            width="100%"
            src={this.props.character.image}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{this.props.character.name}</CardTitle>
            <CardText>
              <ListGroup>
                <ListGroupItem>ID: {this.props.character.id}</ListGroupItem>
                <ListGroupItem>
                  Status: {this.props.character.status}
                </ListGroupItem>
                <ListGroupItem>
                  Species: {this.props.character.species}
                </ListGroupItem>
                <ListGroupItem>
                  Gender: {this.props.character.gender}
                </ListGroupItem>
                <ListGroupItem>
                  Origin: {this.props.character.origin.name}
                </ListGroupItem>
                <ListGroupItem>
                  Last Location: {this.props.character.location.name}
                </ListGroupItem>
              </ListGroup>
              <ListGroup>
                <Collapse isOpen={this.state.collapse}>
                  <ListGroupItem>
                    Appeared in the episode(s) {this.props.getEpisodes}.
                  </ListGroupItem>
                </Collapse>
              </ListGroup>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Character;
