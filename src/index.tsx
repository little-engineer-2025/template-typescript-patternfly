import App from '@app/index';
import React from "react";
import ReactDOM from "react-dom/client";

if (process.env.NODE_ENV !== "production") {
  const config = {
    rules: [
      {
        id: 'color-contrast',
        enabled: false
      }
    ]
  };
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000, config);
}

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
