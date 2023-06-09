import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styless/index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
