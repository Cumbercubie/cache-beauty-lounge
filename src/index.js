import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Footer from "./components/footer";
import Header from "./components/header";
import "./css/service.css";
import "./index.css";
import About from "./pages/about";
import ServicesPage from "./pages/services";
import "tw-elements";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/",
    element: <App />,
  },
]);
root.render(
  <Fragment>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
