import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "./components/ui/toaster";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
