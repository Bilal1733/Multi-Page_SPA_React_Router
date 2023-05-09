import { useParams, Link } from 'react-router-dom';
import { Fragment } from 'react';

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Products Details!</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative='path'>Back</Link>
      </p>
    </Fragment>
  );
};

export default ProductDetailPage;
