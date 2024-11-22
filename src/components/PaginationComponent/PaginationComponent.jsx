import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import css from './PaginationComponent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage, selectTotalPages } from '../../redux/stores/selectors';
import { useLocation } from 'react-router-dom';
import { selectProductsPage } from '../../redux/products/selectors';
import { fetchStores } from '../../redux/stores/operations';
import { fetchProducts } from '../../redux/products/operations';
import { changePage } from '../../redux/stores/slice';
import { changeProductsPage } from '../../redux/products/slice';
import { useEffect } from 'react';

const PaginationComponent = () => {
  const dispatch = useDispatch();
  let currentPage = 1;
  const pageCount = useSelector(selectTotalPages) || 1;
  const location = useLocation();

  if (location.pathname === '/medicine-store') {
    currentPage = useSelector(selectPage) || 1;
  } else if (location.pathname === '/medicine') {
    currentPage = useSelector(selectProductsPage) || 1;
  }

  useEffect(() => {
    const filters = {
      page: currentPage,
    };

    if (location.pathname === '/medicine-store') {
      dispatch(fetchStores({ ...filters, perPage: 9 }));
    }

    if (location.pathname === '/medicine') {
      dispatch(fetchProducts({ ...filters, perPage: 12 }));
    }
  }, [dispatch, currentPage]);

  const handleChange = (event, value) => {
    if (location.pathname === '/medicine-store') {
      dispatch(changePage(value));
    } else if (location.pathname === '/medicine') {
      dispatch(changeProductsPage(value));
    }
  };

  return (
    <div className={css.wrapper}>
      <Stack spacing={2} className={css.pagination}>
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          showFirstButton
          showLastButton
          siblingCount={0}
          boundaryCount={1}
          sx={{
            '& .MuiPaginationItem-root': {
              border: '1px solid rgba(18, 20, 23, 0.1)',
              borderRadius: '8px',
              padding: '10px',
              width: '32px',
              height: '32px',
              color: '#121417',
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '13px',
            },

            '& .MuiPaginationItem-root:hover': {
              background: '#85aa9f',
              color: 'white',
            },
          }}
        />
      </Stack>
    </div>
  );
};

export default PaginationComponent;
