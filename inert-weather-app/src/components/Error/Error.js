import React from "react";

export default function(props) {
  return (
    <div className="error">
      <p>Something goes wrong: {props.errorMessage}</p>
    </div>
  );
}
