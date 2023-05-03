import { useParams } from 'react-router-dom';
import { Fragment } from 'react';

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Products Details!</h1>
      <p>{params.productId}</p>
    </Fragment>
  );
};

export default ProductDetailPage;
