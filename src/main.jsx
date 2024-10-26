// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CurrencyProvider } from "./context/currencyContext";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CurrencyProvider>
        <App />
      </CurrencyProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
