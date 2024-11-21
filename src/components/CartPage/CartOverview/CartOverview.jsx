import { useState } from 'react';
import Icon from '../../../shared/Icon/Icon';
import css from './CartOverview.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '../../../redux/cart/selectors';
import { updateCart } from '../../../redux/cart/operations';

const CartOverview = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const handleAdd = productId => {
    setQuantity(prevQuantity => prevQuantity + 1);
    dispatch(updateCart({ productId, quantity }));
  };

  const handleRemove = productId => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      dispatch(updateCart({ productId, quantity }));
    }
  };

  const handleDeleteProduct = productId => {};

  return (
    <ul className={css.cartList}>
      {cart.map(product => (
        <li key={product._id} className={css.cartItem}>
          <img
            src={product.product.photo}
            alt={product.product.name}
            className={css.productImage}
          />
          <div className={css.productDetails}>
            <div className={css.productInfo}>
              <div className={css.productNameWrapper}>
                <h3 className={css.productName}>{product.product.name}</h3>
                <p className={css.productSupplier}>
                  {product.product.suppliers}
                </p>
              </div>
              <p className={css.productPrice}>₴{product.product.price}</p>
            </div>
            <div className={css.btnWrapper}>
              <div className={css.buttonAddRemoveWrapper}>
                <button
                  type="button"
                  className={css.buttonAddRemove}
                  onClick={() => handleAdd(product.id)}
                >
                  <Icon iconId="icon-plus" className={css.icon} />
                </button>
                <p className={css.quantity}>{product.quantity}</p>
                <button
                  type="button"
                  className={css.buttonAddRemove}
                  onClick={() => handleRemove(product._id)}
                >
                  <Icon iconId="icon-minus" className={css.icon} />
                </button>
              </div>
              <button
                type="button"
                className={css.btnRemove}
                onClick={() => handleDeleteProduct(product._id)}
              >
                Remove
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartOverview;
