import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import List from '../../Components/List/List';
import useFetch from '../../Hooks/useFetch';
import './Products.scss';

const Products = () => {
  const catId = parseInt(useParams().id);
  const [instantMaxPrice, setInstantMaxPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState('asc');
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [expendCategorie, setExpendCategorie] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setExpendCategorie(false);
  }, [location]);
  const [expendFilter, setExpendFilter] = useState(false);
  useEffect(() => {
    setExpendFilter(false);
  }, [location]);
  const [expendSort, setExpendSort] = useState(false);
  useEffect(() => {
    setExpendSort(false);
  }, [location]);
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][cotegories][id][$eq]=${catId}`
  );
  const {
    data: products,
    loading: productsLoading,
    error: productsError,
  } = useFetch(`/cotegories/${catId}?populate=*`);
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem' id={expendCategorie ? 'on' : 'off'}>
          <button
            onClick={() => {
              setExpendSort(false);
              setExpendFilter(false);
              setExpendCategorie((prev) => !prev);
            }}
          >
            <h2>Categories</h2>
          </button>
          <div className='sort'>
            {error
              ? 'something went wrong'
              : loading
              ? 'loading'
              : data?.map((item) => (
                  <div className='inputItem' key={item.id}>
                    <input
                      type='checkbox'
                      id={item.id}
                      value={item.id}
                      onChange={handleChange}
                    />
                    <label htmlFor={item.id}>{item.attributes.title}</label>
                  </div>
                ))}
          </div>
        </div>
        <div className='filterItem' id={expendFilter ? 'plus' : 'moins'}>
          <button
            onClick={() => {
              setExpendSort(false);
              setExpendCategorie(false);
              setExpendFilter((prev) => !prev);
            }}
          >
            <h2>Filter by price</h2>
          </button>
          <div className='inputItem'>
            <div>
              <span>0</span>
              <input
                type='range'
                min={0}
                max={1000}
                onChange={(e) => setInstantMaxPrice(e.target.value)}
              />
              <span>{instantMaxPrice}</span>
            </div>
            <button
              className='priceButton'
              onClick={() => {
                setMaxPrice(instantMaxPrice);
              }}
            >
              Apply
            </button>
          </div>
        </div>
        <div className='filterItem' id={expendSort ? 'more' : 'less'}>
          <button
            onClick={() => {
              setExpendFilter(false);
              setExpendCategorie(false);
              setExpendSort((prev) => !prev);
            }}
          >
            <h2>Sort by</h2>
          </button>
          <div className='sort'>
            <div className='inputItem'>
              <input
                type='radio'
                id='asc'
                value='asc'
                name='price'
                onChange={(e) => setSort('asc')}
              />
              <label htmlFor='asc'>Price (Lowest first)</label>
            </div>
            <div className='inputItem'>
              <input
                type='radio'
                id='desc'
                value='desc'
                name='price'
                onChange={(e) => setSort('desc')}
              />
              <label htmlFor='desc'>Price (Highest first)</label>
            </div>
          </div>
        </div>
      </div>
      <div className='right'>
        <img
          className='catImg'
          src={
            productsError
              ? 'something went wrong'
              : productsLoading
              ? 'loading'
              : products?.attributes?.img?.data?.attributes?.url
          }
          alt=''
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;
