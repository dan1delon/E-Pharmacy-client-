import CartOverview from '../../components/CartPage/CartOverview/CartOverview';
import OrderPlacement from '../../components/CartPage/OrderPlacement/OrderPlacement';
import css from './CartPage.module.css';

const CartPage = () => {
  return (
    <div className={css.wrapper}>
      <OrderPlacement />
      <CartOverview />
    </div>
  );
};

export default CartPage;
