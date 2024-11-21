import { useDispatch, useSelector } from 'react-redux';
import Filters from '../../components/MedicinePage/Filters/Filters';
import MedicineList from '../../components/MedicinePage/MedicineList/MedicineList';
import css from './MedicinePage.module.css';
import {
  fetchCategories,
  fetchProducts,
} from '../../redux/products/operations';
import { useEffect } from 'react';
import { selectIsLoading } from '../../redux/products/selectors';
import Loader from '../../components/Loader/Loader';

const MedicinePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Filters />
          <MedicineList />
        </>
      )}
    </div>
  );
};

export default MedicinePage;
