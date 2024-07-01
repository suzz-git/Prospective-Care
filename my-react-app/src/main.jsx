import React from "react";
import Header from "./Header.jsx";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Group from "./Group.jsx";
import OurServices from "./Ourservices.jsx";
import Mission from "./Mission.jsx";
import Feedback from "./Feedback.jsx";
import Footer from "./Footer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <App />
    <Group />
    <OurServices />
    <Mission />
    <Feedback />
    <Footer />
  </React.StrictMode>
);
