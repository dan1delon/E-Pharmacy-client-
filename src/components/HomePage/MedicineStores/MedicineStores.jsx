import css from './MedicineStores.module.css';
import nearestStores from '../../../nearest_pharmacies.json';
import StoreItem from '../StoreItem/StoreItem';
import { useNavigate } from 'react-router-dom';

const MedicineStores = () => {
  const navigate = useNavigate();
  const handleShopClick = () => {
    navigate('/medicine');
  };

  const getRandomStores = (stores, count) => {
    const shuffled = [...stores].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const stores = nearestStores;
  const randomStores = getRandomStores(stores, 6);

  return (
    <div className={css.wrapper}>
      <div className={css.textWrapper}>
        <h3 className={css.title}>Your Nearest Medicine Store</h3>
        <p className={css.paragraph}>
          Search for Medicine, Filter by your location
        </p>
      </div>

      <ul className={css.storesList}>
        {randomStores.map((store, index) => (
          <li key={index} className={css.storeItem} onClick={handleShopClick}>
            <StoreItem store={store} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineStores;
