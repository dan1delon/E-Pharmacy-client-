import css from './MedicineList.module.css';
import fetchedProducts from '../../../products.json';
import MedicineItem from '../MedicineItem/MedicineItem';

const MedicineList = () => {
  const products = fetchedProducts;

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
