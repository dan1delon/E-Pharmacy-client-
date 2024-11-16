import ProductOverview from '../../components/ProductPage/ProductOverview/ProductOverview';
import TabsContainer from '../../components/ProductPage/TabsContainer/TabsContainer';
import css from './ProductPage.module.css';

const ProductPage = () => {
  return (
    <div className={css.wrapper}>
      <ProductOverview />
      <TabsContainer />
    </div>
  );
};

export default ProductPage;
