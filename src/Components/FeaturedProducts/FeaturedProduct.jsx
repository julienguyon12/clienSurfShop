import Card from '../../Components/Card/Card';
import './FeaturedProduct.scss';
import useFetch from '../../Hooks/useFetch';

const FeaturedProduct = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} products</h1>
        <p>See all our new product. Check it out!</p>
      </div>
      <div className='bottom'>
        {error
          ? 'something went wrong'
          : loading
          ? 'loading'
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProduct;
