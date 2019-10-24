import React, { Component } from "react";
import "../styles/styles.css";

class FavCityBar extends Component {
  constructor(props) {
    super(props);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  onBtnClick() {
    this.props.deleteCity(this.props.num);
  }

  render() {
    return (
      <div className="fav-top">
        <p>{this.props.fname}</p>
        <p>{this.props.temp}</p>
        <button onClick={this.onBtnClick}>X</button>
      </div>
    );
  }
}

export default FavCityBar;
