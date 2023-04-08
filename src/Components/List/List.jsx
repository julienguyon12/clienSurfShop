import React from 'react';
import './List.scss';
import Card from '../Card/Card';
import useFetch from '../../Hooks/useFetch';

const List = ({ maxPrice, sort, catId, subCats }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][cotegories][id][$eq]= ${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  return (
    <div className='list'>
      {error
        ? 'something went wrong'
        : loading
        ? 'loading'
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
