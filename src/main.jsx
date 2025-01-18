import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import RootLayout from "./components/layouts/RootLayout.jsx";
import Service from "./pages/Service.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
