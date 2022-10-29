import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WeatherSearch from './WeatherSearch';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
    </div>
    <div>
      <small>
        <a href="https://github.com/Radu-Alina"> Open source code </a>by <a> Alina Radu</a>
      </small>
    </div>
  </StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
