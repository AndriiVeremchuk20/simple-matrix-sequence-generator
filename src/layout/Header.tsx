import React from "react";
import { ChangeTheme } from "../components/ChangeTheme";

export const Header = () => {
  return (
    <header className="w-full fixed h-16 flex px-9 justify-between bg-green-600 dark:bg-neutral-900">
      <div className="text-xl font-bold my-auto dark:text-blue-600">
        Programmable Matrix Sequence Generator
      </div>
      <div className="flex my-auto">
        <ChangeTheme />
      </div>
    </header>
  );
};
