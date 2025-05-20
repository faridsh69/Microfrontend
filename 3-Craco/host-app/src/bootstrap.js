import React from "react";
import ReactDOM from "react-dom/client";
import CracoRemoteComponent from "cracoRemoteApp/CracoRemoteComponent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>3 Craco - Host: Hello from Host App</div>
    <CracoRemoteComponent />
  </React.StrictMode>
);
