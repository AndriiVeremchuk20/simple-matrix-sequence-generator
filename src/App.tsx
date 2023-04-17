import React from "react";
import { Header } from "./layout/header/Header";
import { Footer } from "./layout/footer/Footer";
import {AppRoutes} from "./AppRoutes";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Lsr } from "./pages/Lsr/Lsr";
import { Msr } from "./pages/Msr/Msr";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path={AppRoutes.home} element={<Home />} />
          <Route path={AppRoutes.aboutUs} element={<div>About us</div>}/>
          <Route path={AppRoutes.lsr} element={<Lsr/>}/>
          <Route path={AppRoutes.msr} element={<Msr/>}/>
          <Route path={AppRoutes.support} element={<div>Support</div>}/>
          <Route path={AppRoutes.noPage} element={<div>404</div>} />
        </Routes>
      <Footer />
    </div>
  );
}
export default App;
