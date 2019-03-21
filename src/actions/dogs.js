import { getDog } from '../services/dogApi';

export const FETCH_DOG_LOADING = 'FETCH_DOG_LOADING';
export const FETCH_DOG = 'FETCH_DOG';
export const fetchDog = () => ({
  type: FETCH_DOG,
  loadStart: FETCH_DOG_LOADING,
  payload: getDog()
});
