import { useDispatch } from 'react-redux';
import { useState, useRef, useCallback } from 'react';
import { debounce } from 'lodash';

import { setSearchValue } from '../redux/search/slice';

export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  // I used the debounce method for a short delay to prevent API from excessive load and being stuck (it happends to MockAPI), when user is searching for an airplane typing string elements in the input element.

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 150),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className='flex items-center justify-center mb-20 position-absolute'>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        placeholder='SEARCH FOR AN AIRPLANE MODEL...'
        className='w-[250px] md:w-[330px] h-[40px] mr-4  rounded-md pl-2 outline-none border-solid border-4 border-gray-500 shadow-lg shadow-blue-500 text-xs md:text-sm '
      />
      <button
        onClick={onClickClear}
        className='flex justify-center bg-gray-500 opacity-80 rounded-xl w-[62px] h-[33px]  '
      >
        <h3 className=' bg-gray-600  text-white h-[25px] px-2 m-auto border-none rounded-lg shadow-md hover:text-blue-300 hover:shadow-white duration-500'>
          Reset
        </h3>
      </button>
    </div>
  );
};
