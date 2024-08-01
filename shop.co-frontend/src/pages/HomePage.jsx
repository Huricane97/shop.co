import React from 'react';


const HomePage = () => {
  return (
    <div className="p-4 bg-[url('../assets/bg.png')] bg-no-repeat bg-cover h-[663px] flex  items-center">
        <div className='flex flex-col w-[40%] justify-center gap-4'>
            <h2 className="text-6xl">FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className='bg-black text-white rounded-2xl p-2 w-[100px]'>Shop Now</button>
        </div>
      
    </div>
  );
};

export default HomePage;
