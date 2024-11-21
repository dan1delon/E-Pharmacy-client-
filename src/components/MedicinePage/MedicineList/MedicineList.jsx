import css from './MedicineList.module.css';
import MedicineItem from '../MedicineItem/MedicineItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from '../../../redux/products/selectors.js';
import { fetchProducts } from '../../../redux/products/operations';
import { useEffect } from 'react';

const MedicineList = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ul className={css.productList}>
      {products.map(product => (
        <li key={product.id} className={css.productItem}>
          <MedicineItem product={product} />
        </li>
      ))}
    </ul>
  );
};

export default MedicineList;
