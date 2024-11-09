import { useState } from 'react';
import Icon from '../../../shared/Icon/Icon';
import Logo from '../Logo/Logo';
import css from './MobileMenu.module.css';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/home';
  const isAuthorizationPage =
    location.pathname === '/login' || location.pathname === '/register';

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleLogout = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && <div className={css.overlay} onClick={toggleMenu} />}
      <div className={css.wrapper}>
        <Logo />
        {!isAuthorizationPage && (
          <button type="button" className={css.button} onClick={toggleMenu}>
            <Icon
              iconId="icon-burger-menu"
              className={clsx(css.iconMenu, {
                [css.iconMenuBlack]: !isHomePage,
              })}
            />
          </button>
        )}

        {isOpen && (
          <div className={css.mobileMenu}>
            <button className={css.closeBtn} onClick={toggleMenu}>
              <Icon iconId="icon-x" className={css.iconClose} />
            </button>
            <span />
            <NavigationMenu toggleMenu={toggleMenu} />
            <div className={css.btnWrapper}>
              <NavLink
                to="/register"
                className={css.btnRegister}
                onClick={toggleMenu}
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className={css.btnLogin}
                onClick={toggleMenu}
              >
                Log in
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileMenu;
