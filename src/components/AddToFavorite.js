import React from "react";
import "../styles/styles.css";

class AddToFavorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.term);
    this.props.addCity(this.state.term);
    this.setState({ term: "" });
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div>
        <p>Fav</p>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <button type="submit">=</button>
        </form>
      </div>
    );
  }
}

export default AddToFavorite;
