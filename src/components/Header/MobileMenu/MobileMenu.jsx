import { useState } from 'react';
import Icon from '../../../shared/Icon/Icon';
import Logo from '../Logo/Logo';
import css from './MobileMenu.module.css';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <button type="button" className={css.button} onClick={toggleMenu}>
          <Icon iconId="icon-burger-menu" className={css.iconMenu} />
        </button>

        {isOpen && (
          <div className={css.mobileMenu}>
            <button className={css.closeBtn} onClick={toggleMenu}>
              <Icon iconId="icon-x" className={css.iconClose} />
            </button>
            <span />
            <NavigationMenu />
            <button
              type="button"
              className={css.buttonLogout}
              onClick={handleLogout}
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileMenu;
