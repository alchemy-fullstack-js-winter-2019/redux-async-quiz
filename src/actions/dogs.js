import { getDogs } from '../services/dogs';

export const FETCH_DOGS = 'FETCH_DOGS';
export const fetchDogs = () => ({
  type: FETCH_DOGS,
  payload: getDogs()
});


