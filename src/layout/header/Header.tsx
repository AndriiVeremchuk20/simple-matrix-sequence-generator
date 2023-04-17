import React from 'react';
import "./header.scss";
import { ChangeTheme } from '../../components/ChangeTheme/ChangeTheme';
import { ChangeLanguage } from '../../components/ChangeeLanguage/ChangeLanguage';

export const Header = () => {
  return (
    <header className='header'>
      <div className='title'>
        LSR-MSR calculator
      </div>
      <div className='toolbar'>
        <ChangeTheme/>
        <ChangeLanguage/>
      </div>
    </header>
  )
}
