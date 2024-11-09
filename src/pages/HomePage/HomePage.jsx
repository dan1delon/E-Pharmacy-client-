import MainBanner from '../../components/HomePage/MainBanner/MainBanner';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <MainBanner />
    </div>
  );
};

export default HomePage;
