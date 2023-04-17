import React from "react";
import { Header } from "./layout/header/Header";
import { Footer } from "./layout/footer/Footer";
import AppRoutes from "./AppRoutes";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import AppRoutess from "./AppRoutes";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
