import React from 'react';
import logo from '../assets/SHOP.CO.png'
import '../styles/tailwind.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className="bg-white-500 text-black p-4">
        <div className='flex flex-row justify-between items-center'>
            <img src={logo} alt='Logo'/>
            <nav className='flex flex-row gap-[20px] font-medium'>
                <a href='#'>Shop</a>
                <a href='#'>On Sale</a>
                <a href='#'>New Arrivals</a>
                <a href='#'>Brands</a>
            </nav>

            <div className='flex flex-row bg-gray-200 px-2 py-2 rounded-3xl gap-3 items-center '>
                <FontAwesomeIcon icon={faSearch} />
                <input className='bg-transparent' placeholder='Search for products...' />
            </div>
            <div className='flex flex-row gap-3'>
                <FontAwesomeIcon className='text-xl' icon={faShoppingCart} />
                <FontAwesomeIcon className='text-xl' icon={faUser} />
            </div>
        </div>
    </header>
  );
};

export default Header;
