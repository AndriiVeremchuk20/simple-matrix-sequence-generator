import React from "react";
import { Link } from "react-router-dom";
import {AppRoutes} from "../../AppRoutes";
import "./Navbar.scss"

export const Navbar = () => {
  return (
    <nav className="nav">
        <Link to={`${AppRoutes.home}`}>Home</Link>
        <Link to={AppRoutes.lsr}>LSR</Link>
        <Link to={AppRoutes.msr}>MSR</Link>
        <Link to={AppRoutes.aboutUs}>About us</Link>
        <Link to={AppRoutes.support}>Support</Link>
    </nav>
  );
};
