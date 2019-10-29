import React from "react";

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button
          onClick={() =>
            this.props.fetchWeatherByCoord(
              {
                lat: 35.68,
                lon: 139.76
              },
              0
            )
          }
        >
          +
        </button>
      </div>
    );
  }
}

export default App;
