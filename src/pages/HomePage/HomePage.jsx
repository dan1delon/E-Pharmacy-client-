import MainBanner from '../../components/HomePage/MainBanner/MainBanner';
import MedicineStores from '../../components/HomePage/MedicineStores/MedicineStores';
import PromoBanners from '../../components/HomePage/PromoBanners/PromoBanners';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <MainBanner />
      <PromoBanners />
      <MedicineStores />
    </div>
  );
};

export default HomePage;
