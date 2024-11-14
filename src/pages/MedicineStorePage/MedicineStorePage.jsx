import css from './MedicineStorePage.module.css';
import medicineStores from '../../pharmacies.json';
import MedicineStores from '../../components/HomePage/MedicineStores/MedicineStores';

const MedicineStorePage = () => {
  const stores = medicineStores;

  return (
    <div className={css.wrapper}>
      <MedicineStores />
    </div>
  );
};

export default MedicineStorePage;
