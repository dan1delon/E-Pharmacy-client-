import css from './LoggedInMenu.module.css';
import Icon from '../../../shared/Icon/Icon';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { logoutAPI } from '../../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken, selectUserInfo } from '../../../redux/auth/selectors';
import { useEffect } from 'react';
import { getUserInfoAPI } from '../../../redux/auth/operations';

const LoggedInMenu = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';
  const userInfo = useSelector(selectUserInfo);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getUserInfoAPI());
    }
  }, [dispatch, token]);

  const handleLogout = () => {
    dispatch(logoutAPI());
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
          {(userInfo && userInfo.name && userInfo.name[0]) || 'U'}
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
