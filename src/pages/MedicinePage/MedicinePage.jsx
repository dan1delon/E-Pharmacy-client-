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
  const currentPage = useSelector(selectProductsPage);

  useEffect(() => {
    dispatch(fetchProducts({ perPage: 12, page: currentPage }));
    dispatch(fetchCategories());
  }, [dispatch, currentPage]);

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
