import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Airplane, SearchAirplaneParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchAirplanes = createAsyncThunk<
  Airplane[],
  SearchAirplaneParams
>('airplane/fetchAirplaneStatus', async (params) => {
  const { search } = params;
  // Here we fetch the airplanes applying search parameter. Pickby from Lodash is used to fom the object properties predicate returns truthy for.
  const { data } = await axios.get<Airplane[]>(
    `SECRET_API_URL`,
    {
      params: pickBy(
        {
          search,
        },
        identity
      ),
    }
  );

  return data;
});
