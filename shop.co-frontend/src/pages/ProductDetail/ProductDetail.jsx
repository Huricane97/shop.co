import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image1 from '../../assets/image 1.png';

const ProductDetail = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); // To handle fetch errors
  const { productid } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/products/${productid}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
      });
  }, [productid]);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center my-5">
        <div className="w-[80%] flex flex-row">
          <div className="w-2/4">
            <img src={data.thumbnail || image1} alt={data.title} />
          </div>
          <div className="w-2/4 flex flex-col gap-[20px]">
            <h2>{data.title}</h2>
            <div>
              {[...Array(Math.round(data.rating))].map((_, i) => (
                <FontAwesomeIcon key={i} className="text-amber-500" icon="fa-solid fa-star" />
              ))}
              {[...Array(5 - Math.round(data.rating))].map((_, i) => (
                <FontAwesomeIcon key={i + Math.round(data.rating)} className="text-amber-500" icon="fa-regular fa-star" />
              ))}
            </div>
            <h2>${data.price} <span className="text-gray-400 line-through">${(data.price / (1 - data.discountPercentage / 100)).toFixed(2)}</span></h2>
            <p>{data.description}</p>
            <hr />
            <p>Select Colors</p>
            <hr />
            <p>Choose Size</p>
            <hr />
            <div className="flex flex-row gap-3">
              <div className="flex flex-row gap-3 items-center text-2xl w-1/4 bg-gray-200 rounded-2xl justify-evenly">
                <FontAwesomeIcon icon="fas fa-minus" /> 1 <FontAwesomeIcon icon="fas fa-plus" />
              </div>
              <button className="bg-black text-white py-1 px-4 rounded-2xl w-2/3">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
