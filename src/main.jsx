import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Project01 from "./Project01";
import { BrowserRouter, Routes, Route } from "react-router";
import DetailPage from "./DetailPage";
import Home from "./Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Project01 />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/:id" element={<DetailPage/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
