import React from "react";
import ReactDOM from "react-dom/client";
import { ContainerRoute } from "./ContainerRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 1 Container bootstrapIndex */}
    <ContainerRoute />
  </React.StrictMode>
);
