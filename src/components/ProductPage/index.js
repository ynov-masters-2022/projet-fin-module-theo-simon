import { useParams } from 'react-router-dom';

export default () => {

  const { productId } = useParams();

  return (
    <>
      <h1>Product Page</h1>
      <p>{productId}</p>
    </>
  )
};