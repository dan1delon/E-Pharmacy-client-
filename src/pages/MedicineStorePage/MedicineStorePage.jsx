import css from './MedicineStorePage.module.css';
import MedicineStores from '../../components/HomePage/MedicineStores/MedicineStores';
import { selectIsLoading } from '../../redux/stores/selectors';
import Loader from '../../components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../redux/stores/slice';
import { useEffect } from 'react';

const MedicineStorePage = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changePage(1));
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      <MedicineStores />
    </div>
  );
};

export default MedicineStorePage;
