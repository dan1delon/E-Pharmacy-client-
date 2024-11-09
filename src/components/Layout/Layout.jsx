import { Toaster } from 'react-hot-toast';
import AppBar from '../Header/AppBar/AppBar';
import css from './Layout.module.css';
import clsx from 'clsx';
import { toastOptions } from '../../helpers/toasterOptions';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  const isAuthorizationPage =
    location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className={css.container}>
      <AppBar />
      <main
        className={clsx(css.content, {
          [css.authorizationPage]: isAuthorizationPage,
        })}
      >
        <Toaster position="top-right" toastOptions={toastOptions} />
        {children}
      </main>
      {!isAuthorizationPage && <Footer />}
    </div>
  );
};

export default Layout;
