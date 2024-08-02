import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/SHOP.CO.png";
import payment from "../assets/Frame 53.png";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gray-100 pt-[100px] pb-5 gap-[20px]">

        <div className="flex flex-row gap-5 w-[80%]">
          <div className="flex flex-col w-1/5 gap-[20px]">
            <img className="w-3/4" src={logo} alt="Logo" />
            <p>
              We have clothes that suits your style and which youre proud to
              wear. From women to men.
            </p>
            <div className="flex flex-row gap-3">
                <FontAwesomeIcon className="text-xl" icon="fab fa-twitter"/>
                <FontAwesomeIcon className="text-xl" icon="fab fa-facebook"/>
                <FontAwesomeIcon className="text-xl" icon="fab fa-instagram"/>
                <FontAwesomeIcon className="text-xl" icon="fab fa-github"/>

            </div>
          </div>
          <div className="flex flex-col w-1/5 gap-[20px]">
            <h3 className="font-bold">Company</h3>
            <p>About </p>
            <p> Features </p>
            <p> Works </p>
            <p> Career </p>
          </div>
          <div className="flex flex-col w-1/5 gap-[20px]">
            <h3 className="font-bold">Help</h3>
            <p> Customer Support</p>

            <p> Delivery Details</p>

            <p> Terms & Conditions</p>

            <p> Privacy Policy </p>
          </div>
          <div className="flex flex-col w-1/5 gap-[20px]">
            <h3 className="font-bold">FAQ</h3>
            <p> Account</p>

            <p> Manage Deliveries</p>

            <p> Orders</p>

            <p> Payments </p>
          </div>
          <div className="flex flex-col w-1/5 gap-[20px]">
            <h3 className="font-bold">Resources</h3>
            <p> Free eBooks</p>

            <p> Development Tutorial</p>

            <p> How to - Blog</p>

            <p> Youtube Playlist </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between w-[80%]">
            <div>Shop.co © 2000-2023, All Rights Reserved</div>
            <div><img src={payment}/></div>
        </div>

      </div>
    </>
  );
};

export default Footer;
