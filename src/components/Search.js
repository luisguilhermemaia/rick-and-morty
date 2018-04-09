import React from "react";
import { Button, Label, Input } from "reactstrap";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", type: "", species: "", gender: "", status: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSpeciesChange = this.handleSpeciesChange.bind(this);
  }

  handleGenderChange(event) {
    this.setState({ gender: event.target.value });
  }

  handleStatusChange(event) {
    this.setState({ status: event.target.value });
  }

  handleTypeChange(event) {
    this.setState({ type: event.target.value });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSpeciesChange(event) {
    this.setState({ species: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.teste.filterCharacters(this.state);
  }

  buttonStyle = {
    marginTop: "25px"
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Label for="Name">Name</Label>
        <Input
          onChange={this.handleNameChange}
          type="text"
          name="Name"
          id="Species"
          placeholder="filter by name"
        />
        <Label for="Type">Type</Label>
        <Input
          onChange={this.handleTypeChange}
          type="text"
          name="Type"
          id="Species"
          placeholder="filter by type"
        />
        <Label for="Species">Species</Label>
        <Input
          onChange={this.handleSpeciesChange}
          type="text"
          name="Species"
          id="Species"
          placeholder="filter by species"
        />
        <Label for="select">Status</Label>
        <Input
          onChange={this.handleStatusChange}
          type="select"
          name="select"
          id="exampleSelect"
        >
          <option>alive</option>
          <option>dead</option>
          <option>unknown</option>
        </Input>
        <Label for="select">Status</Label>
        <Input
          onChange={this.handleGenderChange}
          type="select"
          name="select"
          id="exampleSelect"
        >
          <option>female</option>
          <option>male</option>
          <option>genderless</option>
          <option>unknown</option>
        </Input>
        <Button style={this.buttonStyle}>Submit</Button>
      </form>
    );
  }
}

export default Search;
