import React from 'react';
import './List.scss';
import Card from '../Card/Card';
import useFetch from '../../Hooks/useFetch';

const List = ({ maxPrice, sort, catId, subCats }) => {
  console.log(subCats);
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][cotegories][id][$eq]= ${catId}${
      subCats.length > 0
        ? `&[filters][sub_categories][id][$eq]=${subCats.join(
            '&[filters][sub_categories][id][$eq]='
          )}`
        : ''
    }&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  return (
    <div className='list'>
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
        data?.map((item) => <Card item={item} key={item.id} />)
      )}
    </div>
  );
};

export default List;
