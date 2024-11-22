import { useEffect } from 'react';
import css from './MedicineStores.module.css';
import StoreItem from '../StoreItem/StoreItem';
import { useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectNearestStores,
  selectStores,
} from '../../../redux/stores/selectors';
import {
  fetchNearestStores,
  fetchStores,
} from '../../../redux/stores/operations';
import PaginationComponent from '../../PaginationComponent/PaginationComponent';

const MedicineStores = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const nearestStores = useSelector(selectNearestStores);
  const allStores = useSelector(selectStores);

  const isMedicineStorePage = location.pathname === '/medicine-store';

  useEffect(() => {
    if (isMedicineStorePage) {
      dispatch(fetchStores({ perPage: 9 }));
    } else {
      dispatch(fetchNearestStores());
    }
  }, [dispatch, isMedicineStorePage]);

  const handleShopClick = () => {
    navigate('/medicine');
  };

  const getRandomStores = (stores, count) => {
    if (!Array.isArray(stores)) {
      return [];
    }
    const shuffled = [...stores].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const storesToShow = isMedicineStorePage
    ? allStores
    : getRandomStores(nearestStores, 6);

  return (
    <div className={isMedicineStorePage ? css.medicineWrapper : css.wrapper}>
      {isMedicineStorePage ? (
        <h2 className={css.medicineTitle}>Medicine store</h2>
      ) : (
        <div className={css.textWrapper}>
          <h3 className={css.title}>Your Nearest Medicine Store</h3>
          <p className={css.paragraph}>
            Search for Medicine, Filter by your location
          </p>
        </div>
      )}

      <ul
        className={clsx(css.storesList, {
          [css.medicineStoreList]: isMedicineStorePage,
        })}
      >
        {storesToShow.map((store, index) => (
          <li
            key={store._id || index}
            className={clsx(css.storeItem, {
              [css.medicineStoreItem]: isMedicineStorePage,
            })}
            onClick={isMedicineStorePage ? undefined : handleShopClick}
          >
            <StoreItem
              store={store}
              isMedicineStorePage={isMedicineStorePage}
            />
          </li>
        ))}
      </ul>
      {isMedicineStorePage && <PaginationComponent />}
    </div>
  );
};

export default MedicineStores;
