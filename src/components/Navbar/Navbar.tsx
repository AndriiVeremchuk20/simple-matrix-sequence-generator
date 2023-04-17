import React from "react";
import { Link } from "react-router-dom";
import {AppRoutes} from "../../AppRoutes";
import "./Navbar.scss"

export const Navbar = () => {
  return (
    <nav className="nav">
        <Link to={AppRoutes.home} className="nav-item">Home</Link>
        <Link to={AppRoutes.lsr} className="nav-item">LSR</Link>
        <Link to={AppRoutes.msr} className="nav-item">MSR</Link>
        <Link to={AppRoutes.aboutUs} className="nav-item">About us</Link>
        <Link to={AppRoutes.support} className="nav-item">Support</Link>
    </nav>
  );
};
