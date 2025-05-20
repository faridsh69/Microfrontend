import React from "react";
import ReactDOM from "react-dom/client";
import VitRemoteComponent from "vitRemoteApp/VitRemoteComponent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>2 Vit - Host: Hello from Host App</div>
    <VitRemoteComponent />
  </React.StrictMode>
);
