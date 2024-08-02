import React from 'react'

const Signup = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen'>
        <div className='w-1/2 flex flex-col justify-center items-center gap-[20px] bg-gray-300 py-[50px] border-2 rounded-2xl'>
            <h2>Signup</h2>
            <input type='email' placeholder='Email' className='border-2 rounded-2xl p-3 w-1/2'/>
            <input type='password' placeholder='Password' className='border-2 rounded-2xl p-3 w-1/2'/>
            <button className=' rounded-2xl px-5 py-3 bg-black text-white '>Signup</button>

            <p>Already Have Account <a href='/Login' className='text-blue-500'> Login Here</a></p>
        </div>
    </div>
    </>
  )
}

export default Signup