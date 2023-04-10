import React, { useState } from 'react';
import './Product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState('img');
  const [quantity, setQuantity] = useState(1);
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const dispatch = useDispatch();
  console.log(data);
  return (
    <div className='product'>
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
        <>
          <div className='left'>
            <div className='images'>
              <img
                src={data?.attributes?.img?.data?.attributes?.url}
                alt=''
                onClick={(e) => setSelectedImg('img')}
              />
              <img
                src={data?.attributes?.img2?.data?.attributes?.url}
                alt=''
                onClick={(e) => setSelectedImg('img2')}
              />
            </div>
            <div className='mainImg'>
              <img
                src={data?.attributes?.[selectedImg]?.data?.attributes?.url}
                alt=''
              />
            </div>
          </div>
          <div className='right'>
            <h1>{data?.attributes?.title}</h1>
            <span>{data?.attributes?.price}$</span>
            <p>{data?.attributes?.desc}</p>
            <div className='quantity'>
              <button
                onClick={() => {
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
                }}
              >
                -
              </button>
              {quantity}
              <button
                onClick={(e) => {
                  setQuantity((prev) => prev + 1);
                }}
              >
                +
              </button>
            </div>
            <button
              className='add'
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className='links'>
              <div className='item'>
                <FavoriteBorderIcon /> ADD TO FAVORITE
              </div>
              <div className='item'>
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className='info'>
              <span>Vendor: Polo</span>
              <span>
                Product Type:{' '}
                {data?.attributes?.cotegories?.data[0]?.attributes?.title}
              </span>
              <span>
                Tag: {data?.attributes?.cotegories?.data[0]?.attributes?.title}{' '}
                {data?.attributes?.sub_categories?.data[0]?.attributes?.title}{' '}
                {data?.attributes?.sub_categories?.data[1]?.attributes?.title}{' '}
                {data?.attributes?.sub_categories?.data[2]?.attributes?.title}{' '}
                {data?.attributes?.sub_categories?.data[3]?.attributes?.title}{' '}
                {data?.attributes?.sub_categories?.data[4]?.attributes?.title}{' '}
                {data?.attributes?.sub_categories?.data[5]?.attributes?.title}{' '}
              </span>
            </div>
            <hr />
            <div className='info'>
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
