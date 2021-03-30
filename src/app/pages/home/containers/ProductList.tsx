import React, { useState, useEffect } from 'react';
import { APIService, ENDPOINT } from '@app/shared/helpers/api/api.helper';
import { Loading } from '@app/shared/components/layout/Loading';
import ProductMiniature from './ProductMiniature';
import pageRenderer from '@app/shared/components/PageRenderer';

const http = new APIService;

function mapProductList(data) {
  let result = [];
  result = data.map(item => {
    item.price = parseFloat(item.price);
    return item;
  })
  return result;
}

export default function ProductList(props) {
  const [products, setProducts] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const getListProduct = () => {
    setIsProcessing(true);
    http.get([ENDPOINT.products.index]).then((response: Array<any>) => {
      setProducts(mapProductList(response));
      setIsProcessing(false);
    })
    .catch((error) => {
      setIsProcessing(false);
      setError(error);
    });
  }

  useEffect(() => {
    getListProduct();
  }, []);

  const ListProduct = (props) => {
    return (
      (props.data && props.data.length) ? (
        <ul className="product-list-inner">
          { props.data.map((item, index) => (
            <li className="product-list-item" key={index}>
              <ProductMiniature product={item} />
            </li>
          )) }
        </ul>
      ) : (
        <h2>There is no data.</h2>
      )
    )
  };

  const PageContent = pageRenderer(ListProduct);

  return(
    <div className="product-list container">
      <PageContent isLoading={isProcessing} data={products} error={error} />
    </div>
  )
}
