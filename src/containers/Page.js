import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Character from "../components/Character";
import Search from "../components/Search";
import * as pageActions from "../actions/PageActions";
import {
  Container,
  Row,
  Col,
  CardGroup,
  Pagination,
  PaginationItem,
  PaginationLink,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  CardBody,
  Card,
  ListGroup,
  ListGroupItem,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  Jumbotron
} from "reactstrap";

class Page extends Component {
  componentDidMount() {
    this.props.pageActions.fetchCharacters();
  }

  handleSearch(e) {
    this.props.pageActions.filterCharacters(e.target.value);
  }

  render() {
    let { displayedCharacters, isFetched, info, page_b } = this.props.page;

    const firstPage = () => this.props.pageActions.fetchCharacters("");

    const lastPage = () => this.props.pageActions.fetchCharactersB(info.pages);

    const nextPage = () => {
      const pageNumber = info.next.slice(-1);
      if (pageNumber === "") return;

      if (page_b) {
        this.props.pageActions.fetchCharacters(pageNumber);
      } else {
        this.props.pageActions.changeToB();
      }
    };

    const prevPage = () => {
      const pageNumber = info.prev.slice(-1);
      if (pageNumber === "") return;

      if (page_b) {
        this.props.pageActions.changeToA();
      } else {
        this.props.pageActions.fetchCharactersB(pageNumber);
      }
    };

    let popoverOpen = false;
    const togglePop = () => (popoverOpen = !popoverOpen);

    let characters = displayedCharacters.map((character, index) => {
      let getEpisodes = character.episode.map(ep => {
        let final = ep.slice(-2);
        if (final[0] === "/") {
          final = ep.slice(-1);
        }
        return final + ", ";
      });

      getEpisodes[getEpisodes.length - 1] = getEpisodes[
        getEpisodes.length - 1
      ].replace(", ", "");

      return (
        <div>
          <Character
            getEpisodes={getEpisodes}
            character={character}
            key={index}
          />
        </div>
      );
    });

    let charactersRowStyle = {
      backgroundColor: "hsla(0,0%,0%,0.8)"
    };

    const imgUrl =
      "https://vignette.wikia.nocookie.net/rickandmorty/images/9/95/Rick-And-Morty-Wallpaper-Iphone.jpg/revision/latest?cb=20171014062033";

    let style = {
      maxWidth: "100%",
      backgroundImage: "url(" + imgUrl + ")"
    };

    return (
      <Container style={style}>
        <Jumbotron>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="#">THE RICK AND MORTY</NavbarBrand>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                <Dropdown isOpen={true}>
                  <DropdownToggle caret>Filtros</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>status</DropdownItem>
                    <DropdownItem>species</DropdownItem>
                    <DropdownItem>type</DropdownItem>
                    <DropdownItem>gender</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem> */}
              <NavItem>
                <Search onChange={this.handleSearch.bind(this)} />
              </NavItem>
            </Nav>
          </Navbar>
        </Jumbotron>
        <CardGroup style={charactersRowStyle}>
          {isFetched ? <p>Loading...</p> : characters}
        </CardGroup>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 8 }}>
            <Pagination>
              <PaginationItem>
                <PaginationLink last onClick={firstPage}>
                  First Page
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink previous onClick={prevPage} />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next onClick={nextPage} />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink last onClick={lastPage}>
                  Last Page
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </Col>
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
