import React from 'react';
import PuffLoader from 'react-spinners/PuffLoader';

const override = {
  display: 'block',
  margin: '0 auto',
};

const Loader = ({ isRefreshing }) => {
  return (
    <>
      <PuffLoader
        color='#6979f8'
        loading={isRefreshing}
        cssOverride={override}
        size={50}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </>
  );
};

export default Loader;
