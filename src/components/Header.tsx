import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <div className='max-w-full bg-[#575b62]'>
      <div className='flex-col '>
        <div className='flex justify-center'>
          <Link to='/'>
            <img
              src={Logo}
              alt='Seat Map Logo'
              className='w-[170px] xl:w-[250px] rounded-xl mt-4 mb-2 shadow-md shadow-white hover:shadow-blue-300 duration-500'
            />
          </Link>
        </div>
        <div className='flex justify-center pb-2'>
          <p className='text-xs tracking-normal text-white md:text-base md:tracking-wider animate-pulse'>
            Simple and fast way to find your airplane seat map.
          </p>
        </div>
      </div>
    </div>
  );
};
