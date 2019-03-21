import { getDogs } from '../services/dogsApi';

export const  FETCH_DOGS = 'FETCH_DOGS';

export const fetchDogsWithPromise = () => ({
  type: FETCH_DOGS,
  payload: getDogs()
});
