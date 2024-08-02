import React from "react";
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import img1 from "../../assets/Frame 32.png";
import img2 from "../../assets/Frame 33.png";
import img3 from "../../assets/Frame 34.png";
import img4 from "../../assets/Frame 38.png";

const Shop = () => {
    const navigate = useNavigate();

    const onproductClick = () =>{
        navigate('/ProductDetail');
    }
  return (
    <>
      <div className="p-4  flex justify-center items-center">
        <div className="flex flex-col justify-center gap-4 items-center w-[80%] py-[40px]">
        <h2>Shop</h2>

          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col items-start hover:cursor-pointer" onClick={onproductClick}>
              <img src={img1} alt="logo" />
              <h3 className="font-bold">T-Shirt with tape details</h3>
              <div>
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-solid fa-star" />
              </div>

              <h3 className="font-bold">$120</h3>
            </div>
            <div className="flex flex-col items-start hover:cursor-pointer" onClick={onproductClick}>
              <img src={img2} alt="logo" />
              <h3 className="font-bold">T-Shirt with tape details</h3>
              <div>
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-regular fa-star" />
                <FontAwesomeIcon icon="fa-regular fa-star" />
              </div>
              <h3 className="font-bold">$120</h3>
            </div>
            <div className="flex flex-col items-start hover:cursor-pointer" onClick={onproductClick}>
              <img src={img3} alt="logo" />
              <h3 className="font-bold">T-Shirt with tape details</h3>
              <div>
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-regular fa-star" />
              </div>
              <h3 className="font-bold">$120</h3>
            </div>
            <div className="flex flex-col items-start hover:cursor-pointer" onClick={onproductClick}>
              <img src={img4} alt="logo" />
              <h3 className="font-bold">T-Shirt with tape details</h3>
              <div>
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-regular fa-star" />
              </div>
              <h3 className="font-bold">$120</h3>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Shop