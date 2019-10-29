import React from "react";

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={() => this.props.fetchWeatherByCoord()}>+</button>
      </div>
    );
  }
}

export default App;
