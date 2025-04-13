import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </StrictMode>
);
