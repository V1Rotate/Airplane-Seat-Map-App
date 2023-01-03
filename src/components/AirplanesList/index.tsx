import React from 'react';
import { Link } from 'react-router-dom';

// This is the each airplane module structure with the image and its title inside the button which can be pressed and get user to the airplane seat map.

type AirplanesListProps = {
  id: string;
  title: string;
  listImgUrl: string;
};

export const AirplanesList: React.FC<AirplanesListProps> = ({
  id,
  title,
  listImgUrl,
}) => {
  return (
    <div className='flex-col mb-10 md:mb-20 '>
      <div className='flex justify-center'>
        <img
          src={listImgUrl}
          alt='Air Plane'
          className=' w-[320px] md:w-[450px] xl:w-[600px] transform hover:scale-110 ease-in-out duration-1000 transition-transform hover:-translate-y-3.5 lg:hover:-translate-y-5 hover:-translate-x-6 lg:hover:-translate-x-18 2xl:hover:-translate-x-40 '
        />
      </div>
      <div className='flex justify-center'>
        <Link key={id} to={`/airplanes/${id}`}>
          <div className='flex justify-center bg-gray-500 opacity-80 rounded-xl w-[113px] h-[40px]'>
            <button className=' bg-gray-600  text-white h-[30px] px-2 m-auto border-none rounded-lg shadow-md hover:text-blue-300 hover:shadow-white duration-500'>
              {title}
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};
