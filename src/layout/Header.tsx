import React from "react";
import { ChangeTheme } from "../components/ChangeTheme";
import { ChangeLanguage } from "../components/ChangeLanguage";

export const Header = () => {
  return (
    <header className="w-full flex justify-between pt-5 px-10 bg-green-600">
      <div className="text-xl font-bold ">Programmable Matrix Sequence Generator</div>
      <div className="flex">
        <ChangeTheme />
        <ChangeLanguage />
      </div>
    </header>
  );
};
