import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import customTheme from "./theme.js";
import { ChakraProvider } from "@chakra-ui/react";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider value={customTheme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
