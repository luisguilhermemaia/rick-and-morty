import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Character from "../components/Character";
import Search from "../components/Search";
import * as pageActions from "../actions/PageActions";
import { Container, Row, Col, CardGroup } from "reactstrap";

class Page extends Component {
  componentDidMount() {
    this.props.pageActions.fetchCharacters();
  }

  handleSearch(e) {
    this.props.pageActions.filterCharacters(e.target.value);
  }

  render() {
    let { displayedCharacters, isFetched } = this.props.page;

    let characters = displayedCharacters.map((character, index) => {
      return <Character character={character} key={index} />;
    });

    let charactersRowStyle = {
      backgroundColor: "hsla(0,0%,0%,0.8)"
    };

    let style = { maxWidth: "100%" };

    return (
      <Container style={style}>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 4 }}>
            <Search onChange={this.handleSearch.bind(this)} />
          </Col>
        </Row>
        <Row style={charactersRowStyle}>
          <CardGroup>{isFetched ? <p>Loading...</p> : characters}</CardGroup>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    page: state.page
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
