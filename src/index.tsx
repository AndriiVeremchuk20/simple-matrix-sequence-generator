import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import "./styless/index.scss";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.Fragment>
      <App />
  </React.Fragment>
);
