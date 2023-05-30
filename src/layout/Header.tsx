import React from "react";
import { ChangeTheme } from "../components/ChangeTheme";
import { ChangeLanguage } from "../components/ChangeLanguage";

export const Header = () => {
  return (
    <header className="w-full h-16 flex px-9 justify-between bg-green-600">
      <div className="text-xl font-bold my-auto">Programmable Matrix Sequence Generator</div>
      <div className="flex gap-5 my-auto">
        <ChangeTheme />
        <ChangeLanguage />
      </div>
    </header>
  );
};
