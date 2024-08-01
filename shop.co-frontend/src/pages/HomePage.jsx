import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";

import img1 from "../assets/Frame 32.png";
import img2 from "../assets/Frame 33.png";
import img3 from "../assets/Frame 34.png";
import img4 from "../assets/Frame 38.png";

const HomePage = () => {
  return (
    <>
      <div className="p-4 bg-[url('../assets/bg.png')] bg-no-repeat bg-cover h-[663px] flex  items-center">
        <div className="flex flex-col w-[40%] justify-center gap-4 ">
          <h2 className="text-6xl">FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
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

      <div className="p-4  flex  items-center">
        <div className="flex flex-col justify-center gap-4 items-center w-full">
          <h2 className="text-4xl">New Arrivals</h2>

          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col items-start">
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
            <div className="flex flex-col items-start">
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
            <div className="flex flex-col items-start">
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
            <div className="flex flex-col items-start">
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

      <div className="p-4  flex  items-center">
        <div className="flex flex-col justify-center gap-4 items-center w-full">
          <h2 className="text-4xl">top selling</h2>

          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col items-start">
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
            <div className="flex flex-col items-start">
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
            <div className="flex flex-col items-start">
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
            <div className="flex flex-col items-start">
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
    </>
  );
};

export default HomePage;
library.add(fab, fas, far);
