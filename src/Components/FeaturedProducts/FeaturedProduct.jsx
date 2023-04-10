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
        {error ? (
          'something went wrong'
        ) : loading ? (
          <div className='loading'>
            <div>Loading</div>
            <svg
              className='spinner'
              width='65px'
              height='65px'
              viewBox='0 0 66 66'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle
                className='path'
                fill='none'
                strokeWidth='6'
                strokeLinecap='round'
                cx='33'
                cy='33'
                r='30'
              ></circle>
            </svg>
          </div>
        ) : (
          data.map((item) => <Card item={item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default FeaturedProduct;
