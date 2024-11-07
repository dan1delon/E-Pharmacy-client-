import clsx from 'clsx';
import Logo from '../Logo/Logo';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import UserMenu from '../UserMenu/UserMenu';
import css from './AppBar.module.css';
import { useLocation } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';

const AppBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';

  return (
    <header className={clsx(css.header, { [css.greenBackground]: isHomePage })}>
      <div className={css.wrapper}>
        <Logo />
        <NavigationMenu />
        <UserMenu />
      </div>
      <MobileMenu />
    </header>
  );
};

export default AppBar;
