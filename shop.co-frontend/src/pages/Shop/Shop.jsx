import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Shop = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/products/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const onProductClick = (productId) => {
    navigate(`/ProductDetail/${productId}`);
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4 flex justify-center items-center my-5">
        <div className="flex flex-col justify-center gap-4 items-center w-[80%] py-[40px] ">
            <h2>Shop</h2>
            <div className="flex flex-wrap justify-between w-full">
                {data.map((product, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start hover:cursor-pointer m-4 bg-gray-200 w-[22%] h-[400px] p-2"
                        onClick={() => onProductClick(product.id)}
                    >
                        <img src={product.images[0]} alt={product.name} className="w-full h-[60%] object-cover" />
                        <h3 className="font-bold mt-2">{product.title}</h3>
                        <div className="flex mt-1">
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                        </div>
                        <h3 className="font-bold mt-2">${product.price}</h3>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
}

export default Shop;
