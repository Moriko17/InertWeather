import React from "react";
import "../../styles/styles.css";

class AddToFavorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    const unic = city => city.cityName.toLowerCase() === this.state.term;
    if (!this.props.favoriteData.cities.some(unic)) {
      this.props.addCity(this.state.term);
      this.props.postCity(this.state.term);
    }
    this.setState({ term: "" });
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="favorite-form">
        <p>Favorites:</p>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
            required
          />
          <button type="submit">=</button>
        </form>
      </div>
    );
  }
}

export default AddToFavorite;
