import { Toaster } from 'react-hot-toast';
import AppBar from '../Header/AppBar/AppBar';
import css from './Layout.module.css';
import clsx from 'clsx';
import { toastOptions } from '../../helpers/toasterOptions';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className={clsx(css.container)}>
      <AppBar />
      <main className={css.content}>
        <Toaster position="top-right" toastOptions={toastOptions} />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
