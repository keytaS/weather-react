import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather.js";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
    </div>
    <br />
    <div>
      <p>
        <a href="https://github.com/keytaS/weather-react">Open-source code</a>{" "}
        by Kateryna Saltykova
      </p>
    </div>
  </StrictMode>
);
