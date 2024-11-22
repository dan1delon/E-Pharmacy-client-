import { useDispatch, useSelector } from 'react-redux';
import Filters from '../../components/MedicinePage/Filters/Filters';
import MedicineList from '../../components/MedicinePage/MedicineList/MedicineList';
import css from './MedicinePage.module.css';
import {
  fetchCategories,
  fetchProducts,
} from '../../redux/products/operations';
import { useEffect } from 'react';
import {
  selectIsLoading,
  selectProductsPage,
} from '../../redux/products/selectors';
import Loader from '../../components/Loader/Loader';
import PaginationComponent from '../../components/PaginationComponent/PaginationComponent';

const MedicinePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectProductsPage);

  useEffect(() => {
    if (page !== null) {
      dispatch(fetchProducts({ page }));
    }
    dispatch(fetchCategories());
  }, [dispatch, page]);

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Filters />
          <MedicineList />
          <PaginationComponent />
        </>
      )}
    </div>
  );
};

export default MedicinePage;
