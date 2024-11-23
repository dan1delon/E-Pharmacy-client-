import { MutatingDots } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.background}>
      <MutatingDots
        visible={true}
        height="150"
        width="150"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass={css.wrapper}
      />
    </div>
  );
};

export default Loader;
