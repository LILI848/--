import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import RecoveryPage from "./routes/RecoveryPage";
import CloudPage from "./routes/CloudPage";
import ContactPage from "./routes/ContactPage";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recovery" element={<RecoveryPage />} />
      <Route path="/cloud" element={<CloudPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
