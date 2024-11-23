import { MutatingDots } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.background}>
      <MutatingDots
        visible={true}
        height="120"
        width="120"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="15"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass={css.wrapper}
      />
    </div>
  );
};

export default Loader;
