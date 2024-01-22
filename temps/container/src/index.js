import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ContainerApp } from "./ContainerApp";

const rootElement = document.getElementById("react-dom-mounter");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContainerApp />
  </StrictMode>
);
