import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

/* This is the second line page from the main page. This page shows the selected airplane model seat map. Seat Map is to be fetched from the API server using axios and async method to fetch the seat map of the airplane with its id. If there is any error catch with fetching, the user will be redirected to the main page.*/

const SelectedAirplane: React.FC = () => {
  const [airplane, setAirplane] = React.useState<{
    seatMapUrl: string;
    title: string;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchAirplane() {
      try {
        const { data } = await axios.get(
          'SECRET_API_URL' + id
        );
        setAirplane(data);
      } catch (error) {
        alert('Error with fetching the Airplane Seat Map');
        navigate('/');
      }
    }

    fetchAirplane();
  }, []);

  if (!airplane) {
    return <>Loading ...</>;
  }

  return (
    <div className='bg-[#ffffff] pt-20 md:pt-32 pb-10 min-h-screen '>
      <div className='flex justify-start overflow-x-auto md:justify-center cursor-touch scroll-mx-4 '>
        <img
          src={airplane.seatMapUrl}
          alt='Airplane Seat Map'
          className=' min-w-[900px] 2xl:w-[1500px] '
        />
      </div>
      <div className='flex flex-col'>
        <h2 className='flex justify-center mt-5 mb-10 text-xl font-medium '>
          {airplane.title}
        </h2>
      </div>
      <div className='flex justify-center '>
        <div className=' flex justify-center items-center bg-gray-500 rounded-xl w-[73px] h-[42px]  '>
          <Link to='/'>
            <button className=' bg-gray-600 text-white h-[30px] w-[65px] pb-1 border-none rounded-lg shadow-md hover:text-blue-300 hover:shadow-white duration-500'>
              <span>Back</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectedAirplane;
