import * as React from "react";

const TimeApp = ({ onChange }) => {
  return (
    <div className="timeApp">
      <h1>Time App</h1>
      <input onChange={onChange} />
    </div>
  );
};

// It has to be default because of lazy loading
export default TimeApp;
