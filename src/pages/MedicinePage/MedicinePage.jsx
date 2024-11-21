import { useDispatch } from 'react-redux';
import Filters from '../../components/MedicinePage/Filters/Filters';
import MedicineList from '../../components/MedicinePage/MedicineList/MedicineList';
import css from './MedicinePage.module.css';
import {
  fetchCategories,
  fetchProducts,
} from '../../redux/products/operations';
import { useEffect } from 'react';

const MedicinePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <Filters />
      <MedicineList />
    </div>
  );
};

export default MedicinePage;
