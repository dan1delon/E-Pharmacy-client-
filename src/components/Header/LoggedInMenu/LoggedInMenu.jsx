import css from './LoggedInMenu.module.css';
import Icon from '../../../shared/Icon/Icon';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

const LoggedInMenu = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';

  const handleLogout = () => {
    console.log('logout');
  };

  return (
    <div className={css.mainWrapper}>
      <div className={css.wrapper}>
        <div className={css.userCart}>
          <Icon iconId="icon-shopping-cart" className={css.iconCart} />
          <span className={css.cartCount}>0</span>
        </div>
        <div
          className={clsx(css.userAvatar, {
            [css.avatarWhiteColor]: isHomePage,
          })}
        >
          I
        </div>
      </div>
      <button
        type="button"
        className={clsx(css.button, { [css.buttonWhiteColor]: isHomePage })}
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
};

export default LoggedInMenu;
