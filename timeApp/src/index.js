import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TimeApp from "./TimeApp";

const rootElement = document.getElementById("container");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TimeApp />
  </StrictMode>
);
