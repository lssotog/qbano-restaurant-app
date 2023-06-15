import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Menu } from "./pages/Menu/Menu.jsx";
import { Combos } from "./pages/Combos/Combos.jsx";
import { Checkout } from "./pages/Checkout/Checkout.jsx";
import { Favoritos } from "./pages/Favoritos/Favoritos.jsx";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "menu", element: <Menu /> },
  { path: "/combos", element: <Combos /> },
  { path: "/favoritos", element: <Favoritos /> },
  { path: "/check-out", element: <Checkout /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
