import React from 'react';

import { useSelector } from 'react-redux';

import { AirplanesList } from '../components/AirplanesList';
import { Skeleton } from '../components/AirplanesList/Skeleton';

import { useAppDispatch } from '../redux/store';
import { selectSearch } from '../redux/search/selectors';
import { selectAirplaneData } from '../redux/airplane/selectors';
import { fetchAirplanes } from '../redux/airplane/asyncActions';

import { Search } from '../components/Search';

/* This is the main page where all the availble airplane models fetched from the API server. User is allowed to search for a specific airplane model by the airplane model input (Search component integrated). Three dots skeleton is shown while user is waiting for the airplane models fetched and the status is loading.  */

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector(selectAirplaneData);
  const { searchValue } = useSelector(selectSearch);

  const getAirplanes = async () => {
    const search = searchValue;

    dispatch(fetchAirplanes({ search }));
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getAirplanes();
  }, [searchValue]);

  const airplanes = items.map((obj: any) => (
    <AirplanesList key={obj.id} {...obj} />
  ));
  const skeletons = [...new Array(12)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className='container grid m-auto mt-10'>
      <Search />
      <div className='grid grid-cols-1 xl:grid-cols-2'>
        {status === 'loading' ? skeletons : airplanes}
      </div>
    </div>
  );
};

export default MainPage;
