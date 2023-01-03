import React from 'react';
import { ExternalLink } from 'react-external-link';

export const Footer: React.FC = () => {
  return (
    <div className='bottom-0 py-1 bg-[#575b62] text-white w-full'>
      <div className='flex flex-row justify-center'>
        <div>
          <p className='text-xs'>© 2023 Seat Map. Developed by {'  '}</p>
        </div>
        <div>
          <p className=' hover:text-blue-300 animate-bounce duration-500 text-xs ml-1'>
            <ExternalLink
              href={'https://olegyadroshnikov.com/'}
              target='_blank'
            >
              Oleg Yadroshnikov
            </ExternalLink>
          </p>
        </div>
      </div>
    </div>
  );
};
