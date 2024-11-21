import { useSelector } from 'react-redux';
import CartOverview from '../../components/CartPage/CartOverview/CartOverview';
import OrderPlacement from '../../components/CartPage/OrderPlacement/OrderPlacement';
import css from './CartPage.module.css';
import { selectIsLoading } from '../../redux/cart/selectors';
import Loader from '../../components/Loader/Loader';

const CartPage = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <OrderPlacement />
          <CartOverview />
        </>
      )}
    </div>
  );
};

export default CartPage;
