import css from './MedicineStorePage.module.css';
import MedicineStores from '../../components/HomePage/MedicineStores/MedicineStores';

const MedicineStorePage = () => {
  return (
    <div className={css.wrapper}>
      <MedicineStores />
    </div>
  );
};

export default MedicineStorePage;
