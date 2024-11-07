import { NavLink, useLocation } from 'react-router-dom';
import Icon from '../../../shared/Icon/Icon';
import css from './Logo.module.css';

const Logo = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';

  return (
    <NavLink to="/home" className={css.wrapper}>
      <Icon
        iconId={isHomePage ? 'icon-logo-white' : 'icon-logo'}
        className={css.iconLogo}
      />
      <p className={css.logoText}>E-Pharmacy</p>
    </NavLink>
  );
};

export default Logo;
