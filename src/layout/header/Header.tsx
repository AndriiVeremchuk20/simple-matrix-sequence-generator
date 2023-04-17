import React from "react";
import "./header.scss";
import { ChangeTheme } from "../../components/ChangeTheme/ChangeTheme";
import { ChangeLanguage } from "../../components/ChangeeLanguage/ChangeLanguage";
import { Navbar } from "../../components/Navbar/Navbar";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-main">
        <div className="title">LSR-MSR calculator</div>
        <div className="toolbar">
          <ChangeTheme />
          <ChangeLanguage />
        </div>
      </div>
      <Navbar />
    </header>
  );
};
