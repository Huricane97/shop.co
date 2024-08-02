import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";

import img1 from "../../assets/Frame 32.png";
import img2 from "../../assets/Frame 33.png";
import img3 from "../../assets/Frame 34.png";
import img4 from "../../assets/Frame 38.png";

import img5 from "../../assets/Frame 32 (1).png";
import img6 from "../../assets/Frame 33 (1).png";
import img7 from "../../assets/Frame 34 (1).png";
import img8 from "../../assets/Frame 38 (1).png";

import img9 from "../../assets/Frame 61.png";
import img10 from "../../assets/Frame 62 (1).png";
import img11 from "../../assets/Frame 63.png";
import img12 from "../../assets/Frame 64.png";

const HomePage = () => {

  const navigate = useNavigate();

  const onproductClick = () =>{
      navigate('/ProductDetail');
  }

  return (
    <>
      <div className="p-4 bg-[url('../assets/bg.png')] bg-no-repeat bg-cover h-[663px] flex  items-center">
        <div className="flex flex-col w-[40%] justify-center gap-4 pl-[50px]">
        <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-white rounded-3xl p-2 w-[100px]">
            Shop Now
          </button>
        </div>
      </div>

      <div className="flex flex-row bg-black py-5 px-3 justify-between">
        <img src={logo1} alt="logo" />
        <img src={logo2} alt="logo" />
        <img src={logo3} alt="logo" />
        <img src={logo4} alt="logo" />
        <img src={logo5} alt="logo" />
      </div>

      <div className="p-4  flex justify-center items-center">
        <div className="flex flex-col justify-center gap-4 items-center w-[80%] py-[40px]">
        <h2>New Arrivals</h2>

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

          <div>
            <button className="border px-5 py-1 rounded-2xl">View All</button>
          </div>
        </div>
      </div>

      <div className="p-4  flex justify-center items-center">
        <div className="flex flex-col justify-center gap-4 items-center w-[80%] py-[40px]">
        <h2>top selling</h2>

          <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col items-start hover:cursor-pointer" onClick={onproductClick}>
          <img src={img5} alt="logo" />
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
              <img src={img6} alt="logo" />
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
              <img src={img7} alt="logo" />
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
              <img src={img8} alt="logo" />
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

          <div>
            <button className="border px-5 py-1 rounded-2xl">View All</button>
          </div>
        </div>
      </div>

      <div className="p-4  flex justify-center items-center ">
        <div className="flex flex-col bg-gray-100 justify-center gap-4 items-center w-[80%] rounded-2xl p-[50px]">
        <h2>BROWSE BY dress STYLE</h2>

          <div className="flex flex-col w-full gap-4 p-5">
            <div className="flex flex-row w-full gap-2">
              <div className="w-1/4 ">
                <img src={img9} className="h-[289px] " alt="logo" />
              </div>
              <div className="w-3/4 ">
                <img src={img10} className="h-[289px] w-full" alt="logo" />
              </div>
            </div>

            <div className="flex flex-row w-full gap-2">
              <div className="w-3/4 ">
                <img src={img12} className="h-[289px] w-full" alt="logo" />
              </div>
              <div className="w-1/4 ">
                <img src={img11} className="h-[289px]" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4  flex justify-center items-center">
        <div className="flex flex-col gap-4  w-[80%]">
        <h2>OUR HAPPY CUSTOMERS</h2>

          <div className="flex flex-col p-4 border rounded-2xl w-1/4">
              <div>
                <FontAwesomeIcon className="text-amber-500" icon="fa-solid fa-star" />
                <FontAwesomeIcon className="text-amber-500" icon="fa-solid fa-star" />
                <FontAwesomeIcon className="text-amber-500" icon="fa-solid fa-star" />
                <FontAwesomeIcon className="text-amber-500" icon="fa-solid fa-star" />
                <FontAwesomeIcon className="text-amber-500" icon="fa-solid fa-star" />
              </div>
              <h3 className="font-bold">
                Sarah M. <FontAwesomeIcon className="text-green-600" icon="fas fa-circle-check"></FontAwesomeIcon>
              </h3>
              <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default HomePage;
library.add(fab, fas, far);
