import AddPharmacyPromo from '../../components/HomePage/AddPharmacyPromo/AddPharmacyPromo';
import MainBanner from '../../components/HomePage/MainBanner/MainBanner';
import MedicineStores from '../../components/HomePage/MedicineStores/MedicineStores';
import PromoBanners from '../../components/HomePage/PromoBanners/PromoBanners';
import ReviewsSection from '../../components/HomePage/ReviewsSection/ReviewsSection';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <MainBanner />
      <PromoBanners />
      <MedicineStores />
      <AddPharmacyPromo />
      <ReviewsSection />
    </div>
  );
};

export default HomePage;
