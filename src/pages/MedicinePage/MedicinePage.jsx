import Filters from '../../components/MedicinePage/Filters/Filters';
import MedicineList from '../../components/MedicinePage/MedicineList/MedicineList';
import css from './MedicinePage.module.css';

const MedicinePage = () => {
  return (
    <div className={css.wrapper}>
      <Filters />
      <MedicineList />
    </div>
  );
};

export default MedicinePage;
