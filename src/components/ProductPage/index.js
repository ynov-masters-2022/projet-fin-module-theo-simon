import { Suspense } from 'react';
import {createFromFetch} from 'react-server-dom-webpack';
import { useParams } from 'react-router-dom';

import Product from './Product.server';

export default () => {

  const { productId } = useParams();

  function useServerResponse(productId) {
    const key = JSON.stringify(productId);
    response = createFromFetch(
      fetch('http://localhost:3000/getProductPage?productId=' + encodeURIComponent(key))
    );
    return response;
  }

  const response = useServerResponse(productId);

  return (
    <Suspense fallback="chargement...">
      { response.readRoot() }
    </Suspense>
  )
};