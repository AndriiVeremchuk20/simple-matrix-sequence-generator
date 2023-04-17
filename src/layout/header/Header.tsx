import React from "react";
import "./header.scss";
import { ChangeTheme } from "../../components/ChangeTheme/ChangeTheme";
import { ChangeLanguage } from "../../components/ChangeeLanguage/ChangeLanguage";
import { Navbar } from "../../components/Navbar/Navbar";

export const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="title">LSR-MSR calculator</div>
        <div className="toolbar">
          <ChangeTheme />
          <ChangeLanguage />
        </div>
      </header>
      <Navbar />
    </div>
  );
};
