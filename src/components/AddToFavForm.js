import React, { Component } from "react";
import "../styles/styles.css";

class AddToFavForm extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "", lastIndex: this.props.lastIndex };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.props.lastIndex);
    this.props.fetchWeather(this.state.term, this.state.lastIndex);
    this.setState({ term: "", lastIndex: this.state.lastIndex + 1 });
    // this.props.updd(this.state.lastIndex);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="fav-form">
        <p>Fav</p>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <button type="submit">+</button>
        </form>
      </div>
    );
  }
}

export default AddToFavForm;
