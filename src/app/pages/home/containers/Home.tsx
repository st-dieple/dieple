import React from 'react';
import ProductList from './ProductList';
import { Banner } from '@app/shared/components/layout/Banner';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="page-wrapper">
        <ProductList />
      </div>
    </div>
  )
}

export default Home;
