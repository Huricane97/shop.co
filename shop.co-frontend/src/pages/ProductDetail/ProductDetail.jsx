import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import image1 from '../../assets/image 1.png'


const ProductDetail = () => {
  return (
    <>
        <div className='flex flex-col justify-center items-center'>
            <div className='w-[80%] flex flex-row '>
                <div className='w-2/4'>
                    <img src={image1} alt='image'/>
                </div>
                <div className='w-2/4 flex flex-col gap-[20px]'>
                <h2>One Life Graphic T-shirt</h2>
                    <div>
                        <FontAwesomeIcon className="text-amber-500" icon="fa-solid fa-star" />
                        <FontAwesomeIcon className="text-amber-500" icon="fa-solid fa-star" />
                        <FontAwesomeIcon className="text-amber-500" icon="fa-solid fa-star" />
                        <FontAwesomeIcon className="text-amber-500" icon="fa-solid fa-star" />
                        <FontAwesomeIcon className="text-amber-500" icon="fa-solid fa-star" />  
                    </div>
                    <h2>$260 <span className='text-gray-400 line-through'>$300</span></h2>
                    <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                    <hr/>
                    <p>Select Colors</p>
                    <hr/>
                    <p>Choose Size</p>
                    <hr/>

                    <div className='flex flex-row gap-3'>
                        <div className='flex flex-row gap-3 items-center text-2xl w-1/4 bg-gray-200 rounded-2xl justify-evenly'><FontAwesomeIcon icon='fas fa-minus' /> 1 <FontAwesomeIcon icon='fas fa-plus' /></div>
                        <button className='bg-black text-white py-1 px-4 rounded-2xl w-2/3'>Add to Cart</button>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDetail